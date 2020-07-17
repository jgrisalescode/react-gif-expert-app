import React, { useState } from "react"

export const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"]
  const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"])
  // Change the state of component
  const handleAdd = () => {
    // Elements in categories plus new
    // setCategories([...categories, "HunterXHunter"])
    // Other way concatening with callbacks
    setCategories(cats => [...cats, "HunterXHunter"])
  }
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  )
}
