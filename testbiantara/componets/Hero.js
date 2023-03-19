import React from 'react'
import Image from 'next/image'
import banner from '../public/banner1.png'
import banner2 from '../public/banner2.png'
import { Carousel } from 'flowbite-react'

export default function Hero() {
  return (
    <>
      <div>
        <div className="relative container pr-11 mr-10 mx-auto">
          <Carousel>
            <div className=" relative">
              <Image src={banner} alt="..." />
            </div>
            <div className=" relative">
              <Image src={banner2} alt="..." />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}
