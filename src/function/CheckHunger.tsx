import moment from 'moment';
import React, {  useEffect, useState } from 'react'
import { AnimalModel } from '../models/AnimalModel';


export const CheckHunger = () =>  {
        const animalList = JSON.parse(localStorage.getItem("animals") || '[]') as AnimalModel[];
        const newDate = moment(new Date());
        const newList:AnimalModel[] = animalList.map((animal: AnimalModel) => {
          const duration = moment.duration(newDate.diff(animal.lastFed));
          const hours = duration.asMinutes();
      
          if( hours >= 59 ){
            return { ...animal, isFed: false, feedStatut: 'urgent' }}


          else if(hours >= 10 ){
            return { ...animal, isFed: false, feedStatut: 'hungry' }}

          else{
           return { ...animal, isFed: true, feedStatut: 'full' }}

        });

  localStorage.setItem('animals',  JSON.stringify(newList))
return newList
};
