// Function to enable scrolling when arrow is clicked
document.querySelector('.scroll-down-arrow').addEventListener('click', function () {
    // Animate the reveal effect
    const landing = document.querySelector('.landing');
    const content = document.querySelector('.content');
    const arrow = document.querySelector('.scroll-down-arrow');

    // Translate the landing and fade out the landing
    landing.style.transform = 'translateY(-100%)';
    landing.style.opacity = '0';
    arrow.style.display = 'none';

    // After a short delay (adjust as needed), show the content
    setTimeout(() => {
        landing.style.display = 'none';
        content.style.transform = 'translateY(0%)';
        
        // Enable scrolling by removing the overflow: hidden; property from the body
        document.body.style.overflow = 'auto';
    }, 1000); // Adjust the delay time (in milliseconds)
});



// Rest of your code...
$(document).ready(function () {
    $("#popup-button").click(function () {
        $("#popup").fadeIn();
    });

    $("#close-popup").click(function () {
        $("#popup").fadeOut();
    });
});

$(document).ready(function () {
    $("#collection-button").click(function () {
        $("#popup").fadeIn();
    });

    $("#close-popup").click(function () {
        $("#popup").fadeOut();
    });
});


var menu = document.querySelector(".mobile-menu")

if (navigator.userAgent.match(/Mobile/)) {

    menu.classList.add("ms-auto");

};
