import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onSubmit"
  })
  const { data, setdata } = useContext(recipecontext)

  const submitHandler = (recipe) => {
    recipe.id = nanoid()
    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata)
    localStorage.setItem("recipes", JSON.stringify(copydata))
    reset()
    toast.success("🎉 Recipe added successfully!")
    navigate('/recipes')
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="max-w-lg mx-auto mt-8 space-y-5">
      <input
        className={`w-full border-b outline-none p-3 text-base rounded-sm ${errors.image ? 'border-red-500' : 'border-gray-700'}`}
        {...register("image", { required: "Image URL is required" })}
        type="text"
        placeholder='Image url'
      />
      {errors.image && <small className='text-red-500 text-sm'>{errors.image.message}</small>}

      <input
        className={`w-full border-b outline-none p-3 text-base rounded-sm ${errors.title ? 'border-red-500' : 'border-gray-700'}`}
        {...register("title", { required: "Recipe title is required" })}
        type="text"
        placeholder="Recipe title"
      />
      {errors.title && <small className='text-red-500 text-sm'>{errors.title.message}</small>}

      <textarea
        className={`w-full border-b outline-none p-3 text-base rounded-sm ${errors.description ? 'border-red-500' : 'border-gray-700'}`}
        {...register("description", { required: "Description is required" })}
        placeholder='Start writing'
        rows={3}
      />
      {errors.description && <small className='text-red-500 text-sm'>{errors.description.message}</small>}

      <textarea
        className={`w-full border-b outline-none p-3 text-base rounded-sm ${errors.ingredients ? 'border-red-500' : 'border-gray-700'}`}
        {...register("ingredients", { required: "Ingredients are required" })}
        placeholder='Start writing ingredients'
        rows={3}
      />
      {errors.ingredients && <small className='text-red-500 text-sm'>{errors.ingredients.message}</small>}

      <select
        className={`w-full border-b outline-none p-3 text-base rounded-sm  ${errors.category ? 'border-red-500' : 'border-gray-900'}`}
        {...register("category", { required: "Please select a category" })}
        defaultValue=""
      >
        <option className='bg-gray-900' value="" disabled>-- Select category --</option>
        <option className='bg-gray-900' value="Breakfast">Breakfast</option>
        <option className='bg-gray-900' value="Main-course">Main Course</option>
        <option className='bg-gray-900' value="Dessert">Dessert</option>
        <option className='bg-gray-900' value="Lunch">Lunch</option>
      </select>
      {errors.category && <small className='text-red-500 text-sm'>{errors.category.message}</small>}

      <button
        className='w-full mt-3 px-5 py-3 rounded-lg bg-gray-900 text-white text-lg hover:bg-gray-800 transition duration-200'
        type='submit'
      >
        Submit Recipe
      </button>
    </form>
  )
}

export default Create
