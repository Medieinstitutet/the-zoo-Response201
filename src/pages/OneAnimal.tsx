import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AnimalModel } from '../models/AnimalModel';
import { Animal } from '../component/Animal';
import { CheckHunger } from '../function/CheckHunger';



const OneAnimal = () => {
  const [animalList, setAnimalList] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]'))
    const { id } = useParams();


    useEffect(() => {
      CheckHunger({setAnimalList})
      const intervalId = setInterval(() => {
        CheckHunger({ setAnimalList });
      }, 500); 
         return () => clearInterval(intervalId);
    }, [])
    




    const animal:AnimalModel[] = animalList.filter((animalItem:AnimalModel) => {
  if (id !== undefined && animalItem.id === +id) {
return {...animalItem}
  }
})
  return (
  
  
  <article className='OneAnimalContainer'>



{animal.map((animalItem) => {
        if (animalItem) {
          return (
            <section key={animalItem.id} >
        <Animal     
        idAnimal={animalItem.id}
name={animalItem.name}
latinName={animalItem.latinName}
yearOfBirth={animalItem.yearOfBirth}
shortDescription={animalItem.shortDescription}
longDescription={animalItem.longDescription}
imageUrl={animalItem.imageUrl}
medicine={animalItem.medicine}
isFed={animalItem.isFed}
lastFed={animalItem.lastFed} showButton={false}  
animalList={animalList}
setAnimalList={setAnimalList} 
feedStatut={animalItem.feedStatut}             />
        </section>
)
        }
      })}






  </article>)}


export default OneAnimal