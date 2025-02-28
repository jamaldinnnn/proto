"use client"

import { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import type * as THREE from "three"

function Lung() {
  const lungRef = useRef<THREE.Group>()
  const gltf = useLoader(
    GLTFLoader,
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compressed_1739194736212_stylizedhumanlungs-1O850PlqRVYt0FgZX1hh5hy2GMTbzW.glb",
  )

  useFrame((state) => {
    if (lungRef.current) {
      lungRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return <primitive ref={lungRef} object={gltf.scene} scale={[7, 7, 7]} position={[0, -1, 0]} />
}

export default function LungModel3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} />
        <Lung />
        <OrbitControls />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}

