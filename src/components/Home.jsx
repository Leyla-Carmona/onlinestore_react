import { React } from "react";
import { CardBlog } from "./CardBlog";
import { CardOffer } from "./CardOffer";

export const Home = ({ hotsale, specialoffers }) => {

	if (!hotsale) {
		return <div>Fatal error, please try again</div>;
	}

	return (		
		<div className='home'>	
		<br />	
		
		<h1>TOP SELLERS</h1>	
		<hr /> 
			<div className='overflow-hidden w-full'>
				<div className='flex whitespace-nowrap animate-scroll'>
					{hotsale.map((blog, index) => (
						<CardBlog blog={blog} key={index} />
					))}
					</div>
					<br />
					<br />
					<div className='bg-white'>
						<h1>SPECIAL OFFERS</h1>						
						<hr />
						{specialoffers.map((blog, index) => (
							<CardOffer blog={blog} key={index} />
						))}
					</div>
		</div></div>
	);
};
<script>
document.getElementById('section').innerHTML = 'Home';
</script>