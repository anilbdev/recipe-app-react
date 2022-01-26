import Header from "./component/header/Header";
import RecipeCardWrapper from "./component/recipeCards/RecipeCardWrapper";
import './App.scss'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import RecipeDetails from "./component/recipeDetails/RecipeDetails";
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
          <Route path='/' element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea deserunt assumenda a rerum amet iure cupiditate consequatur eligendi accusamus natus, vel eos modi commodi dolores sequi facilis perferendis nam incidunt tempora? Repudiandae facilis iusto in quas voluptas suscipit id optio, quia labore necessitatibus culpa quisquam laudantium cum, aliquam omnis aspernatur molestias minima. Veritatis deleniti adipisci impedit nam expedita? Fuga dolorum dignissimos id explicabo expedita soluta, sed quo dicta rerum rem inventore unde aliquid atque sunt officia minima sapiente vitae minus odio magni dolore accusamus similique cupiditate hic. Ipsam nam cum molestiae architecto totam neque enim ad, inventore illo labore? Odit, rerum. Quidem cupiditate fuga, assumenda labore possimus eveniet veniam. Odit quis necessitatibus animi dolore, aliquid deleniti accusantium non nesciunt cumque molestiae nihil cupiditate esse doloribus voluptatibus, porro magni ad ut obcaecati minima quam! Vitae, a explicabo. Distinctio, aliquid! Tempore eos repellat vero quaerat modi. Provident perferendis eaque libero accusantium aperiam, eos, accusamus quas dignissimos minima corporis voluptatem. Provident aperiam qui odit expedita non, unde blanditiis tempora! Reprehenderit illo voluptatum neque natus sequi, eos tempore consectetur aspernatur praesentium inventore quisquam, nulla tempora rem, modi accusamus quas quod ducimus sint architecto velit veniam amet. Sint, exercitationem! Aspernatur vitae optio delectus, necessitatibus impedit consequatur, neque fugit officiis tempora accusamus temporibus sed ducimus ea minima. Illo nam animi perspiciatis beatae, ea aut minima pariatur nihil molestias aliquid dolore ratione consequuntur aperiam unde! Et repellat atque expedita, explicabo sed quasi accusantium alias soluta. Dicta iste, a nulla voluptatem, pariatur minima praesentium atque quia vel debitis repellat velit. Veritatis consequatur sequi quidem fugiat sapiente eveniet, ea nulla ipsa porro, maxime asperiores, velit doloremque ipsum voluptas! Officia quia est, minima soluta ad nemo non doloremque reiciendis. Ducimus, illo ullam! Soluta tenetur, non veritatis eius hic rerum corrupti nihil eum natus porro, repudiandae id cum, unde accusamus.</p>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
