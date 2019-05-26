
// icon selectors
const plusIconLocation = document.querySelector('.icon-container.add-location-select');
const plusIconPickUp = document.querySelector('.icon-container.create-pick-up-select');

plusIconLocation.addEventListener('click', (e) => {
    console.log('clicked add location');
});
plusIconPickUp.addEventListener('click', (e) => {
    console.log('clicked add pick up');
});