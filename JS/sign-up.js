console.log(document);
const accountSlide = document.querySelector('.account-slide');
const businessSlide = document.querySelector(".business-slide");
const continueBtn = document.querySelector(".continue");
const returnBtn = document.querySelector(".return");
continueBtn.addEventListener('click', (e) => {
    businessSlide.classList.remove("hidden");
    accountSlide.classList.add("hidden");
});
returnBtn.addEventListener('click', (e) => {
    businessSlide.classList.add("hidden");
    accountSlide.classList.remove("hidden");
});