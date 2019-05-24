
// icon selectors
const plusIconLocation = document.querySelector('.icon-container.location');
const plusIconPickUp = document.querySelector('.icon-container.pick-up');
console.log(userData);

plusIconLocation.addEventListener('click', (e) => {
    console.log('clicked add location');
});
plusIconPickUp.addEventListener('click', (e) => {
    console.log('clicked add pick up');
});