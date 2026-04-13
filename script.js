let count = 0;

function addToCart() {
    count++;
    document.getElementById("cart-count").innerText = count;

    let popup = document.getElementById("popup");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 1500);
}
function goToCart() {
  window.location.href = "cart.html";
}
