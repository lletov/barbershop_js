console.log('index.js connected')

// render services from list
let services = [{
    id: 0,
    name: 'Мужская стрижка',
    price: 1800,
    time: 45,
    category: 'hair'
}, {
    id: 0,
    name: 'Стрижка FADE',
    price: 2200,
    time: 45,
    category: 'hair'
}, {
    name: 'Стрижка машинкой',
    price: 950,
    time: 25,
    category: 'hair'
}, {
    id: 0,
    name: 'Моделирование бороды',
    price: 1400,
    time: 35,
    category: 'beard'
}, {
    id: 0,
    name: 'Стрижка усов и бороды',
    price: 900,
    time: 30,
    category: 'beard'
}, {
    id: 0,
    name: 'Опасное бритье',
    price: 1700,
    time: 40,
    category: 'beard'
}, {
    id: 0,
    name: 'Мужская стрижка + стрижка усов и бороды',
    price: 2800,
    time: 85,
    category: 'complex'
}, {
    id: 0,
    name: 'Стрижка машинкой и опасное бритье',
    price: 2100,
    time: 65,
    category: 'complex'
}]

// render place ???

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