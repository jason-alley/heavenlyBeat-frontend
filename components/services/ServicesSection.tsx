import React from 'react'
import SectionLayout from '../SectionLayout'
import ServiceItem from './ServiceItem'
import Image from '../../public/assets/placeHolder.jpg'

export default function ServicesSection() {
  const services = [
    { 
      id: 1, 
      title: 'SOFT GLAM', 
      info: 'Up to 3 natural eyeshadows. Soft matte or dewy complexion.', 
      image: Image 
    },
    { 
      id: 2, 
      title: 'BEAUTY ENHANCER', 
      info: 'Minimal to no eyeshadow. Natural complexion.', 
      image: Image 
    },
    { 
      id: 3, 
      title: 'FULL GLAM', 
      info: 'A variety of bold eyeshadow, including glitter and other line work. Bold, flawless complexion.', 
      image: Image 
    },
    { 
      id: 4, 
      title: 'GLITZ GLAM', 
      info: 'An array of shadows, including glitter or shimmer shadow. Complexion can be soft to bold. ', 
      image: Image 
    },
  ]
  return (
    <SectionLayout title='Services' phrase='' bgColor='#fff'>
      {services.map( (service) => {
        return <ServiceItem key={service.id} title={service.title} info={service.info} image={service.image} />
      })}
    </SectionLayout>
  )
}
