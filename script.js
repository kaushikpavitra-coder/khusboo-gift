const pages = document.querySelectorAll(".page");

const giftBtn = document.getElementById("giftBtn");
const nextStory = document.getElementById("nextStory");
const finalNext = document.getElementById("finalNext");

let currentPage = 0;


/* PAGE 1 */

pages.forEach((page, index) => {
    if (index === 0) {
        page.classList.add("active");
    }
});


/* Show selected page */

function showPage(pageNumber) {

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    pages[pageNumber].classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* PAGE 1 → PAGE 2 */

giftBtn.addEventListener("click", () => {

    currentPage = 1;

    showPage(currentPage);

});


/* PAGE 2 → PAGE 3 */

nextStory.addEventListener("click", () => {

    currentPage = 2;

    showPage(currentPage);

});


/* PAGE 3 → PAGE 4 */

finalNext.addEventListener("click", () => {

    currentPage = 3;

    showPage(currentPage);

});