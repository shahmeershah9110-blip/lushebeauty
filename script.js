const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelector('#year').textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });
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

function saveCart() {
  localStorage.setItem("lusheCart", JSON.stringify(cart));
}

function openCart() {
  shoppingCart.classList.add("open");
  cartOverlay.classList.add("open");
}

function closeShoppingCart() {
  shoppingCart.classList.remove("open");
  cartOverlay.classList.remove("open");
}

cartButton?.addEventListener("click", openCart);
closeCart?.addEventListener("click", closeShoppingCart);
cartOverlay?.addEventListener("click", closeShoppingCart);

function updateCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
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
        <div>
          <h3>${item.name}</h3>
          <p>PKR ${item.price.toLocaleString()}</p>

          <div class="quantity-controls">
            <button onclick="changeQuantity(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 1)">+</button>
          </div>
        </div>

        <button class="remove-item" onclick="removeItem(${index})">×</button>
      </div>
    `;
  });

  const delivery = 250;

  cartCount.textContent = itemCount;
  cartSubtotal.textContent = `PKR ${subtotal.toLocaleString()}`;
  cartTotal.textContent = `PKR ${(subtotal + delivery).toLocaleString()}`;

  saveCart();
}

function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  updateCart();
  openCart();
}

function changeQuantity(index, amount) {
  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

window.addToCart = addToCart;
window.changeQuantity = changeQuantity;
window.removeItem = removeItem;

updateCart();
