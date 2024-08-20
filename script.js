    // Existing modal-related JavaScript

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });