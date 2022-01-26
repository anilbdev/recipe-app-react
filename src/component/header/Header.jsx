import React from "react"
import Button from "../button/Button"
import "./Header.scss"
import { Link,useNavigate } from "react-router-dom"

function Header({ onRecipeSelect }) {
  const navigate = useNavigate()
  return (
    <div className="header">
      {/* <Link to='/'> */}
        <span onClick={()=>{
            navigate('/')
        }} className="logo">Tell me Recipes</span>
      {/* </Link> */}
      <nav>
        <Button
          onRecipeSelect={onRecipeSelect}
          searchKey={"indian"}
          title={"Indian"}
        />
        <Button
          onRecipeSelect={onRecipeSelect}
          searchKey={"italian"}
          title={"Italian"}
        />
         <Button
          onRecipeSelect={onRecipeSelect}
          searchKey={"mexican"}
          title={"Mexican"}
        />
          <Button
          onRecipeSelect={onRecipeSelect}
          searchKey={"mexican"}
          title={"Mexican"}
        />
         <Button
          onRecipeSelect={onRecipeSelect}
          searchKey={"spanish"}
          title={"Spanish"}
        />
         <Button
          onRecipeSelect={onRecipeSelect}
          searchKey={"chinese"}
          title={"Chinese"}
        />
      </nav>
    </div>
  )
}

export default Header
