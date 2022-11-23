let menBar = document.querySelector('.icon-menu');
let menIcon = document.querySelector('.icon-menu i');
let menu = document.getElementById('menu');

menBar.addEventListener('click', e=>{
    menu.classList.toggle('thow');

    if(menu.classList.contains('show')){
        menIcon.setAttribute('class', 'fa fa-times');
    }else{
        menIcon.setAttribute('class','fa fa-bars');
    }
});