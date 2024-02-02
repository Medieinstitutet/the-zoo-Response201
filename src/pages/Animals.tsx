import React, { useMemo, useState } from 'react'
import { AnimalModel } from '../models/AnimalModel';
import { Animal } from '../component/Animal';
import moment from 'moment';
import { OnClickFeedAnimal } from '../function/OnClickFeedAnimal';
const Animals = () => {
  const [animalList, setAnimalList] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]'))


  return (<article>
    <h2>Alla våra djur</h2>
<section className='manyObjectsContainer'> 
{animalList.map((animalItem) => {
          return (
          <section key={animalItem.id}>
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
