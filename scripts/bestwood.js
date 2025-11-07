import { products } from "../data/products.js";
import { cart, calculateCartQuantity, addToCart } from "../data/cart.js";

function renderProductsByCategory(categoryClass, categoryName) {
  let productsHTML = "";

  products
    .filter((product) => product.category === categoryName)
    .forEach((product) => {
      productsHTML += `
<div class="col">
<div class="card shadow-sm">
    <img class="card-img-top img-fluid" src="${product.image}">
    <div class="card-body">
        <span class="badge text-bg-danger">New</span>
    <p class="card-text">
        ${product.name} - ${product.rating}
        <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
            >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
        </span>
    </p>
    <h4>Rs ${product.price}</h4>
    <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Buy Now</button>
            <button type="button" class="btn btn-sm btn-outline-secondary js-add-to-cart" data-product-id="${product.id}">Cart</button>
        </div>
        <small class="text-warning fw-bold">${product.off}% OFF</small>
    </div>
    </div>
</div>
</div>
`;
    });

  document.querySelector(categoryClass).innerHTML = productsHTML;
}

renderProductsByCategory(".js-products-bed", "bed");
renderProductsByCategory(".js-products-sofa", "sofa");
renderProductsByCategory(".js-products-hot", "hot");

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    const cartQuantity = calculateCartQuantity();
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});
