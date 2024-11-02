import React from 'react';
import { Link } from 'react-router-dom';

export const CardBlog = ({ blog }) => {
	return (
		<div className='cardBlog'>
		<div className='top'>
			<div className='round'>
			<Link to={`/details/${blog.id}`}>
				<img src={`${blog.imagen}`} alt={blog.title} /> 
				</Link>
			</div>
				<div className='flex flex-col gap-2 w-full'>
					<h3 className='text-lg font-bold text-slate-700 leading-7 whitespace-normal'>
						{blog.title}
					</h3>
				</div>
			</div>
		</div>
	);
};