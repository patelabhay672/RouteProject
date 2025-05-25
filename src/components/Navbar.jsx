import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex gap-x-10 justify-center text-xl mb-10'>
      <NavLink className={(e)=> e.isActive ? "text-red-300":""} to="/">Home</NavLink>
       <NavLink className={(e)=> e.isActive ?"text-red-300":""} to="/about">About</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-300":""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-300":""} to="/create">Create</NavLink>
    </div>
  );
}

export default Navbar;
