console.log('index.js connected')

// modal burger button menu
let burgerButton = document.querySelector('.burger-menu')
let burgerMenu = document.querySelector('.burger-menu-modal')
let burgerButtonImg = burgerButton.querySelector('img')
let burgerMenuShow = false

burgerButton.onclick = function(){(
    burgerMenu.classList.toggle('visible'), 
    changeBurgerBtnImg()
)}

function changeBurgerBtnImg(){
    if (burgerMenuShow) {
        burgerButtonImg.setAttribute('src', './img/icons/burger-menu.svg')
    } else {
        burgerButtonImg.setAttribute('src', './img/icons/close.svg')
    }
    burgerMenuShow = !burgerMenuShow
}

let burgerMenuLinks = document.querySelectorAll('.burger-menu-modal a')
burgerMenuLinks.forEach((l) => {l.onclick = function(){
    burgerMenu.classList.toggle('visible'), 
    changeBurgerBtnImg()
}})

// animate mission counter
// let mission = document.querySelector('.mission');
// let missionTop = mission.offsetTop // 890
// let missionHeight = 500;

// function animateMissionCounter(){
//     let interval = 1000;
//     let missionStartValue = 1300;
//     let missionEndValue = parseInt(document.querySelector('.mission-counter').innerHTML)
//     let duration = Math.floor(interval / (missionEndValue - missionStartValue))
//     let missionCounter = setInterval(function(){
//         missionStartValue += 1
//         document.querySelector('.mission-counter').innerHTML = `${missionStartValue}`
//         if (missionStartValue == missionEndValue) {
//             clearInterval(missionCounter)
//         }
    
//     }, duration)
// }

// window.onscroll = () => {
//     let top_pos = window.scrollY
//     if (top_pos = missionTop && top_pos <= missionTop + missionHeight) {
//         console.log('here')
//         animateMissionCounter()
//     }
// }

// select barber
const barberSelector = document.getElementById('select-barber')
barberSelector.value = ''
function selectThisBarber(barber) {
    barberSelector.value = barber
    document.getElementById('visit').scrollIntoView()
}

// render services from list
let services = [{
    id: 0,
    name: 'Мужская стрижка',
    price: 1800,
    time: 45,
    category: 'hair'
}, {
    id: 1,
    name: 'Стрижка FADE',
    price: 2200,
    time: 45,
    category: 'hair'
}, {
    id: 2,
    name: 'Стрижка машинкой',
    price: 950,
    time: 25,
    category: 'hair'
}, {
    id: 3,
    name: 'Моделирование бороды',
    price: 1400,
    time: 35,
    category: 'beard'
}, {
    id: 4,
    name: 'Стрижка усов и бороды',
    price: 900,
    time: 30,
    category: 'beard'
}, {
    id: 5,
    name: 'Опасное бритье',
    price: 1700,
    time: 40,
    category: 'beard'
}, {
    id: 6,
    name: 'Мужская стрижка + стрижка усов и бороды',
    price: 2800,
    time: 85,
    category: 'complex'
}, {
    id: 7,
    name: 'Стрижка машинкой + опасное бритье',
    price: 2100,
    time: 65,
    category: 'complex'
}]

let hairServices = document.getElementById('hair')
let beardServices = document.getElementById('beard')
let complexServices = document.getElementById('complex')

function tabStr(i) {
    return (
        `
    <div class="tab-str">
        <h1>${services[i].name}</h1>
        <h2>${services[i].time} мин.</h2>
        <p>${services[i].price} ₽</p>
    </div>
    `
    )
} 
    
for (let i=0; i < services.length; i++) {
    if (services[i].category === 'hair') {
        hairServices.innerHTML += tabStr(i)
    }
    else if (services[i].category === 'beard') {
        beardServices.innerHTML += tabStr(i)
    }
    else if (services[i].category === 'complex') {
        complexServices.innerHTML += tabStr(i)
    }
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

// render selects 

let selectServices = document.getElementById('select-service')
selectServices.onchange = () => {changeValue(selectServices.value)}
for (let i=0; i < services.length; i++) {
    selectServices.innerHTML +=
    `<option value="${services[i].id}">${services[i].name}</option>`
}

function animateCounter(value){
    let interval = 1000;
    let startValue =  services[value].price - 100;
    let endValue = services[value].price
    let duration = Math.floor(interval / (endValue - startValue))
    let counter = setInterval(function(){
        startValue += 1
        document.getElementById('total').innerHTML = `${startValue}`
        if (startValue == endValue) {
            clearInterval(counter)
        }
    
    }, duration)
}

let total = document.getElementById('total')
total.innerText = services[0].price
function changeValue(value){
    console.log('changed on ', value)
    animateCounter(value)
}

// get input name and length
let nameInput = document.getElementById('name-input')
let nameInputCounter = document.getElementById('name-counter')

function nameInputChange(name) {
    nameInputCounter.innerText = `${name.value.length}/15`
}
nameInput.oninput = () => {nameInputChange(nameInput)}






// today
const d = new Date();
let today = d.getDay();
let time = d.toLocaleTimeString('en-US', { hour12: false, 
    hour: "numeric", 
    minute: "numeric"});
if (today == 1) {
    document.getElementById('mon').style.backgroundColor = '#FAD9FB'
} else if (today == 2) {
    document.getElementById('tue').style.backgroundColor = '#FAD9FB'
} else if (today == 3) {
    document.getElementById('wed').style.backgroundColor = '#FAD9FB'
} else if (today == 4) {
    document.getElementById('thu').style.backgroundColor = '#FAD9FB'
} else if (today == 5) {
    document.getElementById('fri').style.backgroundColor = '#FAD9FB'
} else if (today == 6) {
    document.getElementById('sat').style.backgroundColor = '#FAD9FB'
} else if (today == 0) {
    document.getElementById('sun').style.backgroundColor = '#FAD9FB'
}

// time
let times = document.querySelectorAll('.online-marker')
times.forEach((t) => {
    if (time > '10:00' && time < '20:00'){
        t.querySelector('p').innerText = 'Сейчас работаем'
        t.querySelector('.marker').style.backgroundColor = '#05FF00'
    }
    else {
        t.querySelector('p').innerText = 'Сейчас не работаем'
        t.querySelector('.marker').style.backgroundColor = '#ff1100'
    }
})

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
const modalContent = document.querySelector('.modal-content')
const openModalBtn = document.getElementById('create-visit')


console.log(document.getElementById('select-barber').value)

function openModal(){
    if (
    document.getElementById('select-barber').options[document.getElementById('select-barber').selectedIndex].text != null
    && selectServices.options[selectServices.selectedIndex].text != null
    && document.getElementById('date-input').value != ''
    && document.getElementById('name-input').value != '' 
    && document.getElementById('phone-input').value != ''
    && document.getElementById('phone-input').value.length == 2+1+3+1+3+3+3
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
    <button class="modal-close"><img src="./img/icons/close.svg" alt="close"></button>
    <div class="confirm-modal-line"></div>
    <h2>${document.getElementById('name-input').value}, <br> Проверьте данные:</h2>
    <h3>Мастер:</h3>
    <p>${document.getElementById('select-barber').options[document.getElementById('select-barber').selectedIndex].text}</p>
    <h3>Дата:</h3>
    <p>${document.getElementById('date-input').value}</p>
    <h3>Услуги:</h3>
    <p>${selectServices.options[selectServices.selectedIndex].text}</p>
    <h3>Итоговая сумма:</h3>
    <p>${document.getElementById('total').textContent} ₽</p>
    <h3>Ваш номер телефона:</h3>
    <p>${document.getElementById('phone-input').value}</p>
    <button id='confirm-visit' onclick = 'openFinalModal()'>ПОДТВЕРДИТЬ И ЗАПИСАТЬСЯ</button>
    </div>`
    const closeModalBtn = document.querySelector('.modal-close')
    closeModalBtn.onclick = closeModal
}

function openFinalModal() {
    closeModal()
    let finalModalContent = document.querySelector('.modal-final-content')
    finalModalContent.innerHTML = 
    `
    <div class="final-modal-text">
    <div class="final-modal-line"></div>
    <img src="./img/icons/check-solid.svg">
    <div class="final-modal-text">
        <p>Успешно!,<br>До встречи!</p>    
    </div>
    </div>
    `
    document.querySelector('.modal-final').classList.toggle('active')
    setTimeout(() => {
        document.querySelector('.modal-final.active').className = 'modal-final' 
    }, 5000)
}