import Header from "./component/header/Header";
import RecipeCardWrapper from "./component/recipeCards/RecipeCardWrapper";
import './App.scss'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import RecipeDetails from "./component/recipeDetails/RecipeDetails";
import Welcome from "./component/welcome/Welcome";
function App() {
  const [recipe, setRecipe] = useState(null)
  const onRecipeSelect = (recipe) => {
    // console.log(cuisine);
    setRecipe(recipe)
  }
  return (
    <Router>
      <div className="App">
        <Header onRecipeSelect={onRecipeSelect} />
        {/* <RecipeCardWrapper selectedRecipe={recipe} /> */}
        <Routes>
          <Route path={`/${recipe}`} element={<RecipeCardWrapper selectedRecipe={recipe} />}>
            <Route path=':recipeID/' element={<RecipeDetails />} />
          </Route>
          <Route path='/' element={<Welcome/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
