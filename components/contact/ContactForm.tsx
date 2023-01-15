import React from 'react'
import Image from 'next/image'
import Button from '../buttons/Button'

export default function ContactForm({info, image}: {info: string, image: string}) {
  return (
    <div className="contactForm">
        <Image className="contactForm--img"
            src={image}
            alt="Contact form Image"
        />
        <div className="contactForm--end">
            <p className="contactForm--info">{info}</p>
            <p className="contactForm--mail">Heavenleabeat@gmail.com</p>
            <Button text='Contact Me' type="btn-lg btn-outline-warning" />
        </div>
    </div>
  )
}
