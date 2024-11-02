import React from 'react';
import Swal from 'sweetalert2';

export function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (        
        cart.map((product) => (          
          <div>
          <table>
              <tr>
                <td><img src={`${product.imagen}`} alt={product.title} className='w-[150px] rounded-2xl border-opacity-15 bg-white' /></td>
                <td><h1>{product.title}</h1></td>
                <td>${product.price}</td>
              </tr>
              <tr>
                <td>{product.description}</td>                
                <td>Quantity: {product.quantity}</td>
              </tr>
          </table>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={user} className="m-9 w-[75%] bg-violet-800 hover:bg-violet-400 active:bg-slate-800 focus:outline-none focus:ring focus:ring-violet-300">Proceed to checkout</button>
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
                Email:
                <input type="email" id="email" class="swal2-input" placeholder="Ana81@example.com"><br><br>
                Phone number:
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
document.getElementById('section').innerHTML = 'Cart';
</script>