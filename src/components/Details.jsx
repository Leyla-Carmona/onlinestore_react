import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/dataeng'; 

export const Details = ( onAdd ) => {
  const { id } = useParams(); 
  const blog = blogs.find(blog => blog.id === parseInt(id)); 
  if (!blog) {
    return <div>Please try again later</div>;
  }
  return (
    <div>
      <img src={`${blog.imagen}`} alt={blog.title} className='w-[300px] rounded-2xl border-opacity-15 bg-white' />
      <table>
        <tbody>
          <tr>
            <td><h1>{blog.title}</h1></td>
            <td>${blog.price}</td>
          </tr>
        </tbody>
      </table>
      <p>{blog.description}</p>
      <p>Characteristics:</p>
      {blog.characteristics.map((char, index) => (
        <li key={index}>{char}</li>
      ))}
      <p>Advantages:</p>
      {blog.advantages.map((char, index) => (
        <li key={index}>{char}</li>
      ))}
       <button onClick={() => onAdd(blog)} className="m-9 w-[75%] bg-violet-800 hover:bg-violet-400 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300">
        Add to cart
      </button>
    </div>
  );
};
