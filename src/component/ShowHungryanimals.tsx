import React, { useEffect, useState } from 'react'
import { AnimalModel } from '../models/AnimalModel'
import { Animal } from './Animal'
import { GetAnimalData } from './GetAnimalData'
import { CheckHunger } from '../function/CheckHunger'




export const ShowHungryanimals =  () => { 
  const [animalList, setAnimalList] =  useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]'))

let interval = true;

if(interval){
setInterval(()  => {

 CheckHunger()
setAnimalList((JSON.parse(localStorage.getItem("animals")  || '[]')))
interval = false
}, 500);

 }
  

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
   
  <section className='manyObjectsContainerHome'>
  
  
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

<section className='hungryAnimalsContainer___text--NoHunger'> 
{  urgentHungryAnimal.length <= 0 && hungryAnimal.length  <= 0 ?   <h2>Alla djur har fått mat </h2> : ''        }
</section>
  </section>)
}

export default ShowHungryanimals
