import './css/App.css';
import nav from './images/Website_Welcome.png';
import search from './images/lupa.png';
import { Home } from './components/Home';
import { Productos } from './components/products';
import { Details } from './components/Details';
import { Cart } from './components/Cart';
import { blogs } from './data/dataspn';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';


const data = blogs;
const hotsale = blogs.filter(blogs => [1, 7, 8].includes(blogs.id) );
const specialoffers = blogs.filter(blogs => [2, 4, 5].includes(blogs.id));  

function App() {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (data) => { setCartItems((prevItems) => [...prevItems, data]); };
  const onRemove = (id) => { setCartItems((prevItems) => prevItems.filter(item => item.id !== id));};
  const removeFromCart = (id) => { setCartItems((prevItems) => prevItems.filter(item => item.id !== id)); };

  return (
    <Router>
      <div>
        <header>
          <nav className='justify-center items-center'>
            <ul>
              <li><Link to="/products">Our products</Link></li>
              <li><Link to="/Cart">Cart</Link></li>
              <li>
                <img src={search} className='h-3 w-auto mr-3' />
                <input type='search' placeholder='Explore'
                  className='w-3/5 transition ease-in-out delay-150 bg-black :-translate-y-1 hover:scale-110
               hover:bg-white duration-700...'>
                </input>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <img src={nav} >
          </img>
          <div className=' bg-blue-900 h-6'>
          </div>
          <Routes>
            <Route path="/" element={<Home hotsale={hotsale} specialoffers={specialoffers} />} />
            <Route path="/products" element={<Productos data={data} />} />
            <Route path="/details/:id" element={<Details onAdd={onAdd}/>} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={onRemove}/>} />
          </Routes>

          
          <ProductList products={products} onAdd={addToCart} />
          <Cart cartItems={cartItems} onRemove={removeFromCart} />

          <h1>FAQS</h1>
          <h1>Payment methods</h1>
          <p>We accept VISA, MasterCard, American Express, Paypal and Binance, We accept VISA, MasterCard, American Express, Paypal and Binance.</p>
          <h1> Return Policy</h1>
          <p>Return Period: Products may be returned within 30 days of purchase, provided they meet our return criteria.</p>
          <p>Proof of Purchase: Please provide the original invoice or receipt with your return, as it is required for processing.</p>
          <p>Inspection Process: All returned items will undergo an inspection to ensure they are in their original condition, including packaging, tags, and any included accessories. Products that show signs of wear, damage, or alteration may not qualify for a full refund or exchange.</p>
          <p>Refund Method: If approved, your refund will be processed to your original method of payment. Please allow a few business days for this transaction.</p>
          <p>For any questions, please contact our customer service team. We’re here to help!</p>
        </div>
      </div>
      <footer className='bg-gray-200'>
        <div className='justify-center p-6' >
          <p>About us <br></br></p>
          <p onClick={terms} className='cursor-pointer'>Terms and conditions</p> <br></br>
        </div>
      </footer>
    </Router>
  );
}
export default App;

const terms = () => {
  Swal.fire({
    title: 'Terms and Conditions',
    html: '<p style="text-align: left;">Welcome to our online store! By using our website and making a purchase, you agree to the following terms and conditions. Please read them carefully before proceeding with any transactions.<br></br>' +
      '<b>Acceptance of Terms:</b> By accessing or using our website, you agree to be bound by these Terms and Conditions, as well as our Privacy Policy.<br></br>' +
      '<b>Eligibility:</b> To make a purchase, you must be at least 18 years old or have permission from a parent or legal guardian.<br></br>'+
      '<b>Payment Methods:</b> We accept payments by credit and debit cards, including Visa, MasterCard, and American Express, as well as other approved payment methods. By completing a transaction, you confirm that you are the authorized cardholder or have the cardholder´s permission to use the payment method.<br></br>'+
      '<b>Order Processing:</b> After placing an order, you will receive a confirmation email. Please review all order details carefully and notify us immediately of any changes. Orders are processed promptly, and we are unable to make changes once the items are prepared for shipment.<br></br>'+
      '<b>Pricing and Availability:</b> All prices are in [currency] and are subject to change without notice. We make every effort to ensure product availability; however, in cases where items are out of stock, we will notify you and may cancel the order if necessary.<br></br>'+
      '<b>Shipping and Delivery:</b> Shipping charges and estimated delivery times are provided during checkout. We are not responsible for delays caused by external factors such as customs or carrier delays.<br></br>'+
      '<b>Return and Refund Policy:</b> Returns may be accepted within 30 days of purchase with proof of purchase, subject to our inspection and return policy guidelines. Refunds will be issued to the original payment method.<br></br>'+
      '<b>Website Use:</b> You agree to use our website only for lawful purposes and to refrain from activities that could compromise the security or functionality of the website.<br></br>'+
      '<b>Intellectual Property:</b> All content on this site, including text, images, and logos, is the property of [Company Name] and is protected by copyright laws. Unauthorized use is prohibited.<br></br>'+
      '<b>Privacy:</b> Your personal information will be handled in accordance with our Privacy Policy. We are committed to safeguarding your privacy and will not share your information with third parties without your consent.<br></br>'+
      '<b>Limitation of Liability:</b> We are not liable for any damages or losses resulting from the use of our website or products, except where required by law. <br></br>'+
      '<b>Contact Us:</b> For questions or concerns about your order or these Terms and Conditions, please reach out to our customer service team. <br></br>'+
      'By using our site, you agree to these Terms and Conditions. Thank you for shopping with us! <br></br> </b>',
    icon: 'info',
    confirmButtonText: 'I understand',
    customClass: {
      popup: 'swal-popup',
      title: 'swal-title',
      content: 'swal-content',
      confirmButton: 'swal-confirm-button',
    }
  });
};

const user = () => {
  Swal.fire({
    title: 'Please fill the information',
    html: `
            <form>
                Nombre<br>
                <input type="text" id="name" class="swal2-input" placeholder="Ana Hernandez"><br><br>
                Correo electrónico:
                <input type="email" id="email" class="swal2-input" placeholder="Ana81@example.com"><br><br>
                Teléfono de contacto:
                <input type="text" id="phone" class="swal2-input" placeholder="8888-8888"><br><br>
            </form>
        `,
    confirmButtonText: 'Save',
    showCancelButton: true,
    preConfirm: () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      if (!name || !email || !phone) {
        Swal.showValidationMessage('Please fill the information');
        return false;
      }

      return { name, email, phone };
    }
  });
};
  
// Función para agregar un producto al carrito
const addToCart = (product) => {
  setCartItems((prevItems) => [...prevItems, product]);
  Swal.fire('Agregado!', `${product.title} ha sido agregado al carrito.`, 'success');
};
