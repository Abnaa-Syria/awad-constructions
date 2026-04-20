import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { ReactBits } from 'react-bits/lib/ReactBits'

ReactBits.inject({ Platform: { OS: 'web', Version: 1 } })

function Particles() {
  const pointsRef = useRef(null)
  const isWeb = ReactBits.Platform.select({ web: true, default: false })
  const count = isWeb ? 140 : 90

  const positions = useMemo(() => {
    const pseudoRandom = (seed) => {
      const value = Math.sin(seed * 999.91) * 43758.5453
      return value - Math.floor(value)
    }

    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (pseudoRandom(i + 1) - 0.5) * 18
      arr[i + 1] = (pseudoRandom(i + 2) - 0.2) * 10
      arr[i + 2] = (pseudoRandom(i + 3) - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#a4ce3e" size={0.05} transparent opacity={0.7} />
    </points>
  )
}

function HeroScene() {
  return (
    <div className="hero-canvas-wrap" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 46 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 5, 5]} intensity={0.9} color="#5593e8" />
        <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh position={[0, 0.1, -2]}>
            <torusKnotGeometry args={[1.1, 0.24, 130, 16]} />
            <meshStandardMaterial
              color="#2e61a0"
              emissive="#19375c"
              roughness={0.45}
              metalness={0.35}
              transparent
              opacity={0.25}
              wireframe
            />
          </mesh>
        </Float>
        <Particles />
      </Canvas>
    </div>
  )
}

export default HeroScene
