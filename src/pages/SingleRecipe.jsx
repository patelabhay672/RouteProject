import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';

const SingleRecipe = () => {
  const { id } = useParams();
  const { data, updateRecipe } = useContext(recipecontext);
  const navigate = useNavigate();

  const recipe = data.find(r => r.id === id);

  const [formData, setFormData] = useState({
    title: recipe?.title || '',
    category: recipe?.category || '',
    description: recipe?.description || '',
    ingredients: recipe?.ingredients || '',
  });

  if (!recipe) {
    return (
      <div className="p-6 text-white bg-gray-900 min-h-screen flex items-center justify-center">
        <h1 className="text-xl text-red-500">Recipe not found</h1>
        <button className="mt-4 px-4 py-2 bg-yellow-500 rounded" onClick={() => navigate(-1)}>🔙 Go Back</button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(e.target.value);
    
  };

  const handleSave = () => {
    updateRecipe(id, formData);
    alert("Recipe updated successfully!");
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <button
        className="mb-6 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition"
        onClick={() => navigate(-1)}
      >
        🔙 Go Back
      </button>

      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
        {/* Left: Image */}
        <div className="md:w-1/2 h-64 md:h-auto">
          {recipe.image ? (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <span>No Image</span>
            </div>
          )}
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">✏️ Edit Recipe</h2>

          <div>
            <label className="text-sm text-gray-400">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Ingredients</label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>

          <button
            className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
            onClick={handleSave}
          >
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
