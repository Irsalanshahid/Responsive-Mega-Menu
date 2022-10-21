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
    //console.log(megaMenu.classList)
    if(megaMenuCompany.classList.contains('hidden')){
        megaMenuCompany.classList.remove('hidden');
        
        megaMenu.classList.add('block');
        
        
    }else{
        megaMenuCompany.classList.add('hidden');
        megaMenu.classList.remove('block');
    }
});

const darkMode = document.getElementById("toggleB");
const htmlDocWhole = document.getElementById("documentId")
darkMode.addEventListener('click',()=>{
    if(darkMode.checked){
        htmlDocWhole.classList.add("dark");
    }else{
        htmlDocWhole.classList.remove('dark');
    }
})