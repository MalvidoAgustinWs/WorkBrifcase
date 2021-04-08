const btnPpal_1 = document.getElementById('btnPpal_1');
const btnPpal_2 = document.getElementById('btnPpal_2');
const btnPpal_3 = document.getElementById('btnPpal_3');
const btnPpal_4 = document.getElementById('btnPpal_4');


btnPpal_1.addEventListener('click', () => {
    if (btnPpal_1.nextElementSibling.classList == 'boxSec_1') {
        btnPpal_1.nextElementSibling.classList.add('visible')
    } else {
        btnPpal_1.nextElementSibling.classList.remove('visible')
    }
 });

 btnPpal_2.addEventListener('click', () => {
    if (btnPpal_2.nextElementSibling.classList == 'boxSec_2') {
        btnPpal_2.nextElementSibling.classList.add('visible')
    } else {
        btnPpal_2.nextElementSibling.classList.remove('visible')
    }
 });

 btnPpal_3.addEventListener('click', () => {
    if (btnPpal_3.nextElementSibling.classList == 'boxSec_3') {
        btnPpal_3.nextElementSibling.classList.add('visible')
    } else {
        btnPpal_3.nextElementSibling.classList.remove('visible')
    }
 });

 btnPpal_4.addEventListener('click', () => {
    if (btnPpal_4.nextElementSibling.classList == 'boxSec_4') {
        btnPpal_4.nextElementSibling.classList.add('visible')
    } else {
        btnPpal_4.nextElementSibling.classList.remove('visible')
    }
 });

//  btnPpal_1.addEventListener('click', () => {
//     if (btnPpal_1.nextElementSibling.classList == 'boxSec_1') {
//         btnPpal_1.nextElementSibling.classList.add('visible')
//     } else {
//         btnPpal_1.nextElementSibling.classList.remove('visible')
//     }
//  });