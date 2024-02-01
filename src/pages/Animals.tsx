import React, { useState } from 'react'
import { GetAnimalData } from '../component/GetAnimalData';
import { AnimalModel } from '../models/AnimalModel';


const Animals = () => {

   const [storedAnimals, setStoredAnimals] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '{}') )
if(!storedAnimals){GetAnimalData()}





  return (<article>Animals


<section className='manyObjectsContainer'> 



{storedAnimals.map((animalItem) => {
     
          return (
          <section key={animalItem.id}>
     <p> {animalItem.name} </p>
          </section>
)
        
      })}




</section>






  </article>)
}

export default Animals
