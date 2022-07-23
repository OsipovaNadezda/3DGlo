const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector("menu");
    const closeMenuBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");
    const main = document.querySelector("main");
    const scrollBnt = main.querySelector("a");


    const handleMenu = (event) => {
        event.preventDefault();
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

    scrollBnt.addEventListener('click', (e) => {
        e.preventDefault();
        const el = e.target.closest('a').getAttribute('href').substr(1);
       
        document.getElementById(el).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });


};

export default menu;