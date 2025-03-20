import React from 'react'

//styles
import "./recipeList.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useTheme } from '../hooks/useTheme'
import trashCan from "../assets/trashCan.svg"
import {projectFirestore } from "../firebase/config"


export default function RecipeList({recipes}) {

  const {mode} = useTheme()


  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
  }
  
  const handleClick = (id) => {
    console.log("success")
      projectFirestore.collection("recipes").doc(id).delete()
  }


  return (
    <div className='recipe-list'>
      
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to cook</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
            <img 
                className='delete'
                src={trashCan}
                onClick={()=> { handleClick(recipe.id)}}
            />
        </div>
      ))}
    </div>
  )
}
