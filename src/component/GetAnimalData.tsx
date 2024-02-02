import React, { useEffect, useState } from 'react'
import axios from "axios"
import moment from 'moment';

import { AnimalModel } from '../models/AnimalModel';

export const GetAnimalData = () => {
    const [animals, setAnimals] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]') )


    useEffect(() => {
if(animals.length >= 1) return;


const Data = async() => {
const response = await axios.get<AnimalModel[]>('https://animals.azurewebsites.net/api/animals')
if (shouldUpdate) { 
 
      localStorage.setItem(
        'animals',
        JSON.stringify(
          response.data.map(item => ({
            ...item,
            lastFed: moment(item.lastFed).format('YYYY-MM-DD HH:mm'),
            feedStatut:'full'
          }))
        )
      );
      setAnimals(JSON.parse(localStorage.getItem("animals")  || '[]'))
}}
    
let shouldUpdate = true;
Data()
if(animals)

return () => { shouldUpdate = false}

 }) 



}
