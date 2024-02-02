import React, { useEffect, useState } from 'react'
import { AnimalModel } from '../models/AnimalModel';
import { Animal } from '../component/Animal';
import { CheckHunger } from '../function/CheckHunger';
const Animals = () => {
  const [animalList, setAnimalList] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]'))


  
useEffect(() => {
  CheckHunger({setAnimalList})

  const intervalId = setInterval(() => {
    CheckHunger({ setAnimalList });
  }, 500); 

     // Rensa upp intervallet när komponenten avmonteras
     return () => clearInterval(intervalId);

}, [])



  return (<article>
    <h2>Alla våra djur</h2>
<section className='manyObjectsContainer'> 
{animalList.map((animalItem) => {
          return (
          <section key={animalItem.id} className={animalItem.feedStatut}>
<Animal 
idAnimal={animalItem.id}
    name={animalItem.name}
    shortDescription={animalItem.shortDescription}
    imageUrl={animalItem.imageUrl}
    isFed={animalItem.isFed}
    lastFed={animalItem.lastFed} 
    showButton={true}
    animalList={animalList}
    setAnimalList={setAnimalList}
    />
    </section>
)
      })}
</section>
  </article>)}

export default Animals
