import React, { useState } from 'react'
import { AnimalModel } from '../models/AnimalModel'
import { Animal } from './Animal'



export const ShowHungryanimals = () => {
  
    
  const [animalList, setAnimalList] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]'))

  const urgentHungryAnimal:AnimalModel[] =  animalList.filter((animalItem:AnimalModel) => {
if ( animalItem.feedStatut === 'urgent') {
return {...animalItem}
}
})
const hungryAnimal:AnimalModel[] =  animalList.filter((animalItem:AnimalModel) => {
    if ( animalItem.feedStatut === 'hungry') {
    return {...animalItem}
    }
    })




    return(
    <section className='hungryAnimalsContainer'> 

       {urgentHungryAnimal.length >= 1 ? <section>
    <h2>Djur som behöver mat omgående</h2>
   
  <section className='manyObjectsContainer allAnimalContainer'>
  
  
  {urgentHungryAnimal.map(animalItem =>
  <Animal 
  idAnimal={animalItem.id}
      name={animalItem.name}
      isFed={animalItem.isFed}
      lastFed={animalItem.lastFed} 
      showButton={true}
      animalList={animalList}
      setAnimalList={setAnimalList}
      feedStatut={animalItem.feedStatut}
      key={animalItem.id}
      />
    )}
  
  
  
  
  </section>
  </section> : ''}


  {hungryAnimal.length >= 1 ?
  <section> 
    <h2>Djur som behöver mat snart</h2>
   
  <section className='manyObjectsContainer'>
  
  
  {hungryAnimal.map(animalItem =>
  <Animal 
  idAnimal={animalItem.id}
      name={animalItem.name}
      isFed={animalItem.isFed}
      lastFed={animalItem.lastFed} 
      showButton={true}
      animalList={animalList}
      setAnimalList={setAnimalList}
      feedStatut={animalItem.feedStatut}
      key={animalItem.id}
      />
    )}
  
  
  
  
  </section>
  </section> : '' }
  </section>)
}

export default ShowHungryanimals
