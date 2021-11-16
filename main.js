const myBurgerMenu = document.querySelector('.header-right > a');

const myCrossMenu = document.querySelector('.hamburger-menu > a');

myBurgerMenu.addEventListener('click',
    function(){
        const myMenu = document.querySelector('.hamburger-menu');
        myMenu.classList.add('active');
    } 
);

myCrossMenu.addEventListener('click',
    function(){
        const myMenu = document.querySelector('.hamburger-menu');
        myMenu.classList.remove('active');
    } 
);