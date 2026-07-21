/* ==========================================
   Avijat Shop BD
   script.js v5.0
   Part 1/3
========================================== */

// ===============================
// Shopping Cart
// ===============================

const cartBtn = document.getElementById("cart-btn");
const cartPanel = document.getElementById("cart-panel");
const closeCart = document.getElementById("close-cart");
const cartOverlay = document.getElementById("cart-overlay");

if (cartBtn && cartPanel) {

cartBtn.addEventListener("click", function(e) {

e.preventDefault();

cartPanel.classList.add("active");

if(cartOverlay){

cartOverlay.style.display="block";

}

});

}

if (closeCart && cartPanel) {

closeCart.addEventListener("click", function() {

cartPanel.classList.remove("active");

if(cartOverlay){

cartOverlay.style.display="none";

}

});

}

if (cartOverlay && cartPanel) {

cartOverlay.addEventListener("click", function(){

cartPanel.classList.remove("active");

cartOverlay.style.display="none";

});

}

// ===============================
// Back To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.addEventListener("click", function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

console.log("Avijat Shop BD Script Loaded");

/* ==========================================
   Search + Wishlist
========================================== */

// Search Button

const searchBtn = document.querySelector(".fa-magnifying-glass");

if(searchBtn){

searchBtn.addEventListener("click",function(e){

e.preventDefault();

alert("Search feature is coming soon...");

});

}

// Wishlist

const wishlistBtns=document.querySelectorAll(".fa-heart");

wishlistBtns.forEach(function(btn){

btn.addEventListener("click",function(e){

e.preventDefault();

btn.classList.toggle("active");

if(btn.classList.contains("active")){

btn.style.color="red";

}else{

btn.style.color="";

}

});

});

// Product Button

const productButtons=document.querySelectorAll(".btn-small");

productButtons.forEach(function(btn){

btn.addEventListener("click",function(){

console.log("Product Clicked");

});

});

/* ==========================================
   Avijat Shop BD
   script.js v5.0
   Part 3/3
========================================== */

// ===============================
// Newsletter Form
// ===============================

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

newsletterForm.addEventListener("submit", function(e) {

e.preventDefault();

alert("Thank you for subscribing!");

newsletterForm.reset();

});

}

// ===============================
// Active Navigation
// ===============================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link){

const href = link.getAttribute("href");

if(href === currentPage || (currentPage === "" && href === "index.html")){

link.classList.add("active");

}

});

// ===============================
// Console Message
// ===============================

console.log("====================================");

console.log(" Avijat Shop BD Website Loaded ");

console.log(" Version : 5.0 ");

console.log(" Developed with ❤️");

console.log("====================================");
