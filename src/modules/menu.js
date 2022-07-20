const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector("menu");
    const closeMenuBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");

    const handleMenu = () => {
        // if (!menu.style.transform) {
        //     menu.style.transform = "translateX(0)";
        // } else {
        //     menu.style.transform = "";
        // }
        menu.classList.toggle('active-menu')
    };
    menuBtn.addEventListener('click', handleMenu);

    closeMenuBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));
};

export default menu;