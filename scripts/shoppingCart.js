import {
  cart,
  removeFromCart,
  saveToStorage,
  calculateCartQuantity,
} from "../data/cart.js";
import { getProduct } from "../data/products.js";

function renderCart() {
  let cartSummaryHTML = "";
  let total = 0;

  cart.forEach((cartItem) => {
    const matchingProduct = getProduct(cartItem.productId);
    const subtotal = matchingProduct.price * cartItem.quantity;
    total += subtotal;

    cartSummaryHTML += `
    <tr>
      <td data-th="Product">
        <div class="row">
          <div class="col-sm-2 hidden-xs">
            <img src="${matchingProduct.image}" alt="${matchingProduct.name}" class="img-responsive image-style" />
          </div>
          <div class="col-sm-10">
            <h4 class="nomargin">${matchingProduct.name}</h4>
            <p>Category: ${matchingProduct.category}</p>
          </div>
        </div>
      </td>
      <td data-th="Price">Rs ${matchingProduct.price}</td>
      <td data-th="Quantity">
        <input type="number" class="form-control text-center js-cart-quantity" value="${cartItem.quantity}" data-product-id="${matchingProduct.id}">
      </td>
      <td data-th="Subtotal" class="text-center">Rs ${subtotal}</td>
      <td class="actions" data-th="">
        <button class="btn btn-danger btn-sm js-delete-link" data-product-id="${matchingProduct.id}"><i class="fa fa-trash-o" ></i></button>
      </td>
    </tr>
  `;
  });

  document.querySelector(".js-product-cart").innerHTML = cartSummaryHTML;

  // Delete button
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      renderCart();
    });
  });

  // Quantity change
  document.querySelectorAll(".js-cart-quantity").forEach((input) => {
    input.addEventListener("change", (event) => {
      const newQuantity = Number(event.target.value);

      const productId = event.target.dataset.productId;

      const cartItem = cart.find((item) => item.productId === productId);
      if (cartItem) {
        cartItem.quantity = newQuantity;
        saveToStorage();
      }
      renderCart();
    });
  });

  //Total Summary

  const totalSummmaryHTML = `
 <tr class="visible-xs">
        <td class="text-center"><strong>Total Rs ${total}</strong></td>
      </tr>
      <tr>
        <td><a href="bestwood.html" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
        <td colspan="2" class="hidden-xs"></td>
        <td class="hidden-xs text-center"><strong>Total Rs ${total}</strong></td>
        <td><a href="checkout.html" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
      </tr>
`;
  document.querySelector(".js-total-price").innerHTML = totalSummmaryHTML;
}

renderCart();
