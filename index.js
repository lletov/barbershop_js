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
for (let i=0; i < services.length; i++) {
    selectServices.innerHTML +=
    `<option value="${services[i].id}">${services[i].name}</option>`
}

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
} else if (today == 7) {
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

// animate mission counter
let mission = document.querySelector('.mission');
let missionTop = mission.offsetTop // 890
let missionHeight = 500;

function animateMissionCounter(){
    let interval = 1000;
    let missionStartValue = 1300;
    let missionEndValue = parseInt(document.querySelector('.mission-counter').innerHTML)
    let duration = Math.floor(interval / (missionEndValue - missionStartValue))
    let missionCounter = setInterval(function(){
        missionStartValue += 1
        document.querySelector('.mission-counter').innerHTML = `${missionStartValue}`
        if (missionStartValue == missionEndValue) {
            clearInterval(missionCounter)
        }
    
    }, duration)
}

window.onscroll = () => {
    let top_pos = window.scrollY
    if (top_pos = missionTop && top_pos <= missionTop + missionHeight) {
        console.log('here')
        animateMissionCounter()
    }
}
