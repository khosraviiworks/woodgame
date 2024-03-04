const mobileNav = document.querySelector('.mobile-nav');
const headerSearchIcon = document.querySelector('.search-header');
const transparentOverlay = document.getElementById('transparent-overlay');
const searchBoxPc = document.querySelector('.search-box-click');
const hamBtn = document.querySelector('.ham-menu');
const closeMobileNavIcon = document.querySelector('.close-mobile-nav-clos-icon');
const products = document.querySelectorAll('.product');
const colorInputs = document.querySelectorAll('.color-inputs');
const colorBtnFilter = document.querySelectorAll('.color-filter-btn');
const stars = document.querySelectorAll('.star');
const rateBtnFilter = document.querySelectorAll('.rate-filter-btn');
const calculatorPriceBtn = document.querySelector('#calc-price');
const minPriceInput = document.querySelector('#input-min-price');
const maxPriceInput = document.querySelector('#input-max-price');

const showAllProduct = ()=> {
    products.forEach(e => {
        e.style.display = 'block'
    })
}
const priceHandler = ()=> {
    let minPrice = Number(minPriceInput.value);
    let maxPrice = Number(maxPriceInput.value);
    if (!minPrice && !maxPrice) {
        alert('enter a value');
        showAllProduct();
    }else if(minPrice === maxPrice){
        alert('values are equal. please enter 2 values those are not equal');
        showAllProduct();
    }else {
        products.forEach(product => {
            const productPrice = product.querySelector('.card').querySelector('.price-card').querySelector('span').innerText;
            const productPriceNum = productPrice.split('$');
            if (+productPriceNum[0]>minPrice && +productPriceNum[0]<maxPrice) {
                product.style.display = 'block';
            }else {
                product.style.display = 'none';
            }
        })
        minPriceInput.value = '';
        maxPriceInput.value = '';
    }
}


rateBtnFilter.forEach(e => {
    e.addEventListener('click' ,()=>{
        rateBtnFilter.forEach(btn => btn.classList.remove('test'));
        e.classList.add('test');
    let btnDataSet = e.dataset.rate;
    products.forEach(product => {
        let productDataSet = product.dataset.rate;
        if (productDataSet === btnDataSet) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    })
})
})

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
    searchBoxPc.style.right = '2000px'? searchBoxPc.style.right = '0px': searchBoxPc.style.right = '2000px';
    transparentOverlay.style.display = 'block';
    transparentOverlay.addEventListener('click', ()=>{
        searchBoxPc.style.right = '2000px';
    })
}
headerSearchIcon.addEventListener('click',showsearchBoxPc);
window.addEventListener('load' , makePageUnclickable);
hamBtn.addEventListener('click' , addMobileNav);
calculatorPriceBtn.addEventListener('click', priceHandler)







let colorFilterHander = (filter)=> {
    let filterVal = filter.target.dataset.color;
    products.forEach(e => {
        let productDataVal = e.dataset.color;
        if (filterVal == 'all') {
            e.style.display = 'block';
        }else {
            filterVal===productDataVal?e.style.display = 'block':e.style.display = 'none';
        }
    })
};

colorBtnFilter.forEach(e => {
    e.addEventListener('click' , colorFilterHander)
})



