# 🍽️ Recipe Manager App

A simple React-based application to create, view, edit, and manage your recipes. All data is stored and updated using the browser's `localStorage`. The app is styled using Tailwind CSS and uses React Context API for global state management.

---

## 📚 Features

- ✅ View all saved recipes  
- 🔍 View full details of any recipe  
- ✏️ Edit and update any recipe  
- 💾 Recipes persist using `localStorage`  
- 🧠 Context API used for global recipe data handling  
- 📷 Image preview in the recipe card  
- 🧭 Routing using React Router  
- 🔙 Easy navigation using back buttons  

---

## 🚀 Tech Stack

- **React.js** – Frontend library  
- **Tailwind CSS** – For modern UI styling  
- **React Router DOM** – Routing library  
- **Context API** – For global state management  
- **localStorage** – Browser-based storage for data persistence  

---

## 📁 Project Structure

src/
│
├── context/
│ └── RecipeContext.jsx # Context Provider for recipe data
│
├── pages/
│ └── SingleRecipe.jsx # Component for editing individual recipe
│
├── App.jsx # Main routing and layout
├── main.jsx # React app entry point
└── index.css # Tailwind and global styles

yaml
Copy
Edit

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/recipe-manager.git
cd recipe-manager
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start Development Server
bash
Copy
Edit
npm run dev
App will run on http://localhost:5173

🔄 Recipe Updating Logic
Recipe data is stored in data state using useState.

On update, updateRecipe updates the matching recipe and also updates localStorage.

jsx
Copy
Edit
const updateRecipe = (id, updatedRecipe) => {
  const updatedData = data.map(recipe =>
    recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
  );
  setdata(updatedData);
  localStorage.setItem("recipes", JSON.stringify(updatedData));
};
⚠️ Common Issues
❌ Error: "undefined" is not valid JSON
Cause: When localStorage.getItem("recipes") returns null or invalid data.
Fix:

js
Copy
Edit
useEffect(() => {
  setdata(JSON.parse(localStorage.getItem("recipes")) || []);
}, []);
🧠 Context Code Summary
js
Copy
Edit
export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  const updateRecipe = (id, updatedRecipe) => {
    const updatedData = data.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    setdata(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
  };

  return (
    <recipecontext.Provider value={{ data, setdata, updateRecipe }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
✨ UI Snapshots (Overview)
✅ Edit Page

Inputs for title, category, description, ingredients

Image preview (if available)

Save button updates context and localStorage

Tailwind CSS for styling

❌ If recipe not found

"Recipe Not Found" message

Go back button for user-friendly navigation

✍️ Future Improvements
➕ Add new recipe form with image upload

❌ Add delete recipe functionality

🔍 Search and filter recipes

🌐 Move to backend (MongoDB, Firebase, etc.)

📱 Make it a PWA for offline access

🧪 Add unit and integration tests

👨‍💻 Author
abhay_672


📄 License
This project is open-source and available under the MIT License.

yaml
Copy
Edit

---

Let me know if you want this as a downloadable `.md` file or want to publish it on GitHub.
