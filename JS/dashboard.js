const businessName = document.querySelector('.business-name');
const businessAddress = document.querySelector('.business-address');
// icon selectors
const plusIconLocation = document.querySelector('.icon-container.location');
const plusIconPickUp = document.querySelector('.icon-container.pick-up');

// add variable for input in sign-up.js
// businessName.textContent = `${businessNameInput}`;
// businessAddress.textContent = `${businessAddressInput}`;

plusIconLocation.addEventListener('click', (e) => {
    console.log('clicked add location');
});
plusIconPickUp.addEventListener('click', (e) => {
    console.log('clicked add pick up');
});