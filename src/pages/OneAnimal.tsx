import React, {  useState } from 'react'
import { useParams } from 'react-router-dom';
import { AnimalModel } from '../models/AnimalModel';
import { Animal } from '../component/Animal';
import { Background } from '../component/Background';




const OneAnimal = () => {
  const [animalList, setAnimalList] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]'))
    const { id } = useParams();
    window.scrollTo(0, 0);
    const animal:AnimalModel[] = animalList.filter((animalItem:AnimalModel) => {
  if (id !== undefined && animalItem.id === +id) {
return {...animalItem}
  }
})
  return (

<article className='oneAnimalContainer'> 

<section className='oneAnimalSection'> 


{animal.map((animalItem) => {
        if (animalItem) {
          return (
            <section className='hello' > 
          

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

</section>


</article>

 
 
 
 
 

 

 
 
 
 
 )}


export default OneAnimal
