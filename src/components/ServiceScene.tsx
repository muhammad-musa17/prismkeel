"use client";

import {
  Component,
  useRef,
  type ReactNode,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ServiceId } from "@/data/services";

type SceneKind = ServiceId | "prism";
type Position = [number, number, number];

type Props = {
  kind: SceneKind;
  color: string;
  moving: boolean;
};

function Block({
  position = [0, 0, 0],
  size,
  color,
}: {
  position?: Position;
  size: Position;
  color: string;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} metalness={0.45} roughness={0.3} />
    </mesh>
  );
}

function Screen({
  phone = false,
  position = [0, 0, 0],
  color,
}: {
  phone?: boolean;
  position?: Position;
  color: string;
}) {
  const width = phone ? 1.45 : 2.65;
  const height = phone ? 2.75 : 1.8;

  return (
    <group position={position}>
      <Block size={[width, height, 0.16]} color="#334155" />
      <Block
        position={[0, 0, 0.1]}
        size={[width - 0.13, height - 0.13, 0.035]}
        color="#101b2c"
      />
      <Block
        position={[-width * 0.15, height * 0.3, 0.14]}
        size={[width * 0.5, 0.09, 0.03]}
        color={color}
      />
      <Block
        position={[0, 0.02, 0.14]}
        size={[width * 0.72, height * 0.3, 0.03]}
        color={color}
      />
      {[0, 1, 2].map((i) => (
        <Block
          key={i}
          position={[-width * 0.06, -height * 0.23 - i * 0.14, 0.14]}
          size={[width * (0.6 - i * 0.1), 0.045, 0.03]}
          color="#64748b"
        />
      ))}
    </group>
  );
}

function Model({ kind, color }: Pick<Props, "kind" | "color">) {
  if (kind === "mobile") {
    return (
      <group rotation={[0.05, -0.2, -0.12]}>
        <Screen phone color={color} />
        <Screen phone color="#a78bfa" position={[0.8, 0.25, -0.7]} />
      </group>
    );
  }

  if (kind === "web") {
    return (
      <group rotation={[0.05, -0.2, 0.06]}>
        <Screen color={color} />
        <Screen color="#67e8f9" position={[0.4, 0.45, -0.65]} />
      </group>
    );
  }

  if (kind === "security") {
    return (
      <group>
        <mesh scale={[1, 1.2, 0.38]}>
          <octahedronGeometry args={[1.45]} />
          <meshStandardMaterial
            color={color}
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, 0, 0.68]}>
          <torusGeometry args={[0.35, 0.055, 12, 48]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <Block
          position={[0, -0.24, 0.71]}
          size={[0.55, 0.43, 0.12]}
          color="#ffffff"
        />
      </group>
    );
  }

  if (kind === "marketing") {
    return (
      <group rotation={[0, -0.15, -0.1]}>
        {[-1, 0, 1].map((n) => (
          <group
            key={n}
            position={[n * 0.95, n === 0 ? 0.2 : -0.15, n === 0 ? 0.3 : -0.3]}
            scale={0.56}
          >
            <Screen phone color={n === 0 ? color : "#a78bfa"} />
          </group>
        ))}
      </group>
    );
  }

  if (kind === "modelling") {
    return (
      <mesh rotation={[0.4, 0.2, 0]}>
        <torusKnotGeometry args={[0.85, 0.26, 128, 20]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    );
  }

  if (kind === "ai") {
    return (
      <group>
        <mesh>
          <icosahedronGeometry args={[0.65, 1]} />
          <meshStandardMaterial color={color} metalness={0.65} roughness={0.2} />
        </mesh>

        {[0, 1, 2].map((i) => (
          <mesh key={i} rotation={[i * 0.8, i * 0.6, i * 0.35]}>
            <torusGeometry args={[1.2 + i * 0.1, 0.022, 8, 80]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}

        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * 1.35,
                Math.sin(angle) * 1.35,
                Math.sin(angle * 2) * 0.4,
              ]}
            >
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
          );
        })}
      </group>
    );
  }

  return (
    <group rotation={[0.2, 0, -0.2]}>
      <mesh>
        <cylinderGeometry args={[1.2, 1.2, 2.15, 3]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.18}
          flatShading
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.8, 0.2, 0]}>
        <torusGeometry args={[1.85, 0.018, 8, 100]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

function MovingModel({ kind, color, moving }: Props) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current && moving) {
      group.current.rotation.y += Math.min(delta, 0.05) * 0.22;
    }
  });

  return (
    <group ref={group} rotation={[0.1, -0.3, 0]}>
      <Model kind={kind} color={color} />
    </group>
  );
}

function Fallback() {
  return (
    <div className="flex h-full items-center justify-center" aria-hidden="true">
      <span className="text-[140px] text-cyan-200">◇</span>
    </div>
  );
}

class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <Fallback /> : this.props.children;
  }
}

export default function ServiceScene(props: Props) {
  return (
    <SceneBoundary>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={props.moving ? "always" : "demand"}
        fallback={<Fallback />}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={3} />
        <pointLight position={[-3, 1, 2]} color="#a78bfa" intensity={15} />
        <pointLight position={[2, -2, 3]} color="#67e8f9" intensity={10} />
        <MovingModel {...props} />
      </Canvas>
    </SceneBoundary>
  );
}