import {
  cart
} from "../data/cart.js";
import { getProduct } from "../data/products.js";

const orderinfo = JSON.parse(localStorage.getItem('orderinfo'));



if (orderinfo) {
  document.querySelector('.js-firstName').textContent = orderinfo.firstName;
  document.querySelector('.js-addressHouse').textContent = orderinfo.address;
  document.querySelector('.js-phoneNumber').textContent = orderinfo.phone;
  document.querySelector('.js-thankyou-total').textContent = orderinfo.total;
  document.querySelector('.js-discount-total').textContent = orderinfo.totalAfterDiscount;
  document.querySelector('.js-selectedPaymentMethod').textContent = orderinfo.paymentMethod;
}

let orderDetailsSummary = "";

cart.forEach((cartItem) => {

   const matchingProduct = getProduct(cartItem.productId);

  
orderDetailsSummary += `
        <tr>
          <td><a href="#" class="product-name">${matchingProduct.name}</a></td>
          <td>x ${cartItem.quantity}</td>
        </tr>
        
`;

});

orderDetailsSummary += `
        <tr>
          <td class="label-cell">Payment method:</td>
          <td>${orderinfo.paymentMethod}</td>
        </tr>
        <tr class="total-row">
          <td class="label-cell">Total before discount:</td>
          <td>${orderinfo.total}</td>
        </tr>
         <tr class="total-row">
          <td class="label-cell">Total after discount:</td>
          <td>${orderinfo.totalAfterDiscount}</td>
        </tr>
`;

document.querySelector('.js-order-details').innerHTML = `
  <tbody class="order-detail-table">
    ${orderDetailsSummary}
  </tbody>
`;

localStorage.removeItem('cart');