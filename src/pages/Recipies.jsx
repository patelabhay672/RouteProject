import React, { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';

const Recipies = () => {
  const { data } = useContext(recipecontext);

  return (
    <div className="p-6 bg-gray-800 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-400">🍽️Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 border border-gray-700"
          >
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-yellow-300">{recipe.title}</h2>

              <p className="text-sm text-gray-400 mb-1">
                <span className="font-semibold text-gray-300">Category:</span> {recipe.category}
              </p>

              <p className="text-sm text-gray-200 mb-2 whitespace-pre-wrap">
                <span className="font-semibold">Description:</span><br />
                {recipe.description}
              </p>

              <p className="text-sm text-gray-200 whitespace-pre-wrap">
                <span className="font-semibold">Ingredients:</span><br />
                {recipe.ingredients || 'N/A'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipies;
