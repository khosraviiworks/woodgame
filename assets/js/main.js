const mobileNav = document.querySelector('.mobile-nav');
const headerSearchIcon = document.querySelector('.search-header');
const transparentOverlay = document.getElementById('transparent-overlay');
const searchBoxPc = document.querySelector('.search-box-click');
const hamBtn = document.querySelector('.ham-menu');
const closeMobileNavIcon = document.querySelector('.close-mobile-nav-clos-icon');



const addMobileNav = ()=> {
    if(mobileNav.style.left == '0px') {
        mobileNav.style.left = '-300px'
    } else {
        mobileNav.style.left = '0';
    }
}
closeMobileNavIcon.addEventListener('click' , ()=>{
    mobileNav.style.left = '-300px'
    transparentOverlay.style.display = 'none';
}
)
const makePageUnclickable = ()=> {
    hamBtn.addEventListener('click' , ()=>{
        transparentOverlay.style.display = 'block';
    });
    transparentOverlay.addEventListener('click', ()=>{
        mobileNav.style.left = '-300px';
        transparentOverlay.style.display = 'none';
    })
}
const showsearchBoxPc = ()=> {
searchBoxPc.style.opacity = '0'? searchBoxPc.style.opacity = '1': searchBoxPc.style.opacity = '0';
    transparentOverlay.style.display = 'block';
    transparentOverlay.addEventListener('click', ()=>{
        searchBoxPc.style.opacity = '0';
    })
}
headerSearchIcon.addEventListener('click',showsearchBoxPc);
window.addEventListener('load' , makePageUnclickable);
hamBtn.addEventListener('click' , addMobileNav);
