const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const portfolioDots = document.querySelector('.portfolio-dots');
    //dot-active
    let currentSlide = 0;
    let idInterval;
    const timer = 2000;

    const createDots = () => {
        slides.forEach((item, index) => {
            if (index === 0) {
                portfolioDots.insertAdjacentHTML('beforeend', '<li class="dot dot-active"></li>');
                console.log(portfolioDots)
            } else {
                portfolioDots.insertAdjacentHTML('beforeend', '<li class="dot"></li>');
                console.log(portfolioDots)
            }
        });
    };

    const preSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        const dots = document.querySelectorAll('.dot');

        preSlide(slides, currentSlide, 'portfolio-item-active');
        preSlide(dots, currentSlide, 'dot-active');

        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer=1500) => {
    idInterval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(idInterval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        const dots = document.querySelectorAll('.dot');

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        preSlide(slides, currentSlide, 'portfolio-item-active');
        preSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.matches('.dot')) {
            portfolioDots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    sliderBlock.addEventListener('mouseenter', (e)=>{
        
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e)=>{
        
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timer);
        }
    }, true);

    createDots();
    startSlide(timer);

};

export default slider;