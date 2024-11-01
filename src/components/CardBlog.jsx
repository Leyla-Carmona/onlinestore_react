import React from 'react';
import { Link } from 'react-router-dom';

export const CardBlog = ({ blog }) => {
	return (
		<div className='h-full w-[200px] m-2 flex-shrink-0 cursor-pointer'>
			<div className='rounded-3xl overflow-hidden mb-4 relative h-[250px]'>
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
	);
};