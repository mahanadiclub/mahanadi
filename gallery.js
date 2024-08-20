document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll('.category');
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.querySelector(".modal-caption");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let images = [];
    let currentImageIndex = 0;

    categories.forEach(category => {
        category.addEventListener('click', () => {
            images = category.dataset.images.split(',');
            currentImageIndex = 0;
            showImage();
            modal.style.display = "flex";
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    prevBtn.onclick = function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showImage();
        }
    }

    nextBtn.onclick = function() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            showImage();
        }
    }

    function showImage() {
        modalImg.src = images[currentImageIndex];
        modalCaption.textContent = `${currentImageIndex + 1} of ${images.length}`;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Existing modal-related JavaScript

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
    
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
    