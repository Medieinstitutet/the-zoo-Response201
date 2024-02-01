import React, { useEffect, useState } from 'react'
import axios from "axios"
import { AnimalModel } from '../models/AnimalModel';

export const GetAnimalData = () => {
    const [animals, setAnimals] = useState<AnimalModel[]>()



    useEffect(() => {
if(animals) return;
    

const Data = async() => {
const response = await axios.get<AnimalModel[]>('https://animals.azurewebsites.net/api/animals')
if (shouldUpdate) {setAnimals(response.data)}}
    
let shouldUpdate = true;
Data()
return () => { shouldUpdate = false}

 }) 



if(animals){
    localStorage.setItem('animals',  JSON.stringify(animals));


}

}
