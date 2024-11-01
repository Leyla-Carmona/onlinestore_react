import React from 'react';
import { Link } from 'react-router-dom';

export const CardOffer = ({ blog }) => {
	return (
		<div>
			 <Link to={`/details/${blog.id}`}>
            <img src={`${blog.imagen}`} alt={blog.title} className='border-black border-solid border-2 m-4 mt-5 w-[280px] rounded-2xl border-opacity-15'/> 
			</Link>
		</div>
	);
};