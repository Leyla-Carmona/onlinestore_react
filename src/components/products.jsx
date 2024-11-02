import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const Productos = ({ data, addToCart }) => {

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
      <div class="flex flex-wrap justify-center">
        {currentProducts.map((blog, index) => (
          <Producto blog={blog} key={index} addToCart={addToCart} />
        ))}
        <div classname="paginate">
        <nav className='navproducts'>
          <ul class="inline-flex -space-x-px justify-center text-center">
            <li
              key={currentPage - 1}
              onClick={() => {
                if (currentPage > 1) paginate(currentPage - 1);
              }}
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
                if (currentPage < 4) paginate(currentPage + 1);
              }}
              className='text-gray-500 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Producto = ({ blog, addToCart }) => (
  <div className="productscard">
    <div className="flex flex-col items-center m-5 w-[280px] rounded-3xl">
      <div className='productinf'>
      <Link to={`/details/${blog.id}`}>
      <figure>
        <img src={blog.imagen} alt={blog.title} className="border-black border-solid border-2 m-4 mt-5 w-[220px] rounded-2xl bg-white" />
      </figure>
      </Link>
      <table>
        <tbody>
          <tr>
            <td>{blog.title}</td>
            <td>${blog.price}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => addToCart(blog)} className="bg-black text-white py-1 px-4 mt-3 rounded hover:bg-slate-500">
        Add to Cart
      </button>
    </div>
  </div>
  </div>
);

export default Producto;
<script>
  document.getElementById('section').innerHTML = 'Our Products';
</script>