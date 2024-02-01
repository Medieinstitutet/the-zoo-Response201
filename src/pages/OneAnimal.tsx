import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AnimalModel } from '../models/AnimalModel';
import { Animal } from '../component/Animal';



const OneAnimal = () => {
    const  [storedAnimals, setStoredAnimals] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]') )
    const animalMemo = useMemo(() =>  storedAnimals, [storedAnimals])
    const { id } = useParams();

if(animalMemo){
    const animal:AnimalModel[] = animalMemo.filter((animalItem:AnimalModel) => {
  if (id !== undefined && animalItem.id === +id) {
return {...animalItem}
  }
})
  return (
  
  
  <article className='OneAnimalContainer'>



{animal.map((animalItem) => {
        if (animalItem) {
          return (
            <section key={animalItem.id}>
        <Animal     idAnimal={animalItem.id}
name={animalItem.name}
latinName={animalItem.latinName}
yearOfBirth={animalItem.yearOfBirth}
shortDescription={animalItem.shortDescription}
longDescription={animalItem.longDescription}
imageUrl={animalItem.imageUrl}
medicine={animalItem.medicine}
isFed={animalItem.isFed}
lastFed={animalItem.lastFed} showButton={false}                />
        </section>
)
        }
      })}






  </article>)}
}

export default OneAnimal
