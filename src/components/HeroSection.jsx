import React from 'react'
import ImageSlider from './ImageSlider'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const HeroSection = () => {
  return (
    <div>
      <ImageSlider images={[img1,img2,img3]}/>
    </div>
  )
}

export default HeroSection
