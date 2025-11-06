const orderinfo = JSON.parse(localStorage.getItem('orderinfo'));

if (orderinfo) {
  document.querySelector('.js-firstName').textContent = orderinfo.firstName;
  document.querySelector('.js-addressHouse').textContent = orderinfo.address;
  document.querySelector('.js-phoneNumber').textContent = orderinfo.phone;
  document.querySelector('.js-thankyou-total').textContent = orderinfo.total;
  document.querySelector('.js-selectedPaymentMethod').textContent = orderinfo.paymentMethod;
}


let orderDetailsSummary = `
      <thead class="head-details">
        <tr>
          <th>PRODUCT</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#" class="product-name">Tyche Tshirt × 1</a></td>
          <td>₹45</td>
        </tr>
        <tr>
          <td class="label-cell">Payment method:</td>
          <td>${orderinfo.paymentMethod}</td>
        </tr>
        <tr class="total-row">
          <td class="label-cell">Total:</td>
          <td>${orderinfo.total}</td>
        </tr>
      </tbody>
`;

document.querySelector('.js-order-details').innerHTML = orderDetailsSummary;