import React from 'react'
import { useParams } from 'react-router-dom';

export const Animal = () => {
    const { id } = useParams();


/* const filteredItems:Item[] = productList.filter((item:Item) => {
  if (id !== undefined && item.id === +id) {
   
return {...item, showReadmore: false}
  }
}) */




  return (
    <div>Animal</div>
  )
}
