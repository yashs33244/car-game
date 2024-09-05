import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"
import { Ground } from "./Ground"
import { Track } from "./Track"
import { Car } from "./Car"

export function Scene() {
  const [thirdPerson, setThirdPerson] = useState(true)
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21])

  useEffect(() => {
    function keydownHandler(e) {
      if (e.key == "e") {
        console.log("sdafsdaf: " + thirdPerson)
        if (thirdPerson) {
          setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01])
        }
        setThirdPerson(!thirdPerson)
      }
    }

    window.addEventListener("keydown", keydownHandler)
    return () => window.removeEventListener("keydown", keydownHandler)
  }, [thirdPerson])

  return (
    <Suspense fallback={null} >
      <Environment
        files={"textures/envmap.hdr"}
        background={"both"} />

      <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />

      {/* <Track /> */}
      <Ground />
      <Car thirdPerson={thirdPerson} />
    </Suspense>
  )
}
