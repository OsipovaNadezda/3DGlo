const modal = () => {
    const popupBtn = document.querySelector('.popup-btn');
    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');
    const popupClose = modal.querySelector('.popup-close');
    let count = 0;
    let idInterval;

    const flyAminate = () => {
        count++;

        if (count < 120) {
            popupContent.style.top = count * 1.5 + 'px';
            popupContent.style.left = count * 5 + 'px';
            idInterval = requestAnimationFrame(flyAminate);
        } else {
            cancelAnimationFrame(idInterval);
        }
    };

    popupBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        flyAminate();
    });

    popupClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

};

export default modal;