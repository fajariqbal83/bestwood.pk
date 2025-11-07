import { cart } from "../data/cart.js";
import { getProduct } from "../data/products.js";

let shippingPrice = 1000;
let checkoutSubtotal = 0;
let items = 0;
let finalTotal = 0;

cart.forEach((cartItem) => {
  const matchingProduct = getProduct(cartItem.productId);
  const subtotal = matchingProduct.price * cartItem.quantity;
  items += cartItem.quantity;
  checkoutSubtotal += subtotal;
});

const totalBeforeTax = checkoutSubtotal + shippingPrice;

const taxPrice = totalBeforeTax * 0.05;

const ordersTotal = Math.round(totalBeforeTax + taxPrice);

let yourOrderSummary = `
            <tr>
              <th colspan="2">Your order</th>
            </tr>
            <tr>
              <td>Items<span>(${items})</span></td>
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
              <td class="total-price">Total before discount</td>
              <td>Rs ${ordersTotal}</td>
            </tr>
              <tr>
              <td> <input class="discount-code-input js-code-input" type="text" placeholder="Discount code"> </td>
             <td> <button class="js-discount-button" type="button"> Apply</button> </td>
            </tr>
             <tr>
              <td class="total-price">TOTAL</td>
              <td class="js-discount-price">Rs ${finalTotal}  </td>
            </tr>
            
`;

document.querySelector(".js-your-orders").innerHTML = yourOrderSummary;

const discountCodes = {
  SAVE10: 10,
  SAVE20: 20,
  SAVE50: 50,
};

const applyDiscount = document.querySelector(".js-discount-button");
applyDiscount.addEventListener("click", () => {
  const codeinput = document
    .querySelector(".js-code-input")
    .value.trim()
    .toUpperCase();

  if (discountCodes[codeinput]) {
    const discountPercent = discountCodes[codeinput];
    const discountAmount = (ordersTotal * discountPercent) / 100;
    finalTotal = ordersTotal - discountAmount;

    document.querySelector(".js-discount-price").innerHTML = `Rs ${finalTotal}`;

    localStorage.setItem("discountedTotal", finalTotal);
  } else {
    alert("Invalid discount code");
  }
});

let formSummary = `
          <label>
            <span class="fname"
              >First Name
              <span class="required">*</span>
            </span>
            <input type="text" name="fname" class = "js-first-name"/>
          </label>
          <label>
            <span class="lname"
              >Last Name
              <span class="required">*</span>
            </span>
            <input type="text" name="lname" class = "js-last-name" />
          </label>
          <label>
            <span>Company Name (Optional)</span>
            <input type="text" name="cn" class = "js-company-name" />
          </label>
          <label>
            <span
              >Country
              <span class="required">*</span>
            </span>
            <select name="selection" class = "js-select-country">
              <option value="select">Select a country...</option>
              <option value="AFG">Afghanistan</option>
              <option value="ALA">Åland Islands</option>
              <option value="ALB">Albania</option>
              <option value="DZA">Algeria</option>
              <option value="ASM">American Samoa</option>
              <option value="AND">Andorra</option>
              <option value="AGO">Angola</option>
              <option value="AIA">Anguilla</option>
              <option value="ATA">Antarctica</option>
              <option value="ATG">Antigua and Barbuda</option>
              <option value="ARG">Argentina</option>
              <option value="ARM">Armenia</option>
              <option value="ABW">Aruba</option>
              <option value="AUS">Australia</option>
              <option value="AUT">Austria</option>
              <option value="AZE">Azerbaijan</option>
              <option value="BHS">Bahamas</option>
              <option value="BHR">Bahrain</option>
              <option value="BGD">Bangladesh</option>
              <option value="BRB">Barbados</option>
              <option value="BLR">Belarus</option>
              <option value="BEL">Belgium</option>
              <option value="BLZ">Belize</option>
              <option value="BEN">Benin</option>
              <option value="BMU">Bermuda</option>
              <option value="BTN">Bhutan</option>
              <option value="BOL">Bolivia, Plurinational State of</option>
              <option value="BES">Bonaire, Sint Eustatius and Saba</option>
              <option value="BIH">Bosnia and Herzegovina</option>
              <option value="BWA">Botswana</option>
              <option value="BVT">Bouvet Island</option>
              <option value="BRA">Brazil</option>
              <option value="IOT">British Indian Ocean Territory</option>
              <option value="BRN">Brunei Darussalam</option>
              <option value="BGR">Bulgaria</option>
              <option value="BFA">Burkina Faso</option>
              <option value="BDI">Burundi</option>
              <option value="KHM">Cambodia</option>
              <option value="CMR">Cameroon</option>
              <option value="CAN">Canada</option>
              <option value="CPV">Cape Verde</option>
              <option value="CYM">Cayman Islands</option>
              <option value="CAF">Central African Republic</option>
              <option value="TCD">Chad</option>
              <option value="CHL">Chile</option>
              <option value="CHN">China</option>
              <option value="CXR">Christmas Island</option>
              <option value="CCK">Cocos (Keeling) Islands</option>
              <option value="COL">Colombia</option>
              <option value="COM">Comoros</option>
              <option value="COG">Congo</option>
              <option value="COD">Congo, the Democratic Republic of the</option>
              <option value="COK">Cook Islands</option>
              <option value="CRI">Costa Rica</option>
              <option value="CIV">Côte d'Ivoire</option>
              <option value="HRV">Croatia</option>
              <option value="CUB">Cuba</option>
              <option value="CUW">Curaçao</option>
              <option value="CYP">Cyprus</option>
              <option value="CZE">Czech Republic</option>
              <option value="DNK">Denmark</option>
              <option value="DJI">Djibouti</option>
              <option value="DMA">Dominica</option>
              <option value="DOM">Dominican Republic</option>
              <option value="ECU">Ecuador</option>
              <option value="EGY">Egypt</option>
              <option value="SLV">El Salvador</option>
              <option value="GNQ">Equatorial Guinea</option>
              <option value="ERI">Eritrea</option>
              <option value="EST">Estonia</option>
              <option value="ETH">Ethiopia</option>
              <option value="FLK">Falkland Islands (Malvinas)</option>
              <option value="FRO">Faroe Islands</option>
              <option value="FJI">Fiji</option>
              <option value="FIN">Finland</option>
              <option value="FRA">France</option>
              <option value="GUF">French Guiana</option>
              <option value="PYF">French Polynesia</option>
              <option value="ATF">French Southern Territories</option>
              <option value="GAB">Gabon</option>
              <option value="GMB">Gambia</option>
              <option value="GEO">Georgia</option>
              <option value="DEU">Germany</option>
              <option value="GHA">Ghana</option>
              <option value="GIB">Gibraltar</option>
              <option value="GRC">Greece</option>
              <option value="GRL">Greenland</option>
              <option value="GRD">Grenada</option>
              <option value="GLP">Guadeloupe</option>
              <option value="GUM">Guam</option>
              <option value="GTM">Guatemala</option>
              <option value="GGY">Guernsey</option>
              <option value="GIN">Guinea</option>
              <option value="GNB">Guinea-Bissau</option>
              <option value="GUY">Guyana</option>
              <option value="HTI">Haiti</option>
              <option value="HMD">Heard Island and McDonald Islands</option>
              <option value="VAT">Holy See (Vatican City State)</option>
              <option value="HND">Honduras</option>
              <option value="HKG">Hong Kong</option>
              <option value="HUN">Hungary</option>
              <option value="ISL">Iceland</option>
              <option value="IND">India</option>
              <option value="IDN">Indonesia</option>
              <option value="IRN">Iran, Islamic Republic of</option>
              <option value="IRQ">Iraq</option>
              <option value="IRL">Ireland</option>
              <option value="IMN">Isle of Man</option>
              <option value="ISR">Israel</option>
              <option value="ITA">Italy</option>
              <option value="JAM">Jamaica</option>
              <option value="JPN">Japan</option>
              <option value="JEY">Jersey</option>
              <option value="JOR">Jordan</option>
              <option value="KAZ">Kazakhstan</option>
              <option value="KEN">Kenya</option>
              <option value="KIR">Kiribati</option>
              <option value="PRK">
                Korea, Democratic People's Republic of
              </option>
              <option value="KOR">Korea, Republic of</option>
              <option value="KWT">Kuwait</option>
              <option value="KGZ">Kyrgyzstan</option>
              <option value="LAO">Lao People's Democratic Republic</option>
              <option value="LVA">Latvia</option>
              <option value="LBN">Lebanon</option>
              <option value="LSO">Lesotho</option>
              <option value="LBR">Liberia</option>
              <option value="LBY">Libya</option>
              <option value="LIE">Liechtenstein</option>
              <option value="LTU">Lithuania</option>
              <option value="LUX">Luxembourg</option>
              <option value="MAC">Macao</option>
              <option value="MKD">
                Macedonia, the former Yugoslav Republic of
              </option>
              <option value="MDG">Madagascar</option>
              <option value="MWI">Malawi</option>
              <option value="MYS">Malaysia</option>
              <option value="MDV">Maldives</option>
              <option value="MLI">Mali</option>
              <option value="MLT">Malta</option>
              <option value="MHL">Marshall Islands</option>
              <option value="MTQ">Martinique</option>
              <option value="MRT">Mauritania</option>
              <option value="MUS">Mauritius</option>
              <option value="MYT">Mayotte</option>
              <option value="MEX">Mexico</option>
              <option value="FSM">Micronesia, Federated States of</option>
              <option value="MDA">Moldova, Republic of</option>
              <option value="MCO">Monaco</option>
              <option value="MNG">Mongolia</option>
              <option value="MNE">Montenegro</option>
              <option value="MSR">Montserrat</option>
              <option value="MAR">Morocco</option>
              <option value="MOZ">Mozambique</option>
              <option value="MMR">Myanmar</option>
              <option value="NAM">Namibia</option>
              <option value="NRU">Nauru</option>
              <option value="NPL">Nepal</option>
              <option value="NLD">Netherlands</option>
              <option value="NCL">New Caledonia</option>
              <option value="NZL">New Zealand</option>
              <option value="NIC">Nicaragua</option>
              <option value="NER">Niger</option>
              <option value="NGA">Nigeria</option>
              <option value="NIU">Niue</option>
              <option value="NFK">Norfolk Island</option>
              <option value="MNP">Northern Mariana Islands</option>
              <option value="NOR">Norway</option>
              <option value="OMN">Oman</option>
              <option value="PAK">Pakistan</option>
              <option value="PLW">Palau</option>
              <option value="PSE">Palestinian Territory, Occupied</option>
              <option value="PAN">Panama</option>
              <option value="PNG">Papua New Guinea</option>
              <option value="PRY">Paraguay</option>
              <option value="PER">Peru</option>
              <option value="PHL">Philippines</option>
              <option value="PCN">Pitcairn</option>
              <option value="POL">Poland</option>
              <option value="PRT">Portugal</option>
              <option value="PRI">Puerto Rico</option>
              <option value="QAT">Qatar</option>
              <option value="REU">Réunion</option>
              <option value="ROU">Romania</option>
              <option value="RUS">Russian Federation</option>
              <option value="RWA">Rwanda</option>
              <option value="BLM">Saint Barthélemy</option>
              <option value="SHN">
                Saint Helena, Ascension and Tristan da Cunha
              </option>
              <option value="KNA">Saint Kitts and Nevis</option>
              <option value="LCA">Saint Lucia</option>
              <option value="MAF">Saint Martin (French part)</option>
              <option value="SPM">Saint Pierre and Miquelon</option>
              <option value="VCT">Saint Vincent and the Grenadines</option>
              <option value="WSM">Samoa</option>
              <option value="SMR">San Marino</option>
              <option value="STP">Sao Tome and Principe</option>
              <option value="SAU">Saudi Arabia</option>
              <option value="SEN">Senegal</option>
              <option value="SRB">Serbia</option>
              <option value="SYC">Seychelles</option>
              <option value="SLE">Sierra Leone</option>
              <option value="SGP">Singapore</option>
              <option value="SXM">Sint Maarten (Dutch part)</option>
              <option value="SVK">Slovakia</option>
              <option value="SVN">Slovenia</option>
              <option value="SLB">Solomon Islands</option>
              <option value="SOM">Somalia</option>
              <option value="ZAF">South Africa</option>
              <option value="SGS">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="SSD">South Sudan</option>
              <option value="ESP">Spain</option>
              <option value="LKA">Sri Lanka</option>
              <option value="SDN">Sudan</option>
              <option value="SUR">Suriname</option>
              <option value="SJM">Svalbard and Jan Mayen</option>
              <option value="SWZ">Swaziland</option>
              <option value="SWE">Sweden</option>
              <option value="CHE">Switzerland</option>
              <option value="SYR">Syrian Arab Republic</option>
              <option value="TWN">Taiwan, Province of China</option>
              <option value="TJK">Tajikistan</option>
              <option value="TZA">Tanzania, United Republic of</option>
              <option value="THA">Thailand</option>
              <option value="TLS">Timor-Leste</option>
              <option value="TGO">Togo</option>
              <option value="TKL">Tokelau</option>
              <option value="TON">Tonga</option>
              <option value="TTO">Trinidad and Tobago</option>
              <option value="TUN">Tunisia</option>
              <option value="TUR">Turkey</option>
              <option value="TKM">Turkmenistan</option>
              <option value="TCA">Turks and Caicos Islands</option>
              <option value="TUV">Tuvalu</option>
              <option value="UGA">Uganda</option>
              <option value="UKR">Ukraine</option>
              <option value="ARE">United Arab Emirates</option>
              <option value="GBR">United Kingdom</option>
              <option value="USA">United States</option>
              <option value="UMI">United States Minor Outlying Islands</option>
              <option value="URY">Uruguay</option>
              <option value="UZB">Uzbekistan</option>
              <option value="VUT">Vanuatu</option>
              <option value="VEN">Venezuela, Bolivarian Republic of</option>
              <option value="VNM">Viet Nam</option>
              <option value="VGB">Virgin Islands, British</option>
              <option value="VIR">Virgin Islands, U.S.</option>
              <option value="WLF">Wallis and Futuna</option>
              <option value="ESH">Western Sahara</option>
              <option value="YEM">Yemen</option>
              <option value="ZMB">Zambia</option>
              <option value="ZWE">Zimbabwe</option>
            </select>
          </label>
          <label>
            <span
              >Street Address
              <span class="required">*</span>
            </span>
            <input
              type="text"
              name="houseadd"
              class = "js-house-address"
              placeholder="House number and street name"
              required
            />
          </label>
          <label>
            <span>&nbsp;</span>
            <input
            class = "js-apartment"
              type="text"
              name="apartment"
              placeholder="Apartment, suite, unit etc. (optional)"
            />
          </label>
          <label>
            <span
              >Town / City
              <span class="required">*</span>
            </span>
            <input type="text" name="city" class = "js-city-town" />
          </label>
          <label>
            <span
              >State / Country
              <span class="required">*</span>
            </span>
            <input type="text" name="city" class = "js-state-country" />
          </label>
          <label>
            <span
              >Postcode / ZIP
              <span class="required">*</span>
            </span>
            <input type="text" name="city" class = "js-postcode" />
          </label>
          <label>
            <span
              >Phone
              <span class="required">*</span>
            </span>
            <input type="tel" name="city" class = "js-phone" />
          </label>
          <label>
            <span
              >Email Address
              <span class="required">*</span>
            </span>
            <input type="email" name="city" class = "js-email" />
          </label>
          <a href="shoppingCart.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              class="bi bi-arrow-left-square"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </a>
`;

document.querySelector(".js-form-checkout").innerHTML = formSummary;

const placeOrderButton = document.querySelector(".js-place-order");

placeOrderButton.addEventListener("click", (event) => {
  const storedFinalTotal = localStorage.getItem("discountedTotal");

  const orderinfo = {
    firstName: document.querySelector(".js-first-name").value,
    lastName: document.querySelector(".js-last-name").value,
    companyName: document.querySelector(".js-company-name").value,
    selectCountry: document.querySelector(".js-select-country").value,
    address: document.querySelector(".js-house-address").value,
    apartmentNumber: document.querySelector(".js-apartment").value,
    city: document.querySelector(".js-city-town").value,
    country: document.querySelector(".js-state-country").value,
    postcode: document.querySelector(".js-postcode").value,
    phone: document.querySelector(".js-phone").value,
    email: document.querySelector(".js-email").value,
    paymentMethod: document.querySelector(".js-payment-method:checked").value,
    total: ordersTotal,
    totalAfterDiscount: finalTotal,
  };

  localStorage.setItem("orderinfo", JSON.stringify(orderinfo));

  window.location.href = "thankyoupage.html";
});
