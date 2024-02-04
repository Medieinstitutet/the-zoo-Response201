import React from 'react'
import image from '../assets/images/header.jpg'
import { Background } from '../component/Background'





const Home = () => {
  
  return (
  
  <> 
<section className='headerContainer'>
<header>


<Background />
<h1 className='text'>Mata djuren</h1>

<h1 className='text-shadow'>Mata djuren</h1>
<section className='imageContainer'> <img src={image} alt="background"  /></section>


    </header>
    </section>
  <article className='HomeContainer'> 
<section className='manyObjectsContainer'>

</section>
  </article>
  
  
  </>
  )
 
}

export default Home
