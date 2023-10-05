console.log('index.js connected')

// render services from file
let services = [{
    name: 'Стрижка',
    price: 1400
}, {
    name: 'Укладка',
    price: 800
}, {
    name: 'Коррекция бороды',
    price: 900
}, {
    name: 'Окрашивание',
    price: 2400
}, {
    name: 'Эпиляция воском',
    price: 450
}]

let servicesBlock = document.getElementById('services')
let servicesSelect = document.getElementById('services-select')
for (let i=0; i < services.length; i++) {
    let serviceRow =
    `<div class="service-row">
        <p>${services[i].name}</p>
        <h3>${services[i].price} р.</h3>
    </div>`
    servicesBlock.innerHTML += serviceRow

    let serviceSelect = 
    `<div class="service-select-row">
        <input type="checkbox">
        <label for="">${services[i].name} (${services[i].price} р.)</label>
    </div>`
    servicesSelect.innerHTML += serviceSelect

}



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

// accordion
let accordion = document.getElementsByClassName('accordion-button');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        let panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none'
            accordion[i].className = accordion[i].className.replace(' active', '')
        } else {
            panel.style.display = 'block'
            accordion[i].className = accordion[i].className += ' active'
        }
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    })
}