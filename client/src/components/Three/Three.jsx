import React ,{useRef} from 'react'
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";


const Scene = () => {
    const boxRef = useRef();
    useFrame((state, delta) => {
      boxRef.current.rotation.y += 0.02;
    });
  
    return (
      <>
        <Box  ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
          <meshNormalMaterial  />
        </Box>
        <ambientLight  />
      </>
    );
};

const Three = () => {
  return (
    <Canvas   style={{width:"100px",height:"100px",position:'absolute',top:'50px',left:'50px'}} camera={{ fov: 70, position: [0, 0, 3] }}>
    <OrbitControls />
    <Scene />
  </Canvas>
  )
}

export default Three