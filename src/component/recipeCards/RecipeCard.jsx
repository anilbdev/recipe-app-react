import React from "react"
import "./RecipeCard.scss"
import { Time, Group } from "../assets"
import { Link } from "react-router-dom"

const RecipeCard = ({ recipe, selectedRecipe }) => {
  return (
    <div>
      <Link
        className="recipeCard"
        to={{
          pathname: `/${selectedRecipe}/${recipe.id}`
        }}
        state={{
            hasDetails:true
        }}
        
      >
        <img className="recipeImage" src={recipe.image} alt="recipe-img" />
        <span className="recipeName">{recipe.title}</span>
        <div className="recipeInfo">
          <Time /> <span>{recipe.readyInMinutes} minutes</span>
          <Group />
          <span> {recipe.servings} people</span>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard
