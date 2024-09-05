import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { threeToCannon, ShapeType } from 'three-to-cannon';


export function Ramp() {
  const result = useLoader(GLTFLoader, "models/ramp.glb");

  console.log(result)
  const geometry = result.scene.children[0].geometry;

  const vertices = geometry.attributes.position.array;
  const indices = geometry.index.array;

  // console.log("vertices: " + vertices)
  // console.log("indices: " + indices)

  const [ref] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,
      type: "Dynamic",
    }),
    useRef(null)
  );

  return (
    <></>
  )
}
