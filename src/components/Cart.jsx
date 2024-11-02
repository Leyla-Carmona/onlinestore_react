import React from 'react';
import Swal from 'sweetalert2';

export function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  return (
    <div className='cart'>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (        
        cart.map((product) => (          
          <div>
          
          <img src={`${product.imagen}`} alt={product.title} />
          <table>
            <tr>
                <td><h1>{product.title}</h1></td>
                <td><b>${product.price}</b></td>
              </tr>
              <tr>
              <td><p>{product.description}</p></td>                         
              <td><p>Quantity: {product.quantity}</p></td>
              </tr>
          </table>          
          <button onClick={() => removeFromCart(product.id)}>Remove</button>    
          <table>     
             <td><h1>Subtotal:</h1></td>
             <td><p>$ {product.price * product.quantity}</p></td>
             </table>
      </div>  
        ))
      )}
      <table  className="total">
        <td>
        <h1>Total:</h1>
        </td>
        <td>
        <p>${total.toFixed(2)}</p>
        </td>
      </table>
      <button id='check' onClick={user} className="m-9 w-[75%] bg-violet-800 hover:bg-violet-400 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300">Proceed to checkout</button>
    </div>
  );
};


const user = () => {
  Swal.fire({
    title: 'Please fill the information',
    html: `
            <form>
                Name:<br>
                <input type="text" id="name" class="swal2-input" placeholder="Ana Hernandez"><br><br>
                Email:<br>
                <input type="email" id="email" class="swal2-input" placeholder="Ana81@example.com"><br><br>
                Phone number:<br>
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
      else {
        Swal.fire({
          icon: 'success',
          title: '¡Thank you! You will receive an email with the next steps',
        })
      }
    }
});
};


<script>
document.getElementById('section').innerHTML = 'Shopping Cart';
</script>

export default Cart;