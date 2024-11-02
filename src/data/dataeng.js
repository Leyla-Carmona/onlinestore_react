import auriculares_inalambricos from '../images/auriculares_inalambricos.jpg';
import consola_videojuegos from '../images/consola_videojuegos.jpg'; 
import disco_duro_externo from '../images/disco_duro_externo.jpg'; 
import laptop_gaming from '../images/laptop_gaming.jpg'; 
import monitor_ultrahd from '../images/monitor_ultrahd.jpg';
import raton_ergonomico from '../images/raton_ergonomico.jpg';
import reloj_inteligente from '../images/reloj_inteligente.jpg';
import smartphone from '../images/smartphone.jpg'; 
import teclado_mecanico from '../images/teclado_mecanico.jpg'; 
import webcam_hd from '../images/webcam_hd.jpg'; 
import solar_charger from '../images/cargador_solar.jpg';
import fitness_tracker from '../images/reloj_fitness.webp';
export const blogs = [
	{
		id: 1,
		title: 'Wireless Headphones',
		description: 'High-quality wireless headphones with Bluetooth connection.',
		characteristics: [
			'Bluetooth 5.0 connection for quick and stable pairing.',
			'Active noise cancellation for an immersive audio experience.',
			'Ergonomic fit that comfortably adapts to your ears.',
			'Up to 20 hours of battery life with fast charging.',
			'Intuitive touch controls for easy navigation.'
		],
		advantages: [
			'Enjoy music and calls without external distractions.',
			'Perfect for long listening sessions thanks to their comfortable design.',
			'Freedom of movement without tangled wires.',
			'High-quality sound for a superior listening experience.'
		],
		imagen: auriculares_inalambricos,
		price: '59.99'
	},
	{
		id: 2,
		title: 'Video Game Console',
		description: 'Next-generation console that takes your gaming experience to the next level.',
		characteristics: [
			'Powerful processor for optimal performance.',
			'High-definition graphics and support for 4K games.',
			'Compatible with a wide range of games and accessories.',
			'Expandable storage for greater gaming capacity.',
			'Access to streaming services and applications.'
		],
		advantages: [
			'Enjoy an immersive gaming experience with stunning graphics.',
			'Ideal for both casual gamers and the more demanding.',
			'Connect with friends and other players through the online network.',
			'Multiple entertainment options in a single console.'
		],
		imagen: consola_videojuegos,
		price: '499.99'
	},
	{
		id: 3,
		title: 'External Hard Drive',
		description: '1TB storage drive, ideal for backing up your important files.',
		characteristics: [
			'1TB storage for large amounts of data.',
			'USB 3.0 interface for fast transfers.',
			'Portable and lightweight design for easy transport.',
			'Compatible with Windows and Mac.',
			'Plug and Play: no software installation required.'
		],
		advantages: [
			'Store and back up your files without worrying about space.',
			'Quickly transfer data, saving time on your tasks.',
			'Easily take it with you wherever you need.',
			'Keep your data safe and accessible at any time.'
		],
		imagen: disco_duro_externo,
		price: '89.99'
	},
	{
		id: 4,
		title: 'Gaming Laptop',
		description: 'Laptop for gamers with advanced graphics card, designed for exceptional performance.',
		characteristics: [
			'Full HD screen with high refresh rates.',
			'Powerful processor and large RAM capacity.',
			'Dedicated graphics card for superior gaming performance.',
			'Efficient cooling system for long gaming sessions.',
			'Backlit keyboard for gaming in dark environments.'
		],
		advantages: [
			'Play the latest titles with stunning graphics and no lag.',
			'Ideal for those seeking a mobile gaming experience.',
			'Perform multitasking without compromising performance.',
			'Designed for serious gamers who demand the best.'
		],
		imagen: laptop_gaming,
		price: '999.99'
	},
	{
		id: 5,
		title: 'Ultra HD Monitor',
		description: '4K monitor for high resolution, ideal for creative professionals and gamers.',
		characteristics: [
			'4K resolution for exceptional image clarity.',
			'Accurate colors with advanced reproduction technology.',
			'HDMI and DisplayPort for multiple connections.',
			'Fast refresh rate for smooth gaming.',
			'Height and angle adjustment function for comfort.'
		],
		advantages: [
			'Enhance your workflow with detailed and accurate viewing.',
			'Enjoy games and movies with spectacular image quality.',
			'Perfect for photo editing, video editing, and graphic design.',
			'Compatibility with most modern devices.'
		],
		imagen: monitor_ultrahd,
		price: '299.99'
	},
	{
		id: 6,
		title: 'Ergonomic Mouse',
		description: 'Comfortable mouse for long hours of work, designed to improve hand posture.',
		characteristics: [
			'Ergonomic design that reduces wrist strain.',
			'Multiple programmable buttons for greater functionality.',
			'Wireless connection for a cable-free work environment.',
			'Compatible with multiple operating systems.',
			'High precision sensor for smooth control.'
		],
		advantages: [
			'Reduces fatigue in the hand and wrist during long sessions of use.',
			'Customize your workflow with programmable buttons.',
			'Keep your desk organized and tidy without cables.',
			'Improve your productivity with more precise control.'
		],
		imagen: raton_ergonomico,
		price: '29.99'
	},
	{
		id: 7,
		title: 'Smartwatch',
		description: 'Smartwatch with heart rate monitor and various health functions.',
		characteristics: [
			'Real-time heart rate monitor.',
			'Physical activity and sleep tracking.',
			'Notifications for calls, messages, and apps.',
			'Compatibility with Android and iOS systems.',
			'Battery life of up to 7 days.'
		],
		advantages: [
			'Improve your health and fitness with constant tracking.',
			'Stay connected without taking your phone out of your pocket.',
			'Ideal for leading an active and healthy lifestyle.',
			'Enjoy multiple functions in a single device.'
		],
		imagen: reloj_inteligente,
		price: '199.99'
	},
	{
		id: 8,
		title: 'Smartphone',
		description: 'Smartphone with a 6.5-inch screen that offers an immersive visual experience.',
		characteristics: [
			'6.5-inch AMOLED screen with high resolution.',
			'Powerful processor for fast performance.',
			'High-quality camera with multiple photography functions.',
			'Large internal storage capacity and expandable.',
			'5G connectivity for fast and smooth browsing.'
		],
		advantages: [
			'Capture stunning photos and videos with the advanced camera.',
			'Enjoy games and applications without lag.',
			'Perfect for streaming high-quality content.',
			'Always connected with the fastest 5G technology.'
		],
		imagen: smartphone,
		price: '799.99'
	},
	{
		id: 9,
		title: 'Mechanical Keyboard',
		description: 'Keyboard with mechanical switches.',
		characteristics: [
			'High-quality mechanical switches for precise tactile response.',
			'Customizable RGB backlighting for a unique style.',
			'Ergonomic design with wrist rest for greater comfort.',
			'Programmable keys to customize functions and shortcuts.',
			'Durable construction to withstand long hours of intensive use.'
		],
		advantages: [
			'Enhance your writing and gaming experience thanks to the quick response of the mechanical switches.',
			'Attractive aesthetics with backlighting that can be adjusted to your personal style.',
			'Comfort during long work or gaming sessions thanks to its ergonomic design.',
			'Flexibility to customize keys and optimize your workflow.',
			'Long-lasting and durable, ideal for demanding users who require a reliable keyboard.'
		],
		imagen: teclado_mecanico,
		price: '129.99'
	},
	{
		id: 10,
		title: 'HD Webcam',
		description: 'Webcam with HD resolution.',
		characteristics: [
			'1080p resolution for clear and sharp images.',
			'Built-in microphone for high-quality audio.',
			'Plug and play: easy to install without drivers.',
			'Adjustable clip for stable positioning on any surface.',
			'Compatible with popular video conferencing applications.'
		],
		advantages: [
			'Ideal for video calls, streaming, and recording.',
			'Clear image quality ensures a professional appearance.',
			'Easily portable, perfect for remote work or travel.',
			'Simple installation makes it accessible for everyone.'
		],
		imagen: webcam_hd,
		price: '49.99'
	},
	{
		id: 11,
		title: 'Portable Solar Charger',
		description: 'Eco-friendly solar charger for mobile devices.',
		characteristics: [
			'High-efficiency solar panels for quick charging.',
			'Dual USB output for charging multiple devices simultaneously.',
			'Compact and lightweight design for easy portability.',
			'Built-in LED flashlight for outdoor use.',
			'Durable and weather-resistant for outdoor adventures.'
		],
		advantages: [
			'Great for camping, hiking, or traveling off the grid.',
			'Reduces reliance on traditional power sources.',
			'Convenient for emergency situations when power is unavailable.',
			'Environmentally friendly solution for charging devices.'
		],
		imagen: solar_charger,
		price: '39.99'
	},
	{
		id: 12,
		title: 'Smart Fitness Tracker',
		description: 'Wearable device to monitor fitness activities and health metrics.',
		characteristics: [
			'Tracks steps, calories burned, and distance traveled.',
			'Heart rate monitoring for real-time health insights.',
			'Sleep tracking to improve overall sleep quality.',
			'Water-resistant design for use during workouts or swimming.',
			'Syncs with smartphones for notifications and data analysis.'
		],
		advantages: [
			'Helps you stay motivated to reach your fitness goals.',
			'Provides valuable health data to inform lifestyle choices.',
			'Lightweight and comfortable for all-day wear.',
			'Customizable watch faces to match your style.'
		],
		imagen: fitness_tracker,
		price: '79.99'
	}	
]
