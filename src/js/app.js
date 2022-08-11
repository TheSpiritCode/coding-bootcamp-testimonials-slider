(()=>{
    console.info('JS loaded');

    document.addEventListener('DOMContentLoaded', ()=>{
        const slides = document.querySelectorAll('.slide');
        const nextButton = document.querySelector('.control__next');
        const prevButton = document.querySelector('.control__prev');
        const lastSlide = slides.length - 1;

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${index * 100}%)`;
        });

        let currentSlide = 0;

        nextButton.addEventListener('click', ()=>{
            if (lastSlide === currentSlide) {
                currentSlide = 0
            }
            else {
                currentSlide++;
            }

            slides.forEach((slide, index)=>{
                slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`
            })
        });

        prevButton.addEventListener('click', () => {
            if (0 === currentSlide) {
                currentSlide = lastSlide
            }
            else {
                currentSlide--;
            }

            slides.forEach((slide, index)=>{
                slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`
            })
        })

    })
})();