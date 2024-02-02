import moment from 'moment';
import React, {  useEffect, useState } from 'react'
import { AnimalModel } from '../models/AnimalModel';

interface CheckHungerProps {
    setAnimalList:  React.Dispatch<React.SetStateAction<AnimalModel[]>>
    
  }

export const CheckHunger = ({setAnimalList}:CheckHungerProps) =>  {


        const animalList = JSON.parse(localStorage.getItem("animals") || '[]') as AnimalModel[];
        const newDate = moment(new Date());
        const newList:AnimalModel[] = animalList.map((animal: AnimalModel) => {
          const duration = moment.duration(newDate.diff(animal.lastFed));
          const hours = duration.asMinutes();
      
          if( hours >= 5 ){
            return { ...animal, isFed: false, feedStatut: 'urgent' }}


          else if(hours >= 2 ){
            return { ...animal, isFed: false, feedStatut: 'hungry' }}

          else{
           return { ...animal, isFed: true, feedStatut: 'full' }}

        });

  setAnimalList(newList);
  localStorage.setItem('animals',  JSON.stringify(newList))

};
