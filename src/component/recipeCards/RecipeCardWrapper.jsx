import React, { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import RecipeCard from "./RecipeCard"
import "./RecipeCard.scss"
let API_KEY = 'a8aa81c6ab3c489fad5a4e3e6b8cc0ef'
// let API_KEY = "56a1ba4444d64f878fb7ee8a2ae62759"

const RecipeCardWrapper = ({ selectedRecipe }) => {
  const urlState = useLocation().state
  console.log("urlState>>", urlState)
  const [recipe, setRecipe] = useState([])
  useEffect(() => {
    if (selectedRecipe) {
      getRecipe()
    }
  }, [selectedRecipe])

  const getRecipe = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${selectedRecipe}&addRecipeInformation=true&number=8`
    )
    let recipeData = await response.json()
    console.log("recipe data>...", recipeData.results)
    setRecipe(recipeData.results)
    console.log('wrapper data>> insideapi call',recipe);
  }
  console.log('wrapper data>> outside',recipe)
  return (
    <div style={{position:'relative'}}>
      <div
        className="recipeWrapper"
        style={{
          width: urlState && urlState.hasDetails ? "60%" : "100%",
        }}
      >
        {recipe.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            selectedRecipe={selectedRecipe}
          />
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default RecipeCardWrapper
