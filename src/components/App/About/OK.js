import React,{ useCallback, useEffect, useState } from "react";
import Lottie from 'react-lottie';
import animationData from "../../../../src/particles3.json"
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

return (
  <div className="absolute">
    <Lottie 
      options={defaultOptions}
      // height={400}
      // width={400}
    />
  </div>
);
}

export default ParticlesComponent