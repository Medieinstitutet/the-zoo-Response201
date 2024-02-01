import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import placeholder from '../assets/images/placeholder.jpg'
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
    showButton:boolean
}



export const Animal = ({  idAnimal, name,latinName,yearOfBirth,shortDescription,longDescription,imageUrl,medicine,isFed,lastFed, showButton}:Animal) => {
    
   const [image, setimage] = useState('start')


  return (
<section className='standardContainer animalContainer'>
<section className='animalContainer___nameAndImg'>
<h2>{name} <span className='animalContainer___nameAndImg__latinName'> {latinName ? `(${latinName})`: ''}</span> </h2>
  
      <section className='animalContainer___nameAndImg___imgContainer'> <img  
      src={image === 'showimage' ? imageUrl : placeholder} alt={name}
      onLoad={() => { if(image === 'start'){setimage('showimage')}}}
      onError={() =>{setimage('stop')} }
      /></section>
      </section>
     
      {yearOfBirth? <p>{yearOfBirth}</p> :''}
      <p>{shortDescription}</p>
      {longDescription? <p> {longDescription}</p> : ''}
     { medicine? <p>{medicine}</p> : ''}
  {/*     <p>Matad: {isFed ? 'Ja' : 'Nej'}</p> */}
      <p>Senast matad: {lastFed}</p>
<section className={showButton ?'animalContainer___btnContainer':'animalContainer___btnContainer--one'}> <button className={showButton ? '': 'animalContainer___btnContainer___hide'}> <Link to={`/${idAnimal}`} >  Läs mer </Link></button> <button>Mata</button>  </section>

</section>
  )
}
