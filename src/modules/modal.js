import {
    animate
} from './helpers';

const modal = () => {
    const popupBtn = document.querySelector('.popup-btn');
    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');

    popupBtn.addEventListener('click', () => {

        const screenWidth = window.innerWidth;
        modal.style.display = 'block';

        if (screenWidth > 768) {

            setTimeout(animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    popupContent.style.left = (progress * 38) + '%';
                    popupContent.style.top = (progress * 10) + '%';
                }
            }), 1500);
        }
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });

};

export default modal;