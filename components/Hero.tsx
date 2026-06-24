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
      [
        { r: 0.4, h: 0.55, y: 0.55 },
        { r: 0.3, h: 0.45, y: 0.85 },
        { r: 0.18, h: 0.35, y: 1.1 },
      ].forEach((l) => {
        const cone = new THREE.Mesh(
          new THREE.ConeGeometry(l.r, l.h, 8),
          mat(0x2d6b3e, 0.9)
        );
        cone.position.y = l.y;
        cone.castShadow = true;
        g.add(cone);
      });
      g.position.set(x, -2, z);
      return g;
    };
    scene.add(makeTree(-2.8, 1.2));
    scene.add(makeTree(-3.3, -0.5));
    scene.add(makeTree(3.2, 0.8));
    scene.add(makeTree(3.8, -1));

    // ── Floating particles ────────────────────────────────
    const particles = new THREE.Group();
    const pMat = new THREE.MeshStandardMaterial({
      color: 0xfff0a0,
      emissive: 0xfff080,
      emissiveIntensity: 0.6,
    });
    for (let i = 0; i < 18; i++) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 6), pMat);
      p.position.set(
        (Math.random() - 0.5) * 5,
        Math.random() * 5,
        (Math.random() - 0.5) * 3
      );
      (p as any).userData = {
        speed: 0.004 + Math.random() * 0.008,
        offset: Math.random() * Math.PI * 2,
      };
      particles.add(p);
    }
    scene.add(particles);

    // ── Mouse parallax ────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    let targetRotX = 0, targetRotY = 0;
    let currentRotX = 0, currentRotY = 0;

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
    <div className="w-full max-w-[1400px] mx-auto bg-[#f4ecdf] rounded-[32px] shadow-[0_18px_50px_rgba(28,28,28,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(204,167,82,0.08) 0%, transparent 60%)" }}
      />

      {/* ── Left ───────────────────────────────────────── */}
      <div className="flex flex-col justify-center px-12 py-14 lg:px-14 relative z-10">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-7 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="h-px w-10 bg-[#cca752] flex-shrink-0" />
          <span className="text-[#cca752] text-[10px] font-semibold tracking-[0.2em] uppercase">
            Premium Residences &middot; IDH, Colombo
          </span>
        </div>

        {/* Headline */}
        <div className="mb-5">
          <span
            className="block font-bold text-[#1c1c1c] uppercase leading-[0.88]"
            style={{
              fontFamily: "var(--font-oswald, 'Oswald', sans-serif)",
              fontSize: "clamp(60px, 7vw, 88px)",
              animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards 0.35s",
              opacity: 0,
            }}
          >
            LIVE<br />ABOVE
          </span>
          <span
            className="block text-[#cca752] leading-[0.88] mt-1"
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
              fontSize: "clamp(60px, 7vw, 88px)",
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
          className="text-[#1c1c1c]/65 text-sm leading-relaxed max-w-[360px] mb-10"
          style={{ animation: "fadeUp 0.6s ease forwards 0.65s", opacity: 0 }}
        >
          22 meticulously designed apartments in IDH, Colombo, offering an elevated lifestyle
          where modern architecture meets curated living.
        </p>

        {/* CTAs */}
        <div
          className="flex items-center gap-7"
          style={{ animation: "fadeUp 0.6s ease forwards 0.8s", opacity: 0 }}
        >
          <button className="px-7 py-3.5 bg-[#1c1c1c] text-white text-sm font-medium rounded-full hover:bg-[#2e2e2e] transition-all hover:-translate-y-px">
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
          className="flex items-center gap-8 mt-12"
          style={{ animation: "fadeUp 0.6s ease forwards 1s", opacity: 0 }}
        >
          {[
            { num: "22", label: "Apartments" },
            { num: "5★", label: "Amenities" },
            { num: "IDH", label: "Colombo" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-8">
              {i > 0 && <div className="w-px h-8 bg-[#1c1c1c]/10" />}
              <div>
                <div
                  className="text-[#1c1c1c] text-2xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-oswald, 'Oswald', sans-serif)" }}
                >
                  {s.num}
                </div>
                <div className="text-[#1c1c1c]/45 text-[10px] uppercase tracking-widest mt-1">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right / 3D Scene ────────────────────────────── */}
      <div className="relative flex items-center justify-center py-10 pr-10 pl-0 z-10">
        {/* Three.js canvas */}
        <div
          className="w-full rounded-3xl overflow-hidden"
          style={{
            height: 520,
            animation: "fadeIn 1s ease forwards 0.4s",
            opacity: 0,
          }}
        >
          <canvas ref={canvasRef} className="w-full h-full rounded-3xl" />
        </div>

        {/* Amenity badges */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
          {[
            { label: "Pool & Spa", color: "#cca752" },
            { label: "Fitness Center", color: "#4caf7d" },
            { label: "24/7 Security", color: "#5b8fd4" },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm border border-white/80 px-4 py-2 rounded-full text-[11.5px] font-semibold text-[#1c1c1c] flex items-center gap-2 shadow-md whitespace-nowrap"
              style={{
                animation: `slideLeft 0.5s ease forwards ${1 + i * 0.15}s`,
                opacity: 0,
                transform: "translateX(20px)",
              }}
            >
              <span
                className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                style={{ background: b.color }}
              />
              {b.label}
            </div>
          ))}
        </div>

        {/* Availability card */}
        <div
          className="absolute bottom-14 left-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3.5 shadow-xl min-w-[160px] z-20"
          style={{ animation: "fadeUp 0.6s ease forwards 1.4s", opacity: 0 }}
        >
          <p className="text-[10px] uppercase tracking-widest text-[#1c1c1c]/40 mb-1">
            Available Units
          </p>
          <p
            className="text-[#1c1c1c] text-xl font-bold leading-none"
            style={{ fontFamily: "var(--font-oswald, 'Oswald', sans-serif)" }}
          >
            7 <span className="text-sm font-normal text-[#1c1c1c]/35">of 22</span>
          </p>
          <p className="text-[11px] font-semibold text-[#cca752] mt-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4caf7d] inline-block animate-pulse" />
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
  );
};