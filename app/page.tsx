"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks"
import { loadFull } from "tsparticles";
import { Pages } from '../types/interfaces';
import { Page } from '../types/interfaces';
import { Section } from '../types/interfaces';
import styles from './page.module.css'
import TopSection from '../components/landingPage/Top/component'
import ServiceSection from '../components/landingPage/Services/component'


import pagesData from '../public/data.json'

//<Lottie animationData={construction} autoplay loop />
//import Lottie from 'lottie-react'
//import construction from '../public/lottie/construction.json';

export default function Home() {

  //Grabbing page Data
  //Remove this later and make a helper file to do this for us

  const allPages: Pages = pagesData;
  const pageOne: Page = allPages.pages[0];
  const section: Section = pageOne.sections[0];


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
        <TopSection />
        <ServiceSection section={section} />
        <ServiceSection section={section} />
        <ServiceSection section={section} />

      </div>
    </main>
  )
}
