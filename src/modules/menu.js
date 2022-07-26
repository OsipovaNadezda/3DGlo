const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector("menu");
    const closeMenuBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");
    const main = document.querySelector("main");
    const scrollBnt = main.querySelector("a");

    // const handleMenu = (event) => {
    //     event.preventDefault();

    //     menu.classList.toggle('active-menu')
    // };
    // menuBtn.addEventListener('click', handleMenu);

     menuBtn.addEventListener('click', ()=>{
        menu.classList.toggle('active-menu');
     });

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains("close-btn") || e.target.closest('ul>li>a')) {
            e.preventDefault();
            menu.classList.toggle('active-menu');
        }
    });

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