import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import heroImage from "../../assets/IDHU.png";

// ─── Floating photo plane with mouse-reactive tilt ───────────────────────────
const PhotoPlane: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const texture = useLoader(THREE.TextureLoader, heroImage);

  useEffect(() => {
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
    }
  }, [texture]);

  // Compute plane size from actual texture dimensions so nothing is cropped
  const planeW = 2.8;
  const planeH = texture.image
    ? (texture.image.height / texture.image.width) * planeW
    : planeW * 2.1; // fallback portrait ratio

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.1;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.current.x * 0.15,
      0.06
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -mouse.current.y * 0.08,
      0.06
    );
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[planeW, planeH]} />
      <meshBasicMaterial
        map={texture}
        transparent
        alphaTest={0.05}
        color="#d0d8ff"
      />
    </mesh>
  );
};

// ─── Orbiting neon particles ──────────────────────────────────────────────────
interface ParticleOrbitProps {
  radius: number;
  speed: number;
  color: string;
  size: number;
  yOffset?: number;
  phaseOffset?: number;
}

const ParticleOrbit: React.FC<ParticleOrbitProps> = ({
  radius,
  speed,
  color,
  size,
  yOffset = 0,
  phaseOffset = 0,
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + phaseOffset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius * 0.4;
    ref.current.position.y = yOffset + Math.sin(t * 1.3) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
        roughness={0.1}
      />
    </mesh>
  );
};

// ─── Glow halo plane behind the photo ────────────────────────────────────────
const GlowHalo: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.12 + Math.sin(t * 1.2) * 0.04;
  });

  return (
    <mesh ref={ref} position={[0, 0, -0.3]}>
      <circleGeometry args={[2.6, 64]} />
      <meshBasicMaterial color="#00f2fe" transparent opacity={0.12} />
    </mesh>
  );
};

// ─── Full scene ───────────────────────────────────────────────────────────────
const SceneContent: React.FC = () => (
  <>
    {/* Ambient only for the orbiting particles — photo uses meshBasicMaterial
        so it's unaffected by lights and renders at full natural brightness */}
    <ambientLight intensity={0.8} />

    <GlowHalo />

    <Suspense fallback={null}>
      <PhotoPlane />
    </Suspense>

    {/* Orbiting particles only — no rings crossing the photo */}
    <ParticleOrbit radius={2.9} speed={0.7}  color="#ff007f" size={0.1}  yOffset={0.4}  phaseOffset={0} />
    <ParticleOrbit radius={2.9} speed={0.7}  color="#00ffff" size={0.1}  yOffset={-0.4} phaseOffset={Math.PI} />
    <ParticleOrbit radius={3.4} speed={0.45} color="#8a2be2" size={0.08} yOffset={0}    phaseOffset={1.2} />
    <ParticleOrbit radius={3.4} speed={0.45} color="#ffff00" size={0.07} yOffset={0.2}  phaseOffset={3.5} />
  </>
);

// ─── Exported component ───────────────────────────────────────────────────────
export const WorkspaceScene: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(support);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="relative flex h-[420px] md:h-[520px] w-full items-center justify-center">
        <div className="absolute h-64 w-64 rounded-full bg-cyber-cyan opacity-20 blur-[60px] animate-pulse-glow" />
        <img
          src={heroImage}
          alt="Kishor S"
          className="relative z-10 h-full object-contain drop-shadow-[0_0_30px_rgba(0,242,254,0.4)]"
        />
      </div>
    );
  }

  return (
    <div className="relative h-[500px] md:h-[620px] w-full">
      {/* Ambient glow behind canvas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-72 w-72 rounded-full bg-cyber-blue opacity-10 blur-[80px]" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 52 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <SceneContent />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};
