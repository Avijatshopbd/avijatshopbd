let cart = 0;

function add(product) {
    cart++;
    const cartText = document.getElementById("cart");
    if (cartText) {
        cartText.innerText = `Cart: ${cart} item(s)`;
    }

    alert(product + " added to cart!");
}
