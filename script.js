/* =====================================
   Avijat Shop BD v4.0
===================================== */

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// Newsletter
// ===============================

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you for subscribing!");

        newsletterForm.reset();

    });

}

// ===============================
// Active Menu
// ===============================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});// =====================================
// Product Search
// =====================================

const searchBox = document.querySelector(".search-box");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let products = document.querySelectorAll(".product-card");

        products.forEach(product => {

            let name = product.querySelector("h3").innerText.toLowerCase();

            if (name.indexOf(value) > -1) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

}

// =====================================
// Wishlist Demo
// =====================================

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "❤️ Added";

        button.style.background = "#0a9c3f";

        button.style.color = "#fff";

    });

});

// =====================================
// Quick View Demo
// =====================================

const quickViewButtons = document.querySelectorAll(".quick-view-btn");

quickViewButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Quick View feature will be available in the next update.");

    });

});

// =====================================
// Add To Cart Demo
// =====================================

const cartButtons = document.querySelectorAll(".btn");

cartButtons.forEach(button => {

    button.addEventListener("click", function () {

        if (this.innerText === "Shop Now") return;

        alert("🛒 Product added to cart.");

    });

});// =====================================
// Category Filter
// =====================================

const categoryFilter = document.querySelector(".category-filter");

if (categoryFilter) {

    categoryFilter.addEventListener("change", function () {

        alert("Category Filter Demo: " + this.value);

    });

}

// =====================================
// Hero Button Hover Effect
// =====================================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// =====================================
// Page Loaded
// =====================================

window.addEventListener("load", () => {

    console.log("✅ Avijat Shop BD Loaded Successfully");

});

// =====================================
// Copyright Year
// =====================================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright p");

if (copyright) {

    copyright.innerHTML =
    `© ${year} Avijat Shop BD. All Rights Reserved.`;

}

// =====================================
// End Of File
// =====================================
