import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./RecipeDetails.scss"
import SampleData from "../../dataTemp.json"
import { width } from "@mui/system"
import Ingrediants from "./Ingrediants"
// import LoadingButton from '@mui/lab/LoadingButton';
let API_KEY = 'a8aa81c6ab3c489fad5a4e3e6b8cc0ef'
// let API_KEY = "56a1ba4444d64f878fb7ee8a2ae62759"
const RecipeDetails = props => {
  const { recipeID } = useParams()
  const [recipeInfo, setRecipeInfo] = useState(null)

  useEffect(() => {
    getRecipe()
  }, [recipeID])

  const getRecipe = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`
    )
    let data = await response.json()
    console.log(data)
    setRecipeInfo(data)
  }
  const Loading = () => {
    return <p>Loading</p>
  }

  const RecipeInfoCompo = () => {
    return (
      <div className="recipeInfoCompo">
        {/* Header */}

        <div
          style={{
            backgroundImage: `url(${recipeInfo.image})`,
            height: "200px",
            objectFit: "cover",
            position: "relative",
          }}
        >
          <span className="recipeTitle">{recipeInfo.title}</span>
        </div>
        <div style={{
          height:'calc(100%-200px',
          overflow:'auto'
        }}>
          {/* summary */}
          <p
            dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
            className="recipeSummary"
          ></p>
          {/* Ingrediants */}
          <Ingrediants ingrediantsData={recipeInfo.extendedIngredients || []} />
          {/* instructions */}
          <p className="recipeSummary"
           dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
          >
            
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="recipeDetails">
      <Link className="recipeDetailsLink" to="/">
        <div className="recipeDetailsClose">X</div>
      </Link>
      <div className="recipeDetailsContent">
        {recipeInfo ? <RecipeInfoCompo /> : <Loading />}
      </div>
    </div>
  )
}

export default RecipeDetails
