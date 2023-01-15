import React from 'react'
import Image from 'next/image'
import Button from '../buttons/Button'
import heroPic1 from '../../public/assets/austin-wilcox-3Z7vjpS8b6g-unsplash.jpg'

export default function Hero() {
  return (
    <section className="heroContainer mt-5">
        <div className="heroContainer__image">
            <Image
                src={heroPic1}
                alt="Model in makeup"
            />
        </div>
        <div className="heroContainer__content">
            <h1 className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <Button text="Contact Me" type="btn-outline-warning"/>
            <p className='content-phrase mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius, qui tenetur soluta, tempora quam repellendus ut maxime perferendis voluptatum aspernatur sed veritatis expedita accusantium sapiente amet eos aliquam repudiandae perspiciatis?
            </p>
        </div>
    </section>
  )
}
