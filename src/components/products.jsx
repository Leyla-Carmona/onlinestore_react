import React from 'react';
import { Link } from 'react-router-dom';

export const Productos = ({ data }) => { 
  if (!data) {
    return <div>Fatal error, please try again</div>; 
  }

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((blog, index) => (
        <Producto blog={blog} key={index} /> 
      ))}
    </div>
  );
};

const Producto = ({ blog }) => (
  <div className="flex flex-col items-center m-5 w-[280px]">
             <Link to={`/details/${blog.id}`}>
			<img src={`${blog.imagen}`} alt={blog.title} className='border-black border-solid border-2 m-4 mt-5 w-[220px] rounded-2xl border-opacity-15 bg-white'/> 
			</Link>
			<table>
			<td>{blog.title}</td>
			$ <td>{blog.price}</td>
			</table>
			<button class="bg-black hover:bg-slate-500 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300 ..">Add to cart </button>
		</div>
);
