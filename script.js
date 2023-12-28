'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const btns = document.querySelectorAll(".num__btn");
    const btnsContainer = document.querySelector(".num__btns");
    const indicator = document.querySelector(".active__indicator");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    let currentPage = 0;

    function showPage(pageNumber) {
        pages.forEach((page, index) => {
            if (index === pageNumber) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });

        btns.forEach((btn, index) => {
            if (index === pageNumber) {
                setTimeout(() => btn.classList.add('num__btn--active'), 250);
            } else {
                setTimeout(() => btn.classList.remove('num__btn--active'), 250);
            }
        });

        indicator.style.transform = `translateX(${pageNumber * 4}rem)`
    }

    function updateButtons() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === pages.length - 1;
    }

    prevButton.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
            updateButtons();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
            updateButtons();
        }
    });

    btnsContainer.addEventListener("click", function(e) 
    {
        const clicked = e.target;
        if(!clicked.classList.contains("num__btn"))
        return;
    const i = Number(clicked.textContent) - 1;
    currentPage = i;
    showPage(i);
    updateButtons();
    })

    showPage(currentPage);
    updateButtons();
});
