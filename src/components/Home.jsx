import { React } from "react";
import { CardBlog } from "./CardBlog";
import { CardOffer } from "./CardOffer";
import { Link } from 'react-router-dom';

export const Home = ({ hotsale, specialoffers }) => {

	if (!hotsale) {
		return <div>Fatal error, please try again</div>;
	}

	return (
		<div className='container my-5 bg-white'>			
		<h1>HOT SALES</h1>	
			<div className='overflow-hidden w-full'>
				<div className='flex whitespace-nowrap animate-scroll'>
					{hotsale.map((blog, index) => (
						<CardBlog blog={blog} key={index} />
					))}
					</div>
					<div className='bg-white'>
						<h1>SPECIAL OFFERS</h1>
						{specialoffers.map((blog, index) => (
							<CardOffer blog={blog} key={index} />
						))}
					</div>
				
			</div>
		</div>
	);
};

