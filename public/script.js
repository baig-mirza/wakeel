document.querySelector('.scroll-down-arrow').addEventListener('click', function () {
    // Animate the reveal effect
    const landing = document.querySelector('.landing');
    const content = document.querySelector('.content');

    // Translate the landing and fade out the landing
    landing.style.transform = 'translateY(-100%)';
    landing.style.opacity = '0';

    // After a short delay (adjust as needed), show the content
    setTimeout(() => {
        landing.style.display = 'none';
        // content.style.opacity = '1';
        content.style.transform = 'translateY(0%)';
    }, 800); // Adjust the delay time (in milliseconds)
});
