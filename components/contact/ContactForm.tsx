import React from 'react'
import Image from 'next/image'

export default function ContactForm({info, image}: {info: string, image: string}) {
  return (
    <div>
        <Image
            src={image}
            alt="Contact form Image"
        />
        <p>{info}</p>
        <div>
            <span>Heavenleabeat@gmail.com</span>
            
        </div>
    </div>
  )
}
