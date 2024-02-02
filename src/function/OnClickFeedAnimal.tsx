import moment from 'moment'
import React from 'react'
import { AnimalModel } from '../models/AnimalModel'

export const OnClickFeedAnimal = (id:number, animalList:AnimalModel[]) => {
    
        let time = Date.now()
        let feedAnimal:AnimalModel[] = animalList.map((animal:AnimalModel) => animal.id === id ? {...animal, isFed:true, lastFed:moment(time).format('YYYY-MM-DD HH:mm')}: {...animal} )

         if(feedAnimal){
      
      localStorage.setItem('animals', JSON.stringify(feedAnimal))
     return feedAnimal
         }
         
         
                }

