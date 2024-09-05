import { useBox } from "@react-three/cannon";

const debug = false;

function Cube(props) {
  const [ref] = useBox(() => ({ args: [.3, 1, .3], mass: 0, position: [0, 0, 3], type: "Static" }))
  return (
    <mesh ref={ref}>
      <boxGeometry args={[.3, 1, .3]} />
      <meshBasicMaterial transparent={true} opacity={0.25} />
    </mesh>
  )
}

export function ColliderBox({ position, scale }) {
  const [ref] = useBox(() => ({
    args: scale,
    position,
    type: "Static",
  }));

  return (
    debug && (
      <>
        <Cube />
        <mesh position={position}>
          <boxGeometry args={scale} />
          <meshBasicMaterial transparent={true} opacity={0.25} />
        </mesh>
      </>
    )
  );
}
