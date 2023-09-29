console.log('index.js connected')

// tab 
function openTab (evt, tabName) {
    let tabsContent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].style.display = 'none'
    }

    let tabsLinks = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].className = tabsLinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}
// open default tab
document.getElementById('deafault-open-tab').click();

// discount
function getDiscount() {
    let possibleDiscounts = ['5%', '10%', '15%', '20%'];
    let number = possibleDiscounts[Math.floor(Math.random() * possibleDiscounts.length)];

    let discountContent = document.getElementById('discount-number')
    let loader = document.getElementById('loader')
    let getDiscountButton = document.getElementById('get-discount-button')
    
    getDiscountButton.onclick = null;
    discountContent.style.display = 'none'
    loader.style.display = 'block'
    setTimeout(() => {

        getDiscountButton.onclick = getDiscount;
        getDiscountButton.textContent = 'ПОПРОБОВАТЬ ЕЩЕ'
        discountContent.style.color = '#000';
        discountContent.textContent = number;
        discountContent.style.display = 'block'
        loader.style.display = 'none'
    }, 2000)

}