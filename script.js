// 🚫 Disable ugly browser popup
window.alert = function () {};

// 🛒 Cart array
let cart = [];

// ➕ Add to cart
function addToCart(name, price) {
  cart.push({ name, price });
  updateCartCount();
  
}

// 🔢 Update cart number
function updateCartCount() {
  const cartBtn = document.getElementById("cartButton");
  if (cartBtn) {
    cartBtn.innerText = "🛒 (" + cart.length + ")";
  }
}


// 🛒 Open cart page
function openCart() {
  window.location.href = "Cart.html";
}

// 💳 Go to checkout
function goToCheckout() {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "Checkout.html";
}

// 📦 Load cart on Cart page
function loadCart() {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");

  if (!container) return;

  container.innerHTML = "";

  let total = 0;

  cartData.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${item.name} - K${item.price}</p>`;
    container.appendChild(div);
    total += item.price;
  });

  const totalDiv = document.createElement("h3");
  totalDiv.innerText = "Total: K" + total;
  container.appendChild(totalDiv);
}
