import { createContext, useState } from "react";

export const recipecontext = createContext(null); // named export

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  const updateRecipe = (id, updatedRecipe) => {
    setdata(prevData =>
      prevData.map(recipe =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      )
    );
  };

  return (
    <recipecontext.Provider value={{ data, setdata, updateRecipe }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;  // default export
