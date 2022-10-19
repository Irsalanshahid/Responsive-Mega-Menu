const megaMenu = document.querySelector('#mega-menu-icons');
const togBtn = document.querySelector("#toggleButton");

const megaMenuCompany = document.querySelector('#mega-menu-icons-dropdown');
const togBtnCompany = document.querySelector("#mega-menu-icons-dropdown-button");
//console.log(togBtn)
togBtn.addEventListener('click',()=>{
    //console.log(megaMenu)
    if(megaMenu.classList.contains('hidden')){
        megaMenu.classList.remove('hidden');
    }else{
        megaMenu.classList.add('hidden');
    }
});

togBtnCompany.addEventListener('click',()=>{
    //console.log(megaMenu)
    if(megaMenuCompany.classList.contains('hidden')){
        megaMenuCompany.classList.remove('hidden');
        
    }else{
        megaMenuCompany.classList.add('hidden');
        
    }
});