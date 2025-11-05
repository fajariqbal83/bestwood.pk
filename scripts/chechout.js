import { cart } from "../data/cart.js";
import { getProduct } from "../data/products.js";

let checkoutSubtotal = 0;
let shippingPrice = 1000;


cart.forEach((cartItem) => {
  const matchingProduct = getProduct(cartItem.productId);

  const subtotal = matchingProduct.price * cartItem.quantity;
  checkoutSubtotal += subtotal;
});

const totalBeforeTax = checkoutSubtotal + shippingPrice;

const taxPrice = totalBeforeTax * 0.05;

const ordersTotal = totalBeforeTax + taxPrice;

let yourOrderSummary = `
            <tr>
              <th colspan="2">Your order</th>
            </tr>
            <tr>
              <td>Items<span>(0)</span></td>
              <td>Rs ${checkoutSubtotal}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Rs ${shippingPrice}</td>
            </tr>
               <tr>
              <td>Total before tax</td>
              <td>Rs ${totalBeforeTax}</td>
            </tr>
            <tr>
              <td>Tax (5%)</td>
              <td>Rs ${taxPrice}</td>
            </tr>
             <tr>
              <td class="total-price">TOTAL</td>
              <td>Rs ${ordersTotal}</td>
            </tr>
`;

document.querySelector('.js-your-orders').innerHTML = yourOrderSummary;