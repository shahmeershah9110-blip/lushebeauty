// MOBILE MENU
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}


// FOOTER YEAR
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// SHOPPING CART
const cartButton = document.getElementById("cartButton");
const shoppingCart = document.getElementById("shoppingCart");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("lusheCart")) || [];


// SAVE CART
function saveCart() {
  localStorage.setItem("lusheCart", JSON.stringify(cart));
}


// OPEN CART
function openCart() {
  if (shoppingCart) {
    shoppingCart.classList.add("open");
  }

  if (cartOverlay) {
    cartOverlay.classList.add("open");
  }
}


// CLOSE CART
function closeShoppingCart() {
  if (shoppingCart) {
    shoppingCart.classList.remove("open");
  }

  if (cartOverlay) {
    cartOverlay.classList.remove("open");
  }
}


// CART BUTTON EVENTS
cartButton?.addEventListener("click", openCart);

closeCart?.addEventListener("click", closeShoppingCart);

cartOverlay?.addEventListener("click", closeShoppingCart);


// UPDATE CART
function updateCart() {
  if (!cartItems || !cartCount || !cartSubtotal || !cartTotal) {
    return;
  }

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty-cart">Your cart is empty.</p>
    `;

    cartCount.textContent = "0";
    cartSubtotal.textContent = "PKR 0";
    cartTotal.textContent = "PKR 0";

    saveCart();
    return;
  }

  let subtotal = 0;
  let itemCount = 0;


  cart.forEach((item, index) => {
    subtotal += item.price * item.quantity;
    itemCount += item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">

        <div class="cart-item-info">
          <h3>${item.name}</h3>

          <p>
            PKR ${item.price.toLocaleString()}
          </p>

          <div class="quantity-controls">

            <button
              type="button"
              onclick="changeQuantity(${index}, -1)"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              onclick="changeQuantity(${index}, 1)"
            >
              +
            </button>

          </div>
        </div>


        <button
          type="button"
          class="remove-item"
          onclick="removeItem(${index})"
          aria-label="Remove ${item.name}"
        >
          ×
        </button>

      </div>
    `;
  });


  // DELIVERY CHARGE
  const delivery = 250;


  cartCount.textContent = itemCount;

  cartSubtotal.textContent =
    `PKR ${subtotal.toLocaleString()}`;

  cartTotal.textContent =
    `PKR ${(subtotal + delivery).toLocaleString()}`;


  saveCart();
}


// ADD PRODUCT TO CART
function addToCart(name, price) {
  const existingItem = cart.find(
    (item) => item.name === name
  );


  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: Number(price),
      quantity: 1
    });
  }


  updateCart();
  openCart();
}


// CHANGE QUANTITY
function changeQuantity(index, amount) {
  if (!cart[index]) {
    return;
  }

  cart[index].quantity += amount;


  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

// PLACE ORDER ON WHATSAPP
const checkoutButton = document.getElementById("checkoutButton");

checkoutButton?.addEventListener("click", () => {

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let subtotal = 0;

  let orderMessage = "✨ *NEW ORDER - LUSHÉ BEAUTY* ✨\n\n";

  orderMessage += "🛍️ *Order Details:*\n\n";

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;

    subtotal += itemTotal;

    orderMessage +=
      `${index + 1}. *${item.name}*\n` +
      `Quantity: ${item.quantity}\n` +
      `Price: PKR ${item.price.toLocaleString()}\n` +
      `Item Total: PKR ${itemTotal.toLocaleString()}\n\n`;
  });

  const delivery = 250;
  const total = subtotal + delivery;

  orderMessage += "━━━━━━━━━━━━━━\n";
  orderMessage += `💰 *Subtotal: PKR ${subtotal.toLocaleString()}*\n`;
  orderMessage += `🚚 *Delivery Charges: PKR ${delivery}*\n`;
  orderMessage += `💳 *TOTAL: PKR ${total.toLocaleString()}*\n`;
  orderMessage += "━━━━━━━━━━━━━━\n\n";
  orderMessage += "Hello Lushé Beauty! I would like to place this order. 💖";

  const whatsappNumber = "923315370760";

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  window.open(whatsappURL, "_blank");
});
  updateCart();
}


// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);

  updateCart();
}


// MAKE FUNCTIONS AVAILABLE TO HTML BUTTONS
window.addToCart = addToCart;
window.changeQuantity = changeQuantity;
window.removeItem = removeItem;


// LOAD CART WHEN WEBSITE OPENS
updateCart();
