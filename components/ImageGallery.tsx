"use client";

import { urlFor } from "@/app/sanity"
import Image from "next/image"
import { useState } from "react"

interface iAppProps {
    images: any
}

export default function ImageGallery({images}: iAppProps){
    const [bigImage, setImage] = useState(images[0])
    return(
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image: any, idx: any) => (
                    <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image 
                            src={urlFor(image).url()} 
                            width={200} 
                            height={200} 
                            alt="alt photo" 
                            className="h-full w-full object-cover object-center cursor-pointer"
                        />
                    </div>
                ))}
            </div>
            <div className="relative overflow-hidden rouded-lg bg-gray-100 lg:col-span-4">
                        <Image 
                            src={urlFor(bigImage).url()} 
                            width={500} 
                            height={500} 
                            alt="big photo" 
                            className="h-full w-full object-cover object-center cursor-pointer"
                        />  
            </div>
        </div>
    )
}