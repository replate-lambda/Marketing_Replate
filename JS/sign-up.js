const accountSlide = document.querySelector(".account-slide");
const businessSlide = document.querySelector(".business-slide");
// Buttons:
const continueBtn = document.querySelector(".btn.continue");
const returnBtn = document.querySelector(".btn.return");
const signUpBtn = document.querySelector(".sign-up");

continueBtn.addEventListener('click', (e) => {
    businessSlide.classList.remove("hidden");
    accountSlide.classList.add("hidden");
});
returnBtn.addEventListener('click', (e) => {
    businessSlide.classList.add("hidden");
    accountSlide.classList.remove("hidden");
});

var inputData = {};
    

class User {
    constructor(formData) {
        this.fName = formData.fName;
        this.phoneNum = formData.phoneNum;
        this.email = formData.email;
        this.password = formData.password;
        this.businessName = formData.businessName;
        this.businessAddress = formData.businessAddress;
        this.businessEmail = formData.businessEmail;
    }
}
