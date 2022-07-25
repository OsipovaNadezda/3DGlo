const modal = () => {
    const popupBtn = document.querySelector('.popup-btn');
    const modal = document.querySelector('.popup');
    const popupContent = modal.querySelector('.popup-content');
    const popupClose = modal.querySelector('.popup-close');
    let count = 0;
    let idInterval;

    const flyAminate = () => {
        count += 0.5;

        if (count < 11) {
            popupContent.style.top = count + '%';
            // popupContent.style.left = count * 5 + 'px';
            idInterval = requestAnimationFrame(flyAminate);
        } else {
            cancelAnimationFrame(idInterval);
        }
    };

    popupBtn.addEventListener('click', () => {

        const screenWidth = window.innerWidth;
        modal.style.display = 'block';

        if (screenWidth > 768) {
            flyAminate();
        }
    });

    // popupClose.addEventListener('click', () => {
    // 
    //     //popupContent.style.left ='';
    // });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
            popupContent.style.top = "0%";
            count = 0;
        }
    });

};

export default modal;