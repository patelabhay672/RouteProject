import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import toast from 'react-hot-toast'

const Create = () => {
    const { register, handleSubmit, reset } = useForm()
    const { data, setdata } = useContext(recipecontext)

    const submitHandler = (recipe) => {
        recipe.id = nanoid()
        setdata([...data, recipe])
        reset()
        toast.success("🎉 Recipe added successfully!")
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <input className='block border-b outline-0 p-2' {...register("image")} type="text" placeholder='Image url' />
            <small className='text-red-400'>here i show error</small>

            <input className='block border-b outline-0 p-2' {...register("title")} type="text" placeholder="Recipe title" />
            <small className='text-red-400'>here i show error</small>

            <textarea className='block border-b outline-0 p-2' {...register("description")} placeholder='start writing'></textarea>
            <small className='text-red-400'>here i show error</small><br />

            <textarea className='block border-b outline-0 p-2' {...register("ingredients")} placeholder='start writing ingredients'></textarea>
            <small className='text-red-400'>here i show error</small>

            <select className='block border-b outline-0 p-2' {...register("category")}>
                <option className='bg-gray-900' value="">--Select option --</option>
                <option className='bg-gray-900' value="Breakfast">BreakFast</option>
                <option className='bg-gray-900' value="Main-course">Main Course</option>
                <option className='bg-gray-900' value="Dessert">Dessert</option>
                <option className='bg-gray-900' value="Lunch">Lunch</option>
            </select>

            <button className='block mt-2 px-4 py-3 rounded-xl bg-gray-900 text-xl' type='submit'>submit recipe</button>
        </form>
    )
}

export default Create
