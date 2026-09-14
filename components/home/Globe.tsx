"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";

const services = [
  { title: "Mietverwaltung", label: "WERTE ERHALTEN", href: "/leistungen/mietverwaltung", action: "Mehr erfahren", number: "01" },
  { title: "GVS Portal", label: "DIREKT VERBUNDEN", href: "/portal", action: "Portal öffnen", number: "02" },
  { title: "Sanierungskonzepte", label: "ZUKUNFT GESTALTEN", href: "/leistungen/sanierungskonzepte", action: "Mehr erfahren", number: "03" },
];
const position = (lon: number, lat: number, radius = 1.2) => {
  const phi = THREE.MathUtils.degToRad(lat), theta = THREE.MathUtils.degToRad(lon);
  return new THREE.Vector3(radius * Math.cos(phi) * Math.sin(theta), radius * Math.sin(phi), radius * Math.cos(phi) * Math.cos(theta));
};
const orbitPoint = (angle: number, index: number) => new THREE.Vector3(Math.cos(angle) * (1.64 + index * .11), Math.sin(angle) * (1.64 + index * .11), 0).applyEuler(new THREE.Euler(.86 + index * .23, .2 + index * .3, -.38 + index * .95));

export default function Globe() {
  const host = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const paused = useRef(false);
  const [pause, setPause] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => { paused.current = pause; }, [pause]);
  useEffect(() => {
    if (!host.current) return;
    const container = host.current;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" }); }
    catch { setUnavailable(true); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    container.prepend(renderer.domElement);
    renderer.domElement.setAttribute("aria-hidden", "true");
    const scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0x3e75b8, .65));
    const keyLight = new THREE.DirectionalLight(0x8cdcff, 2.2);
    keyLight.position.set(-3, 3, 4); scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x176bff, 10, 12);
    rimLight.position.set(3, -1, 1); scene.add(rimLight);
    const starPositions: number[] = [];
    // Deterministic, layered particles retain their positions across reloads.
    for (let i = 0; i < 440; i++) {
      const n = (v: number) => { const x = Math.sin(v * 127.1) * 43758.5453; return x - Math.floor(x); };
      starPositions.push((n(i + 1) - .5) * 14, (n(i + 600) - .5) * 10, -5 + n(i + 1200) * 6);
    }
    const stars = new THREE.Points(new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3)), new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(13./-p.z,1.,3.);}`,
      fragmentShader: `void main(){float a=1.-smoothstep(.05,.5,length(gl_PointCoord-.5));gl_FragColor=vec4(.36,.67,1.,a*.55);}`,
    }));
    scene.add(stars);
    const camera = new THREE.PerspectiveCamera(37, 1, .1, 30);
    camera.position.z = 6.8;
    const earth = new THREE.Group();
    earth.rotation.z = -.13;
    earth.rotation.y = -.48;
    scene.add(earth);
    earth.add(new THREE.Mesh(new THREE.SphereGeometry(1.19, 64, 48), new THREE.MeshPhongMaterial({ color: 0x031124, emissive: 0x010614, specular: 0x0a2038, shininess: 90 })));
    earth.add(new THREE.Mesh(new THREE.SphereGeometry(1.2, 48, 24), new THREE.MeshBasicMaterial({ color: 0x258cef, wireframe: true, transparent: true, opacity: .085, blending: THREE.AdditiveBlending, depthWrite: false })));
    earth.add(new THREE.Mesh(new THREE.SphereGeometry(1.23, 64, 48), new THREE.ShaderMaterial({
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      vertexShader: `varying vec3 n; varying vec3 v; void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}`,
      fragmentShader: `varying vec3 n; varying vec3 v; void main(){float f=pow(1.-abs(dot(normalize(n),normalize(v))),3.5);gl_FragColor=vec4(.07,.42,1.,f*.7);}`,
    })));
    const abort = new AbortController();
    type Geometry = { type: string; coordinates: number[][][] | number[][][][] };
    fetch("/world.geojson", { signal: abort.signal }).then(r => { if (!r.ok) throw new Error("Map unavailable"); return r.json(); }).then((data: { features: { geometry: Geometry }[] }) => {
      if (abort.signal.aborted) return;
      const map = document.createElement("canvas"); map.width = 1024; map.height = 512;
      const ctx = map.getContext("2d")!;
      ctx.fillStyle = "white";
      const outlines: number[] = [];
      data.features.forEach(({ geometry }) => {
        const polygons = geometry.type === "Polygon" ? [geometry.coordinates as number[][][]] : geometry.coordinates as number[][][][];
        polygons.forEach(polygon => {
          ctx.beginPath();
          polygon.forEach(ring => {
            ring.forEach(([lon, lat], i) => {
              const x = (lon + 180) / 360 * 1024, y = (90 - lat) / 180 * 512;
              if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
              if (i > 0) outlines.push(...position(ring[i - 1][0], ring[i - 1][1], 1.205).toArray(), ...position(lon, lat, 1.205).toArray());
            });
            ctx.closePath();
          });
          ctx.fill("evenodd");
        });
      });
      const pixels = ctx.getImageData(0, 0, 1024, 512).data;
      const dots: number[] = [];
      for (let lat = -80; lat < 84; lat += 1.15) {
        const step = 1.15 / Math.cos(lat * Math.PI / 180);
        for (let lon = -180; lon < 180; lon += step) {
          const x = Math.min(1023, Math.floor((lon + 180) / 360 * 1024));
          const y = Math.min(511, Math.floor((90 - lat) / 180 * 512));
          if (pixels[(y * 1024 + x) * 4 + 3] > 100) dots.push(...position(lon, lat).toArray());
        }
      }
      earth.add(new THREE.Points(new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(dots, 3)), new THREE.PointsMaterial({ color: 0x57b9ff, size: .012, transparent: true, opacity: .85, blending: THREE.AdditiveBlending, depthWrite: false })));
      earth.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(outlines, 3)), new THREE.LineBasicMaterial({ color: 0x338cff, transparent: true, opacity: .36, blending: THREE.AdditiveBlending, depthWrite: false })));
    }).catch(error => { if (error.name !== "AbortError") setUnavailable(true); });
    const markers: THREE.Mesh[] = [];
    const travelers: THREE.Mesh[] = [];
    const network = new THREE.Group(); earth.add(network);
    [[-74, 41], [139, 36], [55, 25], [18, -34]].forEach(([lon, lat]) => {
      const start = position(7, 49, 1.215), end = position(lon, lat, 1.215);
      const points = Array.from({length: 81}, (_, j) => {
        const t = j / 80;
        return start.clone().lerp(end, t).normalize().multiplyScalar(1.215 + Math.sin(t * Math.PI) * .26);
      });
      network.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({color: 0x62caff, transparent: true, opacity: .5})));
    });
    services.forEach((_, i) => {
      const points = Array.from({ length: 257 }, (_, j) => orbitPoint(j / 256 * Math.PI * 2, i));
      earth.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: i === 1 ? 0x75c8ff : 0x2b6abc, transparent: true, opacity: .38, depthWrite: false })));
      const marker = new THREE.Mesh(new THREE.SphereGeometry(.027, 12, 8), new THREE.MeshBasicMaterial({ color: 0xa3e0ff }));
      marker.position.copy(position([-55, 65, 155][i], [36, 5, -42][i], 1.24));
      markers.push(marker); earth.add(marker);
      const traveler = new THREE.Mesh(new THREE.SphereGeometry(.018, 8, 8), new THREE.MeshBasicMaterial({color: 0xa4edff}));
      travelers.push(traveler); earth.add(traveler);
    });
    let width = 1, height = 1;
    const resize = new ResizeObserver(() => {
      width = container.clientWidth; height = container.clientHeight;
      renderer.setSize(width, height); camera.aspect = width / height;
      const availableWidth = Math.max(180, width - (width < 600 ? 130 : 220));
      const availableHeight = Math.max(180, height - 260);
      // Moderate close-up while retaining room around the globe and its surface pins.
      const closeupSize = 1.22 * Math.min(availableWidth, availableHeight);
      const safeWidth = Math.max(180, width - (width <= 760 ? 180 : 240));
      camera.zoom = Math.min(closeupSize, safeWidth) / (height * .55);
      camera.updateProjectionMatrix();
    }); resize.observe(container);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true, frame = 0, previous = 0, elapsed = 0, progress = 0;
    const section = container.closest<HTMLElement>(".globe-hero")!;
    const pointer = new THREE.Vector2();
    const smoothPointer = new THREE.Vector2();
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = container.getBoundingClientRect();
      pointer.set((event.clientX - rect.left) / rect.width - .5, (event.clientY - rect.top) / rect.height - .5);
    };
    const onLeave = () => pointer.set(0, 0);
    container.addEventListener("pointermove", onPointer);
    container.addEventListener("pointerleave", onLeave);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }); observer.observe(container);
    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      const delta = Math.min((now - previous) / 1000, .04); previous = now;
      if (!visible || document.hidden) return;
      const focused = container.contains(document.activeElement);
      const interacting = focused || !!container.querySelector(".orbit-card:hover");
      const moving = !paused.current && !preference.matches && !interacting;
      const targetProgress = preference.matches ? 0 : THREE.MathUtils.clamp(-section.getBoundingClientRect().top / Math.max(1, section.offsetHeight - height), 0, 1);
      if (!interacting) progress += (targetProgress - progress) * (1 - Math.exp(-delta * 7));
      if (moving) elapsed += delta;
      if (!interacting) smoothPointer.lerp(preference.matches || paused.current ? new THREE.Vector2() : pointer, 1 - Math.exp(-delta * 4));
      const dive = THREE.MathUtils.smoothstep(progress, 0, 1);
      camera.position.set(dive * .6 + smoothPointer.x * .22, dive * .22 - smoothPointer.y * .16, 6.8 - dive * 2.15);
      camera.lookAt(0, 0, 0);
      camera.updateMatrixWorld();
      earth.rotation.y = -.48 + elapsed * .055 + dive * .6;
      earth.rotation.x = -.12 * dive;
      earth.rotation.z = -.13 + dive * .09;
      stars.rotation.y = elapsed * .006 - smoothPointer.x * .025;
      stars.position.z = dive * .4;
      travelers.forEach((traveler, i) => traveler.position.copy(orbitPoint(elapsed * (.16 + i * .035) + i * 2.1, i)));
      container.style.setProperty("--dive", String(dive));
      section.style.setProperty("--scroll-progress", String(progress));
      earth.updateMatrixWorld(true);
      markers.forEach((marker, i) => {
        const world = marker.getWorldPosition(new THREE.Vector3());
        const projected = world.clone().project(camera);
        const card = cards.current[i];
        if (card) {
          const x = (projected.x * .5 + .5) * width;
          const y = (-projected.y * .5 + .5) * height;
          const facing = world.clone().normalize().dot(camera.position.clone().sub(world).normalize());
          const behind = facing < 0;
          const offscreen = x < card.offsetWidth / 2 + 12 || x > width - card.offsetWidth / 2 - 12 || y < 110 + card.offsetHeight || y > height - 60;
          const disabled = behind || offscreen;
          const scale = .62 + .38 * THREE.MathUtils.smoothstep(facing, -.75, .25);
          // Scale around the surface pin, so the card remains attached to the globe.
          card.style.transformOrigin = "50% 100%";
          card.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%) scale(${scale})`;
          card.style.pointerEvents = disabled ? "none" : "auto";
          card.inert = disabled;
          card.dataset.side = behind ? "back" : "front";
          const link = card.querySelector("a");
          if (link) {
            link.tabIndex = disabled ? -1 : 0;
            if (disabled) link.setAttribute("aria-disabled", "true");
            else link.removeAttribute("aria-disabled");
          }
          card.style.zIndex = String(Math.round(world.z * 10) + 30);
          card.style.opacity = offscreen ? "0" : behind ? ".22" : "1";
        }
      });
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame); container.removeEventListener("pointermove", onPointer); container.removeEventListener("pointerleave", onLeave); abort.abort(); resize.disconnect(); observer.disconnect();
      scene.traverse(object => { if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) { object.geometry.dispose(); const materials = Array.isArray(object.material) ? object.material : [object.material]; materials.forEach(m => m.dispose()); } });
      renderer.dispose(); renderer.domElement.remove();
    };
  }, []);
  return <div className="globe-visual">
    <div className="globe-coordinate">49°14′ N &nbsp; 06°59′ E <span>SAARBRÜCKEN</span></div>
    <div className={`globe-scene${unavailable ? " globe-unavailable" : ""}`} ref={host} aria-label="Blauer 3D-Globus mit vernetzten GVS-Leistungen">
      {services.map((service, i) => <div key={service.number} ref={el => { cards.current[i] = el; }} className={`orbit-card orbit-card-${i}`}>
        <div className="orbit-label"><span className="orbit-dot" />{service.label}<span>{service.number}</span></div>
        <h2>{service.title}</h2>
        <Link href={service.href}>{service.action}<span aria-hidden>↗</span></Link>
      </div>)}
    </div>
    <div className="globe-controls"><span className="globe-scroll-cue"><span aria-hidden="true">↓</span> Scrollen & entdecken</span><button type="button" onClick={() => setPause(v => !v)} aria-pressed={pause}>{pause ? "▶ Animation starten" : "Ⅱ Animation pausieren"}</button></div>
  </div>;
}
