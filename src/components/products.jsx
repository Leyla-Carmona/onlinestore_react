import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const Productos = ({ data }) => {

  const productsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) {
    return <div>Fatal error, please try again</div>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(data.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-wrap justify-center">
      {currentProducts.map((blog, index) => (
        <Producto blog={blog} key={index} />
      ))}
      <div>
      </div>
      <nav>
        <ul class="inline-flex -space-x-px justify-center text-center">
          <li 
              key={currentPage - 1}
              onClick={() => { 
                if (currentPage > 1) paginate(currentPage - 1);}}
              className='text-gray-500 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              onClick={() => paginate(index + 1)}
              disabled={currentPage === index + 1}
              className=
              'cursor-pointer text-gray-500 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              {index + 1}
            </li>
          ))}
          <li 
          key={currentPage + 1}
          onClick={() => { 
            if (currentPage < 4) paginate(currentPage + 1);}}
          className='text-gray-500 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
         <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  );
};


const Producto = ({ blog }) => (
  <div className='art'>
    <div className="flex flex-col items-center m-5 w-[280px] rounded-3xl">
      <Link to={`/details/${blog.id}`}>
        <img src={`${blog.imagen}`} alt={blog.title} className='border-black border-solid border-2 m-4 mt-5 w-[220px] rounded-2xl border-opacity-15 bg-white' />
      </Link>
      <table>
        <td>{blog.title}</td>
        $ <td>{blog.price}</td>
      </table>
      <button class="bg-black hover:bg-slate-500 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300 ..">Add to cart </button>
    </div>
  </div>
);
