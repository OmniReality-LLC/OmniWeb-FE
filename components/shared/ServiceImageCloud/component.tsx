"use client"
import { CldImage } from "next-cloudinary";

interface ImageInterface{

    src: string;
    width: number;
    height: number;
    alt: string;
    className: string;
    quality?: number;
}

export default function CloudinaryImageGrabber({src, width, height, alt, className, quality}: ImageInterface) {
    return (

        <CldImage width={width} height={height} src={src} alt={alt} className={className} quality={quality}/>

    );
}
