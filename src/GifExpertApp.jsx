import React from 'react';
import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    
    const onAddCategory = (newCategory) =>{

      if(categories.includes (newCategory))return;

      setCategories([newCategory, ...categories])
      

    }
  return (
   <>
   {/*titulo*/}
   <h1>GiftExpertApp</h1>

   {/*Input*/}
   <AddCategory
      onNewCategory ={event => onAddCategory(event) }
    
   />

   {/*Listado de gifts*/}
   

    {categories.map(category => (
      <GifGrid key={category} category={category} />
    ))}
    

   </>
  )
}
