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
// ----------------------SlideShow----------------------------------------
const siguiente = () => {
    if (contSlide.children.length > 0){
        console.log('Siguiente')
        const primerElemento = contSlide.children[0];
        contSlide.style.transition = `1000ms ease-out all`;

        const tamañoSlide = contSlide.children[0].offsetWidth + 10;
        contSlide.style.transform = `translateX(-${tamañoSlide}px)`

        const transicion = () => {
        contSlide.style.transition = 'none';
        contSlide.style.transform = `translateX(0)`;
        contSlide.appendChild(primerElemento);
        contSlide.removeEventListener('transitionend', transicion)
        }
        
        contSlide.addEventListener('transitionend', transicion)
    }
}
const anterior = () => {
    if (contSlide.children.length > 0) {
        const idex= contSlide.children.length - 1;
        const ultimElemento = contSlide.children[idex];

        contSlide.insertBefore(ultimElemento, contSlide.firstChild);
        const tamañoSlide = contSlide.children[0].offsetWidth + 10;
        contSlide.style.transition = 'none';
        contSlide.style.transform = `translateX(-${tamañoSlide}px)`;

        setTimeout(()=>{
            contSlide.style.transform = `translateX(0)`;
            contSlide.style.transition = '1000ms ease-out all';
        },30)
    }
}

const contSlide = document.getElementById('contSlide')
const back = document.getElementById('back')
const next = document.getElementById('next')

back.addEventListener("click",anterior)
next.addEventListener("click",siguiente)


// ----------------------------------------------------------------