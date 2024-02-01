import React, { useMemo, useState } from 'react'
import { GetAnimalData } from '../component/GetAnimalData';
import { AnimalModel } from '../models/AnimalModel';
import { Animal } from './Animal';


const Animals = () => {
    
const  [storedAnimals, setStoredAnimals] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]') )

const animalMemo = useMemo(() =>  storedAnimals, [storedAnimals])

if(animalMemo){


  return (<article>Animals


<section className='manyObjectsContainer'> 



{animalMemo.map((animalItem) => {
     
          return (
          <section key={animalItem.id}>



<Animal 
idAnimal={animalItem.id}
    name={animalItem.name}
    shortDescription={animalItem.shortDescription}
    imageUrl={animalItem.imageUrl}
    isFed={animalItem.isFed}
    lastFed={animalItem.lastFed} />
    </section>
)
        
      })}




</section>






  </article>)}
}

export default Animals
