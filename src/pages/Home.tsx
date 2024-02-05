import React, { useState } from 'react'
import image from '../assets/images/header.jpg'
import ShowHungryanimals from '../component/ShowHungryanimals'
import { Background } from '../component/Background'




const Home =  () => {



  return (
  
  <article className='homeArticle'> 
<section className='headerContainer'>
<header>

<Background />

<h1 className='text'>Mata djuren</h1>

<h1 className='text-shadow'>Mata djuren</h1>
<section className='imageContainer'> <img src={image} alt="background"  /></section>


    </header>
    </section>
  <section className='HomeContainer'> 
<ShowHungryanimals />

  </section>
  
  
  </article>
  )
 
}

export default Home
