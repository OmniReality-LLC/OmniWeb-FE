"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import Lottie from 'lottie-react'
import styles from './page.module.css'
import construction from '../public/lottie/construction.json';
import TopSection from '../components/landingPage/Top/component'
import ServiceSection from '../components/landingPage/Services/component'

//<Lottie animationData={construction} autoplay loop />

export default function Home() {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);


  return (
    <main className={styles.main}>
      <Particles id="tsparticles" url="/particles.json" init={particlesInit} loaded={particlesLoaded} />
      <div className={styles.mainContainer}>

        <TopSection/>
        <ServiceSection/>
      </div>
    </main>
  )
}
