const businessSelect = document.querySelector('.business-select');
const volunteerSelect = document.querySelector('.volunteer-select');
const nonprofitSelect = document.querySelector('.nonprofit-select');

const businessIcon = document.querySelector('.fa-handshake');
const volunteerIcon = document.querySelector('.fa-user');
const nonprofitIcon = document.querySelector('.fa-hand-holding-heart');

//business
businessSelect.addEventListener('mouseenter', () => {
    businessIcon.style.color = '#e59308';
    businessSelect.style.borderColor = '#e59308';
});

businessSelect.addEventListener('mouseleave', () => {
    businessIcon.style.color = '#c46128';
    businessSelect.style.borderColor = '#8d9a39';
});

$(".business-select").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
//volunteer
volunteerSelect.addEventListener('mouseenter', () => {
    volunteerIcon.style.color = '#e59308';
    volunteerSelect.style.borderColor = '#e59308';
});

volunteerSelect.addEventListener('mouseleave', () => {
    volunteerIcon.style.color = '#c46128';
    volunteerSelect.style.borderColor = '#8d9a39';
});

$(".volunteer-select").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
//nonprofit
nonprofitSelect.addEventListener('mouseenter', () => {
    nonprofitIcon.style.color = '#e59308';
    nonprofitSelect.style.borderColor = '#e59308';
});

nonprofitSelect.addEventListener('mouseleave', () => {
    nonprofitIcon.style.color = '#c46128';
    nonprofitSelect.style.borderColor = '#8d9a39';
});

$(".nonprofit-select").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });