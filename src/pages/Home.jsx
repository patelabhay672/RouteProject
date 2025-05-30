import React from "react";

const dummyRecipes = [
  {
    id: 1,
    title: "Spicy Paneer Tikka",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1743362818809-5291a1566ec1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Creamy Alfredo Pasta",
    category: "Italian",
    image:
      "https://images.unsplash.com/photo-1748012199673-d990c72aaa57?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Sushi Rolls",
    category: "Japanese",
    image:
      "https://plus.unsplash.com/premium_photo-1664648184083-147fe058e822?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VzaGklMjBSb2xscyUyMFN1c2hpJTIwUm9sbHN8ZW58MHx8MHx8fDA%3D",
  },
];

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="backdrop-brightness-50 min-h-screen flex flex-col items-center justify-center px-6 py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 text-center">
          “Good food is the foundation of genuine happiness.”
        </h1>
        <p className="text-xl text-gray-300 mt-4 text-center">
          Explore delicious recipes from around the world 🍱
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
          {dummyRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h2 className="text-lg font-semibold text-yellow-300 drop-shadow-md">
                  {recipe.title}
                </h2>
                <p className="text-sm text-gray-200 drop-shadow-md">{recipe.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
