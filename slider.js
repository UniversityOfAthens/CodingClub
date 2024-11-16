document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const transitionDuration = 2500; // Duration of the slide transition in milliseconds
    let currentSlide = 0;
    let slideInterval;

    // Clone the first slide and append it at the end
    const firstSlideClone = slides[0].cloneNode(true);
    slider.appendChild(firstSlideClone);

    function goToSlide(index) {
        slider.style.transition = `transform ${transitionDuration / 1000}s ease`; // Smooth transition
        slider.style.transform = `translateX(-${index * 100}%)`;

        if (index >= slides.length) {
            // If it's the cloned slide, reset back to the first slide
            setTimeout(() => {
                slider.style.transition = 'none'; // Disable transition
                slider.style.transform = 'translateX(0%)';
                currentSlide = 0;
                updateDots(); // Immediately update dots to reflect the first slide
            }, transitionDuration);
        } else {
            currentSlide = index;
            updateDots();
        }
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 7500); // Auto-slide interval
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });
    });

    updateDots();
    startAutoSlide();
});