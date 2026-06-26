"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement!;
    const W = container.offsetWidth || 480;
    const H = container.offsetHeight || 520;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(4, 3.5, 7);
    camera.lookAt(0, 1, 0);

    // Lighting
    scene.add(new THREE.AmbientLight(0xfff8ee, 0.6));

    const sunLight = new THREE.DirectionalLight(0xfff4d6, 1.4);
    sunLight.position.set(5, 10, 6);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(1024, 1024);
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 30;
    sunLight.shadow.camera.left = -8;
    sunLight.shadow.camera.right = 8;
    sunLight.shadow.camera.top = 8;
    sunLight.shadow.camera.bottom = -8;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0xd4e8ff, 0.5);
    fillLight.position.set(-4, 3, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xcca752, 0.8, 15);
    rimLight.position.set(-2, 5, -3);
    scene.add(rimLight);

    // Helper
    const mat = (
      color: number,
      rough = 0.3,
      metal = 0.0,
      opacity = 1
    ) =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: rough,
        metalness: metal,
        transparent: opacity < 1,
        opacity,
      });

    // ── Building ──────────────────────────────────────────
    const building = new THREE.Group();

    // Main body
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.8, 5, 1.6), mat(0xf0e8d8, 0.4));
    body.position.y = 2.5;
    body.castShadow = true;
    body.receiveShadow = true;
    building.add(body);

    // Upper tower
    const tower = new THREE.Mesh(new THREE.BoxGeometry(1.6, 3, 1.4), mat(0xe8dcc8, 0.45));
    tower.position.set(-0.4, 6.5, 0);
    tower.castShadow = true;
    building.add(tower);

    // Gold accent stripes
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(2.82, 0.08, 1.62),
      mat(0xc9a04a, 0.2, 0.6)
    );
    for (let i = 0; i < 5; i++) {
      const s = stripe.clone();
      s.position.y = 0.8 + i * 1.0;
      building.add(s);
    }

    // Windows
    const addWindows = (
      cols: number,
      rows: number,
      startY: number,
      bz: number,
      ox = 0
    ) => {
      const wg = new THREE.Group();
      const gapX = 0.5, gapY = 0.75, sz = 0.22, depth = 0.04;
      const totalW = (cols - 1) * gapX;
      const wMat = new THREE.MeshStandardMaterial({
        color: 0x8ab4d4,
        roughness: 0.05,
        metalness: 0.3,
        transparent: true,
        opacity: 0.75,
      });
      const frameMat = mat(0x1c1c1c, 0.8);

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = ox - totalW / 2 + c * gapX;
          const y = startY + r * gapY;

          const frame = new THREE.Mesh(
            new THREE.BoxGeometry(sz + 0.06, sz * 1.4 + 0.04, depth),
            frameMat
          );
          frame.position.set(x, y, bz + 0.01);
          wg.add(frame);

          const pane = new THREE.Mesh(
            new THREE.BoxGeometry(sz, sz * 1.4, depth),
            wMat
          );
          pane.position.set(x, y, bz + 0.02);
          wg.add(pane);

          if (Math.random() > 0.5) {
            const glow = new THREE.Mesh(
              new THREE.BoxGeometry(sz * 0.9, sz * 1.3, 0.01),
              new THREE.MeshStandardMaterial({
                color: 0xfff3c4,
                emissive: 0xfff3c4,
                emissiveIntensity: 0.3,
              })
            );
            glow.position.set(x, y, bz + 0.025);
            wg.add(glow);
          }
        }
      }
      return wg;
    };

    building.add(addWindows(4, 5, 0.8, 0.81, 0));
    building.add(addWindows(2, 4, 2.3, 0.71, -0.4));

    // Balconies
    for (let i = 0; i < 4; i++) {
      const balc = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.06, 0.4),
        mat(0xd4c9b0, 0.5)
      );
      balc.position.set(0.7, 1.0 + i * 1.0, 1.0);
      balc.castShadow = true;
      building.add(balc);

      const rail = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.2, 0.02),
        mat(0x888888, 0.3, 0.5)
      );
      rail.position.set(0.7, 1.1 + i * 1.0, 1.18);
      building.add(rail);
    }

    // Roof edge (gold)
    const roofEdge = new THREE.Mesh(
      new THREE.BoxGeometry(2.95, 0.12, 1.75),
      mat(0xc9a04a, 0.2, 0.5)
    );
    roofEdge.position.y = 5.06;
    building.add(roofEdge);

    // Lobby
    const lobby = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.8, 0.5),
      mat(0xd6c8b0, 0.6)
    );
    lobby.position.set(0, 0.4, 1.05);
    building.add(lobby);

    const door = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.6, 0.02),
      mat(0x1c1c1c, 0.8, 0.3)
    );
    door.position.set(0, 0.3, 1.32);
    building.add(door);

    scene.add(building);
    building.position.set(-0.5, -2, 0);

    // ── Ground ────────────────────────────────────────────
    const ground = new THREE.Mesh(
      new THREE.CylinderGeometry(6, 6, 0.15, 64),
      mat(0xd8cdb8, 0.9)
    );
    ground.position.y = -2.08;
    ground.receiveShadow = true;
    scene.add(ground);

    // ── Pool ──────────────────────────────────────────────
    const pool = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 0.12, 1.2),
      new THREE.MeshStandardMaterial({
        color: 0x4a9abe,
        roughness: 0.05,
        metalness: 0.2,
        transparent: true,
        opacity: 0.85,
      })
    );
    pool.position.set(2.5, -2.0, -0.2);
    scene.add(pool);

    const poolEdge = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.08, 1.3),
      mat(0xe8dcc8, 0.4)
    );
    poolEdge.position.set(2.5, -1.95, -0.2);
    scene.add(poolEdge);

    // ── Trees ─────────────────────────────────────────────
    const makeTree = (x: number, z: number) => {
      const g = new THREE.Group();
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.06, 0.5, 8),
        mat(0x7a5c3a, 0.9)
      );
      trunk.position.y = 0.25;
      g.add(trunk);

      const foliage = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 8, 8),
        new THREE.MeshStandardMaterial({
          color: 0x5a7a3a,
          roughness: 0.75,
          metalness: 0,
        })
      );
      foliage.position.y = 0.6;
      foliage.castShadow = true;
      g.add(foliage);
      g.position.set(x, -2.05, z);
      return g;
    };

    scene.add(makeTree(-4, 1));
    scene.add(makeTree(4.2, 1.5));
    scene.add(makeTree(-5.5, -1));

    // ── Particles ─────────────────────────────────────────
    const particles = new THREE.Group();
    for (let i = 0; i < 40; i++) {
      const p = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 4, 4),
        new THREE.MeshStandardMaterial({ color: 0xfff3c4, emissive: 0xfff3c4, emissiveIntensity: 0.2 })
      );
      p.position.set((Math.random() - 0.5) * 8, Math.random() * 3 - 1.5, (Math.random() - 0.5) * 8);
      (p as any).userData = { speed: 0.001 + Math.random() * 0.002, offset: Math.random() * 10 };
      particles.add(p);
    }
    scene.add(particles);

    let mouseX = 0, mouseY = 0, currentRotX = 0, currentRotY = 0, targetRotX = 0, targetRotY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Animation loop ────────────────────────────────────
    let t = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.016;

      targetRotY = mouseX * 0.15;
      targetRotX = -mouseY * 0.08;
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      building.rotation.y = currentRotY;
      scene.rotation.x = currentRotX * 0.3;
      building.position.y = -2 + Math.sin(t * 0.4) * 0.04;

      particles.children.forEach((p) => {
        const { speed, offset } = (p as any).userData;
        p.position.y += speed;
        p.position.x += Math.sin(t * 0.8 + offset) * 0.003;
        p.scale.setScalar(0.8 + Math.sin(t * 2 + offset) * 0.3);
        if (p.position.y > 4) p.position.y = -1.5;
      });

      rimLight.position.x = Math.sin(t * 0.3) * 3 - 2;
      rimLight.position.z = Math.cos(t * 0.3) * 3 - 3;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ────────────────────────────────────────────
    const onResize = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full bg-[#f4ecdf] shadow-[0_18px_50px_rgba(28,28,28,0.06)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 relative">
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(204,167,82,0.08) 0%, transparent 60%)" }}
        />

        {/* ── Left ───────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-0 py-8 lg:py-20 lg:px-8 relative z-10">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="h-px w-8 sm:w-10 bg-[#cca752] flex-shrink-0" />
            <span className="text-[#cca752] text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">
              Premium Residences · IDH, Colombo
            </span>
          </div>

          {/* Headline */}
          <div className="mb-4 sm:mb-6">
            <span
              className="block font-bold text-[#1c1c1c] uppercase leading-tight"
              style={{
                fontFamily: "var(--font-oswald, 'Oswald', sans-serif)",
                fontSize: "clamp(40px, 8vw, 88px)",
                animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards 0.35s",
                opacity: 0,
              }}
            >
              LIVE<br />ABOVE
            </span>
            <span
              className="block text-[#cca752] leading-tight mt-1"
              style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
                fontSize: "clamp(40px, 8vw, 88px)",
                fontStyle: "italic",
                animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards 0.5s",
                opacity: 0,
              }}
            >
              the rest
            </span>
          </div>

          {/* Description */}
          <p
            className="text-[#1c1c1c]/65 text-sm sm:text-base leading-relaxed max-w-[360px] mb-6 sm:mb-10"
            style={{ animation: "fadeUp 0.6s ease forwards 0.65s", opacity: 0 }}
          >
            22 meticulously designed apartments in IDH, Colombo, offering an elevated lifestyle
            where modern architecture meets curated living.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7"
            style={{ animation: "fadeUp 0.6s ease forwards 0.8s", opacity: 0 }}
          >
            <button className="px-6 sm:px-8 py-3 bg-[#1c1c1c] text-white text-sm font-medium hover:bg-[#2e2e2e] transition-all hover:-translate-y-px w-full sm:w-auto">
              View Apartments
            </button>
            <button className="text-sm font-medium text-[#1c1c1c] hover:text-[#cca752] transition-colors flex items-center gap-1.5 group">
              Schedule Tour
              <svg className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mt-8 sm:mt-12"
            style={{ animation: "fadeUp 0.6s ease forwards 1s", opacity: 0 }}
          >
            {[
              { num: "22", label: "Apartments" },
              { num: "5★", label: "Amenities" },
              { num: "IDH", label: "Colombo" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-6 sm:gap-8">
                {i > 0 && <div className="hidden sm:block w-px h-8 bg-[#1c1c1c]/10" />}
                <div>
                  <div
                    className="text-[#1c1c1c] text-2xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-oswald, 'Oswald', sans-serif)" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[#1c1c1c]/45 text-[9px] sm:text-[10px] uppercase tracking-widest mt-1.5">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right / 3D Scene ────────────────────────────── */}
        <div className="relative flex items-center justify-center py-8 sm:py-10 px-0 lg:pr-8 z-10">
          {/* Three.js canvas */}
          <div
            className="w-full overflow-hidden"
            style={{
              height: "clamp(300px, 60vw, 520px)",
              animation: "fadeIn 1s ease forwards 0.4s",
              opacity: 0,
            }}
          >
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>

          {/* Amenity badges */}
          <div className="absolute right-2 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20 hidden sm:flex">
            {[
              { label: "Pool & Spa", color: "#cca752" },
              { label: "Fitness Center", color: "#4caf7d" },
              { label: "24/7 Security", color: "#5b8fd4" },
            ].map((b, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm border border-white/80 px-3 sm:px-4 py-2 text-[10px] sm:text-[11.5px] font-semibold text-[#1c1c1c] flex items-center gap-2 shadow-md whitespace-nowrap"
                style={{
                  animation: `slideLeft 0.5s ease forwards ${1 + i * 0.15}s`,
                  opacity: 0,
                  transform: "translateX(20px)",
                }}
              >
                <span
                  className="w-[7px] h-[7px] flex-shrink-0"
                  style={{ background: b.color }}
                />
                {b.label}
              </div>
            ))}
          </div>

          {/* Availability card */}
          <div
            className="absolute bottom-4 sm:bottom-8 left-2 sm:left-4 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-2.5 sm:py-3.5 shadow-xl min-w-[140px] sm:min-w-[160px] z-20"
            style={{ animation: "fadeUp 0.6s ease forwards 1.4s", opacity: 0 }}
          >
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#1c1c1c]/40 mb-0.5 sm:mb-1">
              Available Units
            </p>
            <p
              className="text-[#1c1c1c] text-lg sm:text-xl font-bold leading-none"
              style={{ fontFamily: "var(--font-oswald, 'Oswald', sans-serif)" }}
            >
              7 <span className="text-xs sm:text-sm font-normal text-[#1c1c1c]/35">of 22</span>
            </p>
            <p className="text-[10px] sm:text-[11px] font-semibold text-[#cca752] mt-1 sm:mt-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 flex-shrink-0 bg-[#4caf7d] animate-pulse" />
              Accepting reservations
            </p>
          </div>
        </div>

        {/* Keyframe styles */}
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(20px); }
            to   { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </div>
    </div>
  );
};