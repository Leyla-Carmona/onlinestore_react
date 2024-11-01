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

export const blogs = [
	{
		id: 1,
		title: 'Auriculares Inalámbricos',
		description: 'Auriculares inalámbricos de alta calidad con conexión Bluetooth.',
		characteristics: [
			'Conexión Bluetooth 5.0 para un emparejamiento rápido y estable.',
			'Cancelación activa de ruido para una experiencia de audio envolvente.',
			'Ajuste ergonómico que se adapta cómodamente a tus oídos.',
			'Duración de batería de hasta 20 horas con carga rápida.',
			'Controles táctiles intuitivos para una fácil navegación.'
		],
		advantages: [
			'Disfruta de la música y llamadas sin distracciones externas.',
			'Perfectos para largas sesiones de escucha gracias a su diseño cómodo.',
			'Libertad de movimiento sin cables enredados.',
			'Sonido de alta calidad para una experiencia auditiva superior.'
		],
		imagen: auriculares_inalambricos,
		price: '59.99'
	},
	{
		id: 2,
		title: 'Consola de Videojuegos',
		description: 'Consola de última generación que lleva tu experiencia de juego al siguiente nivel.',
		characteristics: [
			'Potente procesador para un rendimiento óptimo.',
			'Gráficos de alta definición y soporte para juegos 4K.',
			'Compatible con una amplia gama de juegos y accesorios.',
			'Almacenamiento ampliable para una mayor capacidad de juegos.',
			'Acceso a servicios de streaming y aplicaciones.'
		],
		advantages: [
			'Disfruta de una experiencia de juego inmersiva con gráficos impresionantes.',
			'Ideal tanto para jugadores casuales como para los más exigentes.',
			'Conéctate con amigos y otros jugadores a través de la red en línea.',
			'Múltiples opciones de entretenimiento en una sola consola.'
		],
		imagen: consola_videojuegos,
		price: '499.99'
	},
	{
		id: 3,
		title: 'Disco Duro Externo',
		description: 'Disco de almacenamiento de 1TB, ideal para respaldar tus archivos importantes.',
		characteristics: [
			'Almacenamiento de 1TB para grandes cantidades de datos.',
			'Interfaz USB 3.0 para transferencias rápidas.',
			'Diseño portátil y ligero para llevar a cualquier lugar.',
			'Compatible con Windows y Mac.',
			'Plug and Play: no requiere instalación de software.'
		],
		advantages: [
			'Guarda y respalda tus archivos sin preocuparte por el espacio.',
			'Transfiere datos rápidamente, ahorrando tiempo en tus tareas.',
			'Llévalo contigo a donde necesites con facilidad.',
			'Mantén tus datos seguros y accesibles en cualquier momento.'
		],
		imagen: disco_duro_externo,
		price: '89.99'
	},
	{
		id: 4,
		title: 'Laptop Gaming',
		description: 'Laptop para gamers con tarjeta gráfica avanzada, diseñada para ofrecer un rendimiento excepcional.',
		characteristics: [
			'Pantalla Full HD con altas tasas de refresco.',
			'Potente procesador y gran capacidad de RAM.',
			'Tarjeta gráfica dedicada para un rendimiento superior en juegos.',
			'Sistema de refrigeración eficiente para largas sesiones de juego.',
			'Teclado retroiluminado para jugar en ambientes oscuros.'
		],
		advantages: [
			'Juega los títulos más recientes con gráficos impresionantes y sin retrasos.',
			'Ideal para quienes buscan una experiencia de juego móvil.',
			'Realiza tareas múltiples sin comprometer el rendimiento.',
			'Diseñado para gamers serios que exigen lo mejor.'
		],
		imagen: laptop_gaming,
		price: '999.99'
	},
	{
		id: 5,
		title: 'Monitor Ultra HD',
		description: 'Monitor 4K para alta resolución, ideal para profesionales creativos y gamers.',
		characteristics: [
			'Resolución 4K para una claridad de imagen excepcional.',
			'Colores precisos con tecnología de reproducción avanzada.',
			'Puerto HDMI y DisplayPort para múltiples conexiones.',
			'Tasa de refresco rápida para juegos fluidos.',
			'Función de ajuste de altura y ángulo para comodidad.'
		],
		advantages: [
			'Mejora tu flujo de trabajo con una visualización detallada y precisa.',
			'Disfruta de juegos y películas con una calidad de imagen espectacular.',
			'Perfecto para edición de fotos, videos y diseño gráfico.',
			'Compatibilidad con la mayoría de los dispositivos modernos.'
		],
		imagen: monitor_ultrahd,
		price: '299.99'
	},
	{
		id: 6,
		title: 'Ratón Ergonómico',
		description: 'Ratón cómodo para largas horas de trabajo, diseñado para mejorar la postura de la mano.',
		characteristics: [
			'Diseño ergonómico que reduce la tensión en la muñeca.',
			'Múltiples botones programables para mayor funcionalidad.',
			'Conexión inalámbrica para un entorno de trabajo sin cables.',
			'Compatible con múltiples sistemas operativos.',
			'Sensor de alta precisión para un control fluido.'
		],
		advantages: [
			'Disminuye la fatiga en la mano y la muñeca durante largas sesiones de uso.',
			'Personaliza tu flujo de trabajo con botones programables.',
			'Mantén tu escritorio organizado y limpio sin cables.',
			'Mejora tu productividad con un control más preciso.'
		],
		imagen: raton_ergonomico,
		price: '29.99'
	},
	{
		id: 7,
		title: 'Reloj Inteligente',
		description: 'Smartwatch con monitor de ritmo cardíaco y diversas funciones de salud.',
		characteristics: [
			'Monitor de ritmo cardíaco en tiempo real.',
			'Seguimiento de actividad física y sueño.',
			'Notificaciones de llamadas, mensajes y aplicaciones.',
			'Compatibilidad con sistemas Android e iOS.',
			'Duración de batería de hasta 7 días.'
		],
		advantages: [
			'Mejora tu salud y estado físico con un seguimiento constante.',
			'Permite estar conectado sin sacar el teléfono del bolsillo.',
			'Ideal para llevar un estilo de vida activo y saludable.',
			'Disfruta de múltiples funciones en un solo dispositivo.'
		],
		imagen: reloj_inteligente,
		price: '199.99'
	},
	{
		id: 8,
		title: 'Smartphone',
		description: 'Teléfono inteligente con pantalla de 6.5 pulgadas que ofrece una experiencia visual inmersiva.',
		characteristics: [
			'Pantalla AMOLED de 6.5 pulgadas con alta resolución.',
			'Procesador potente para un rendimiento rápido.',
			'Camara de alta calidad con múltiples funciones de fotografía.',
			'Gran capacidad de almacenamiento interno y expandible.',
			'Conectividad 5G para navegación rápida y fluida.'
		],
		advantages: [
			'Captura fotos y videos impresionantes con la cámara avanzada.',
			'Disfruta de juegos y aplicaciones sin retrasos.',
			'Perfecto para streaming de contenido en alta calidad.',
			'Siempre conectado con la tecnología 5G más rápida.'
		],
		imagen: smartphone,
		price: '799.99'
	},
	{
		id: 9,
		title: 'Teclado Mecánico',
		description: 'Teclado con switches mecánicos.',
		characteristics: [
			'Switches mecánicos de alta calidad para una respuesta táctil precisa.',
			'Retroiluminación RGB personalizable para un estilo único.',
			'Diseño ergonómico con reposamuñecas para mayor comodidad.',
			'Teclas programables para personalizar funciones y accesos directos.',
			'Construcción duradera para soportar largas horas de uso intensivo.'
		],
		advantages: [
			'Mejora la experiencia de escritura y gaming gracias a la respuesta rápida de los switches mecánicos.',
			'Estética atractiva con retroiluminación que puede ajustarse a tu estilo personal.',
			'Comodidad durante largas sesiones de trabajo o juego gracias a su diseño ergonómico.',
			'Flexibilidad para personalizar teclas y optimizar tu flujo de trabajo.',
			'Larga duración y resistencia, ideal para usuarios exigentes que requieren un teclado fiable.'
		],
		imagen: teclado_mecanico,
		price: '129.99'
	},{
		id: 10,
		title: 'Cámara Web HD',
		description: 'Cámara web con resolución HD.',
		characteristics: [
			'Resolución 1080p para imágenes claras y nítidas.',
			'MIC incorporado para audio de alta calidad.',
			'Plug and play: fácil de instalar sin necesidad de controladores.',
			'Clip ajustable para una colocación estable en cualquier superficie.',
			'Compatible con aplicaciones populares de videoconferencia.'
		],
		advantages: [
			'Ideal para videollamadas, streaming y grabaciones.',
			'Calidad de imagen clara que asegura una apariencia profesional.',
			'Diseño portátil, perfecto para trabajo remoto o viajes.',
			'Instalación sencilla que la hace accesible para todos.'
		],
		imagen: webcam_hd,
		price: '49.99'
	}
]

