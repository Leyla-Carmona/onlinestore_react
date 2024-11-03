import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/dataeng'; 
import Swal from 'sweetalert2';

export const Details = ({ addToCart }) => { 
  const { id } = useParams(); 
  const blog = blogs.find(blog => blog.id === parseInt(id)); 


  if (!blog) {
    return <div>Please try again later</div>;
  }
  
  const handleAddToCart = () => {
    addToCart(blog);
    cartmessage();
  };

  return (
    <div className='details'>
      <img src={`${blog.imagen}`} alt={blog.title} className='w-[300px] rounded-2xl border-opacity-15 bg-white' />
      <table>
          <tr>
            <td><h1>{blog.title}</h1></td>
            <td>${blog.price}</td>
          </tr>
      </table>
      
      <hr />
      <p>{blog.description}</p>
      <p>Characteristics:</p>
      {blog.characteristics.map((char, index) => (
        <li key={index}>{char}</li>
      ))}
      <p>Advantages:</p>
      {blog.advantages.map((char, index) => (
        <li key={index}>{char}</li>
      ))}
          <button onClick={handleAddToCart} className="bg-black text-white py-1 px-4 mt-3 rounded hover:bg-slate-500">
        Add to Cart
      </button>
    </div>
  );
};
const cartmessage = () => {
  Swal.fire({
    title: '🎉 Great choice! ',
    html: '<b>Your item has been successfully added to your cart. 🛒 </b>',
    customClass: {
      popup: 'swal-popup',
      title: 'swal-title',
      content: 'swal-content',
      confirmButton: 'swal-confirm-button',
    }
  });
};