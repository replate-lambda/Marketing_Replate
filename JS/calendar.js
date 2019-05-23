const date = document.querySelectorAll('.date');

date.forEach((day) => {
    day.innerHTML = new Date().toDateString();
})

