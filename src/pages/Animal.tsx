import React from 'react'
import { useParams } from 'react-router-dom';
import { AnimalModel } from '../models/AnimalModel';


interface Animal {
    idAnimal:number;
    name:string;
    latinName?:string;
    yearOfBirth?:number;
    shortDescription:string;
    longDescription?:string;
    imageUrl:string;
    medicine?:string;
    isFed:boolean;
    lastFed: string;
  


}

export const Animal = ({  
    idAnimal,
    name,
    latinName,
    yearOfBirth,
    shortDescription,
    longDescription,
    imageUrl,
    medicine,
    isFed,
    lastFed}: Animal) => {


    const { id } = useParams();


/* const filteredItems:Item[] = productList.filter((item:Item) => {
  if (id !== undefined && item.id === +id) {
   
return {...item, showReadmore: false}
  }
}) */




  return (


<section className='standardContainer animalContainer'>




<section>
<h2>{name}</h2>

      {latinName ? <p>{latinName}</p>: ''}
      <section className='animalContainer___imgContainer'> <img src={imageUrl} alt={name} /></section>
    
      </section>
      {yearOfBirth? <p>{yearOfBirth}</p> :''}
      <p>{shortDescription}</p>
      {longDescription? <p> {longDescription}</p> : ''}
     { medicine? <p>{medicine}</p> : ''}
      <p>Matad: {isFed ? 'Ja' : 'Nej'}</p>
      <p>Senast matad: {lastFed}</p>

</section>






  )
}
