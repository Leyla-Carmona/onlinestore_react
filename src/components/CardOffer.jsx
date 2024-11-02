import React from 'react';
import { Link } from 'react-router-dom';

export const CardOffer = ({ blog }) => {
	return (
		<div className='CardOffer'>
			<div className='object'>
			 <Link to={`/details/${blog.id}`}>
             <div className={`grid${blog.id}`}>
			 <figure><img src={`${blog.imagen}`} alt={blog.title}/>
			 </figure></div> 
			</Link>
			</div>
		</div>
	);
};