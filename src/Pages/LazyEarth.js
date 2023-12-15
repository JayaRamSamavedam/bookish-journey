import React, { lazy, Suspense } from "react";
import { useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = lazy(() => import("./Earth.jsx"));

const EarthCanvas = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <Earth />
    </Suspense>
  );
};

export default EarthCanvas;
