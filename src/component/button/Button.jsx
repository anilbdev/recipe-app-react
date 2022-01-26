import React from "react"
import "./Button.scss"
import { useNavigate } from "react-router-dom"

function Button({ title, onRecipeSelect, searchKey }) {
    const navigate = useNavigate()
  return (
    <div className="buttonContainer">
      <button
        onClick={() => {
          onRecipeSelect(searchKey)
          navigate(`/${searchKey}`)

        }}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
