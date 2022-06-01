import React from 'react';
// Link is like href in next js
import Link from 'next/link';
import { urlFor } from '../lib/client';


const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <p className='beats-solo'>{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img src={urlFor(heroBanner.image)} alt='Headphones Image' className='hero-banner-image'></img>
      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner