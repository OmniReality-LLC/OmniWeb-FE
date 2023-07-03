"use client"
import Lottie from 'lottie-react';
import animationData from '../public/lottie/OmniReality404Anim.json';

export default function Custom404() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: "black"}}>
            <Lottie animationData={animationData} loop={false} style={{marginTop:'-50px', height: 'calc(100vh - 6rem)'}}/>
        </div>
    );
}