console.log('index.js connected')

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