import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FloatingPaths: React.FC<{ position: number }> = ({ position }) => {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(255,255,255,${0.1 + i * 0.01})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
          />
        ))}
      </svg>
    </div>
  )
}

const LungGraphic: React.FC = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-full md:w-3/4 h-full text-white/10"
      viewBox="0 0 514.327 514.327"
      fill="currentColor"
    >
      <path d="M454.982,130.327c-22.109-31.418-52.364-47.709-91.927-47.709c-34.909,0-60.509,26.764-67.491,73.309c-2.327,17.455-1.164,31.418,0,44.218c1.164,9.309,1.164,17.455,1.164,26.764c-16.291-10.473-29.091-23.273-29.091-39.564V24.436c0-6.982-4.655-11.636-11.636-11.636c-6.982,0-11.636,4.655-11.636,11.636v162.909c0,16.291-12.8,30.255-29.091,39.564c0-9.309,0-18.618,1.164-26.764c1.164-13.964,2.327-27.927,0-44.218c-6.982-46.545-32.582-73.309-67.491-73.309c-39.564,0-69.818,16.291-90.764,47.709C29.091,172.218,0,229.236,0,339.782c0,59.345,5.818,129.164,46.545,152.436c6.982,4.655,19.782,9.309,37.236,9.309c59.345,0,118.691-54.691,139.636-93.091c5.818-12.8,9.309-29.091,9.309-52.364c0-24.436-3.491-45.382-6.982-65.164c-1.164-5.818-6.982-10.473-13.964-9.309c-5.818,1.164-10.473,6.982-9.309,13.964c3.491,18.618,6.982,38.4,6.982,61.673c0,18.618-2.327,33.745-6.982,41.891c-17.455,32.582-69.818,80.291-118.691,80.291c-12.8,0-20.945-3.491-26.764-5.818c-34.909-19.782-34.909-104.727-34.909-132.655c0-103.564,26.764-157.091,53.527-196.655c18.618-26.764,41.891-38.4,73.309-38.4c23.273,0,39.564,19.782,45.382,53.527c2.327,13.964,1.164,25.6,0,38.4s-2.327,25.6-1.164,40.727c-6.982,3.491-15.127,5.818-20.945,6.982s-10.473,8.145-8.145,13.964c1.164,4.655,5.818,8.146,11.636,8.146c1.164,0,2.327,0,3.491,0c11.636-3.491,57.018-16.291,77.964-46.545c22.109,30.255,67.491,43.055,77.964,46.545c1.164,0,2.327,0,3.491,0c4.655,0,9.309-3.491,11.636-8.146c1.164-5.818-2.327-12.8-8.145-13.964s-13.964-4.655-20.945-6.982c1.164-15.127,0-27.927-1.164-40.727s-2.327-24.436,0-38.4c5.818-33.745,22.109-53.527,45.382-53.527c31.418,0,54.691,11.636,72.146,37.236c26.764,38.4,53.527,93.091,53.527,196.655c0,27.927,0,112.873-34.909,132.655c-4.655,2.327-13.964,5.818-26.764,5.818c-48.873,0-101.236-47.709-118.691-80.291c-4.655-8.145-6.982-23.273-6.982-41.891c0-23.273,3.491-41.891,6.982-61.673c1.164-5.818-3.491-12.8-9.309-13.964c-5.818-1.164-12.8,3.491-13.964,9.309c-3.491,19.782-6.982,40.727-6.982,65.164c0,23.273,3.491,40.727,9.309,52.364c19.782,38.4,79.127,93.091,139.636,93.091c17.455,0,30.255-4.655,37.236-9.309c40.727-23.273,46.545-93.091,46.545-152.436C514.327,229.236,485.236,172.218,454.982,130.327z" />
    </svg>
  )
}

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      <FloatingPaths position={1} />
      <LungGraphic />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to AsthmaQuest
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
          Embark on a journey to master asthma management through interactive learning and challenges
        </p>
        <Link href="/home" passHref>
          <Button className="bg-white text-blue-600 hover:bg-blue-100 transition-colors text-lg px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Start Your Quest
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage

