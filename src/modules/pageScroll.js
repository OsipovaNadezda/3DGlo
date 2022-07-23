const pageScroll = () => {
    const menu = document.querySelector("menu");
    const menuItems = menu.querySelectorAll("ul>li>a");

    for (let menuItem of menuItems) {
        menuItem.addEventListener('click', function(event) {
            event.preventDefault();

            const idItem = menuItem.getAttribute('href').substring(1);

            document.getElementById(idItem).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
};

export default pageScroll;