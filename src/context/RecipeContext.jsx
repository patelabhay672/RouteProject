import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null); // named export

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("recipes");
      if (stored) {
        setdata(JSON.parse(stored));
      } else {
        setdata([]); // default empty
      }
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
      setdata([]); // fallback
    }
  }, []);

  const updateRecipe = (id, updatedRecipe) => {
    setdata(prevData =>
      prevData.map(recipe =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      )
    );
  };

  const toggleFavorite = (id) => {
    const updatedData = data.map(recipe =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    );
    setdata(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
  };

  return (
    <recipecontext.Provider value={{ data, setdata, updateRecipe, toggleFavorite }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext; // default export
