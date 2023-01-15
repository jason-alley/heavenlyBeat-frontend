import React from 'react'
import Image from 'next/image'

export default function ServiceItem({title, info, image}: {title: string, info: string, image: string } ) {

  return (
    <div className="serviceItem">
        <Image className='serviceItem--image'
            src={image}
            alt="Image of service offered."
        />
        <p className="serviceItem--title">
            {title}
            <span className="serviceItem--title__underline"></span>
        </p>
        <p className="serviceItem--info">{info}</p>
    </div>
  )
}
