console.log('index.js connected')

// render services from file
let services = [{
    id: 0,
    name: 'Стрижка',
    price: 1400
}, {
    id: 1,
    name: 'Укладка',
    price: 800
}, {
    id: 2,
    name: 'Коррекция бороды',
    price: 900
}, {
    id: 3,
    name: 'Окрашивание',
    price: 2400
}, {
    id:4,
    name: 'Эпиляция воском',
    price: 450
}]

let servicesBlock = document.getElementById('services')
let servicesSelect = document.getElementById('services-input')
for (let i=0; i < services.length; i++) {
    let serviceRow =
    `<div class="service-row">
        <p>${services[i].name}</p>
        <div class="service-row-line"></div>
        <h3>${services[i].price} р.</h3>
        <img src="./img/scissors.png" alt="">
    </div>`
    servicesBlock.innerHTML += serviceRow

    let serviceSelect = 
    `<div class="service-select-row" >
        <input type="checkbox" id="service-select-row-${services[i].id}" onclick="changeValue(${services[i].id})">
        <label for="" value="${services[i].name}">${services[i].name} (${services[i].price} р.)</label>
    </div>`
    servicesSelect.innerHTML += serviceSelect

}

// mobile nav menu
const header = document.getElementById('header')
const navigation = document.querySelector('.content-box')
const mobileNavButton = document.querySelector('.mobile-menu-button')
mobileNavButton.onclick = function (){
    navigation.classList.toggle('mobile');
    header.style.flexDirection = 'column';
    header.style.justifyContent = 'start';
}
function backStyle(){
    header.style.flexDirection = 'row';
    header.style.justifyContent = 'space-between';
}

// select barber
const barberSelector = document.getElementById('select-barber')
barberSelector.value = ''
function selectThisBarber(barber) {
    barberSelector.value = barber
    document.getElementById('visit').scrollIntoView()
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

// visit
let selectedServices = []
function changeValue(id) {
    total = document.getElementById('total').textContent
    totalElement = document.getElementById('total')
    totalElement.innerHTML = '0'
    if (document.getElementById(`service-select-row-${id}`).checked == true) {
        let res = Number(total) + services[id].price
        totalElement.innerHTML = `${res}`
        selectedServices.push(services[id].name)
    } else {
        let res = Number(total) - services[id].price
        totalElement.innerHTML = `${res}`
        selectedServices = selectedServices.filter(item => item !== services[id].name)
    }
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

// modal
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('modal-content')
const openModalBtn = document.getElementById('create-visit')
const closeModalBtn = document.getElementById('close-modal')

function openModal(){
    if (document.getElementById('name-input').value != '' 
    && document.getElementById('date-input').value != ''
    && selectedServices.length != 0
    && document.getElementById('phone-input').value != ''
    && document.getElementById('phone-input').value.length == 2+1+3+1+3+3+3
    && document.getElementById('select-barber').options[document.getElementById('select-barber').selectedIndex].text != null
    && document.getElementById('personal-data-input').checked == true
    ) {
        modal.style.display = 'flex'
        document.querySelector('body').style.overflowY = 'hidden'
        fillModal()
    } else {
        document.getElementById('not-all-fields').style.display = 'block'
        setTimeout(() => {
            document.getElementById('not-all-fields').style.display = 'none'   
        }, 5000)
    }
}
openModalBtn.onclick = openModal

function closeModal(){
    modal.style.display = 'none'
    document.querySelector('body').style.overflowY = 'auto'
}
closeModalBtn.onclick = closeModal

window.onclick = function (event) {
    if (event. target == modal) {
        closeModal()
}}

window. addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal()
    }
})

// insert info in modal-content
function fillModal(){
    let modalText = document.querySelector('.modal-text')
    modalText.innerHTML = `<div class="modal-text">
    <h2>${document.getElementById('name-input').value}, <br> проверьте данные:</h2>
    <h3>Мастер:</h3>
    <p>${document.getElementById('select-barber').options[document.getElementById('select-barber').selectedIndex].text}</p>
    <h3>Дата:</h3>
    <p>${document.getElementById('date-input').value}</p>
    <h3>Услуги:</h3>
    <p>${selectedServices}</p>
    <h3>Итого:</h3>
    <p>${document.getElementById('total').textContent} р.</p>
    <h3>Ваш номер:</h3>
    <p>${document.getElementById('phone-input').value}</p>
    <button id='confirm-visit' onclick = 'openFinalModal()'>Подтвердить и записаться</button>
    </div>`
    
}

function openFinalModal() {
    closeModal()
    document.querySelector('.modal-final').style.display = 'block'
    setTimeout(() => {
        document.querySelector('.modal-final').style.display = 'none'
    }, 5000)
}
    