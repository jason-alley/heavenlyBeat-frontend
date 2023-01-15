import React, { Children } from 'react'
import SectionLayout from '../SectionLayout'
import ContactForm from './ContactForm'
import tempImage from  '../../public/assets/austin-wilcox-tWbn0j8c0ic-unsplash.jpg'

export default function Contact() {
const bgcolor = 'rgba(243, 240, 248, 0.3)'
const info = 'Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te.'
  return (
    <SectionLayout title="Contact Me" phrase="" bgColor={bgcolor}>
        <ContactForm info={info} image={tempImage} />
    </SectionLayout>
  )
}
