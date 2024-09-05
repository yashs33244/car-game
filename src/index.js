import "./index.css";
import { createRoot } from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import { Scene } from "./Scene"
import { Physics, Debug } from "@react-three/cannon"

createRoot(document.getElementById("root")).render(
  <Canvas>
    <Physics
      broadphase="SAP"
      gravity={[0, -2.6, 0]} >
      {/* <Debug color={"black"} scale={1}> */}
      <Scene />
      {/* </Debug> */}
    </Physics>
  </Canvas>
)