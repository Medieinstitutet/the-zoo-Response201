import React, { useState } from 'react'
import image from '../assets/images/header.jpg'
import ShowHungryanimals from '../component/ShowHungryanimals'
import { Background } from '../component/Background'
import { GetAnimalData } from '../component/GetAnimalData'
import { AnimalModel } from '../models/AnimalModel'


const Home =  () => {
const [loading, setLoading] = useState(false)
const [animalList, setAnimalList] =  useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]'))
/* hämtar data och uppdaterar loading samt animalList, localstorage */
GetAnimalData(setLoading, setAnimalList)



  return (
  
  <article className='homeArticle'  id='scrollTo'> 


{!loading ?

 <>

<section className='headerContainer'>


<Background />

<h1 className='text'>Mata djuren</h1>

<h1 className='text-shadow'>Mata djuren</h1>
<section className='imageContainer'> <img src={image} alt="background"  /></section>


  
    </section>
  <section className='HomeContainer'> 
  <section className='HomeSection'>
<ShowHungryanimals animalList={animalList} setAnimalList={setAnimalList} />
</section>
  </section>
  </>

: ''
}



</article>
 






  )
 
}

export default Home
