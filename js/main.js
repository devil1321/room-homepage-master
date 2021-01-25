const nav = document.querySelector('.nav')
const hamburger = document.querySelector('.nav__button')
const hamburger_span = document.querySelectorAll('span')
const navList = document.querySelector('.nav__list')
const navTitle = document.querySelector('.nav__title')

function toggleNav() {
    hamburger.classList.toggle('open');
    if (hamburger.classList.contains('open')) {
        hamburger_span.forEach(span => {
            span.style.borderColor = 'black'
            span.style.backgroundColor = 'black'
        })
        navList.classList.remove('nav-close')
        navList.classList.add('nav-open')
        navList.style.display = 'flex'
        navTitle.classList.remove('title-open')
        navTitle.style.display = 'none'
        nav.style.background = 'hsl(0, 0%, 100%)'
    } else {
        hamburger_span.forEach(span => {
            span.style.borderColor = 'hsl(0, 0%, 100%)'
            span.style.backgroundColor = 'hsl(0, 0%, 100%)'
        })
        navList.classList.remove('nav-open')
        navList.classList.add('nav-close')
        navList.style.display = 'none';
        navTitle.classList.add('title-open')
        navTitle.style.display = 'flex'
        nav.style.background = 'transparent'
    }
}
hamburger.addEventListener('click', toggleNav)


const heroImg = document.querySelector('.hero__image')
const heroDesktop = ['images/desktop-image-hero-1.jpg', 'images/desktop-image-hero-2.jpg', 'images/desktop-image-hero-3.jpg']
const heroMobile = ['images/mobile-image-hero-1.jpg', 'images/mobile-image-hero-2.jpg', 'images/mobile-image-hero-3.jpg']
const btnArrowLeft = document.querySelector('.hero__btn.right');
const btnArrowRight = document.querySelector('.hero__btn.left');
var index = 0;



var myCarousel = setInterval(() => {
    if (window.innerWidth < 1040) {
        heroImg.classList.add('carousel')
        setTimeout(() => {
            heroImg.classList.remove('carousel');
        }, 1000)
        heroImg.style.backgroundImage = `url("${heroMobile[index]}")`
        index++;
        console.log('working int')
        if (index > 2) {
            index = 0;
        }
    } else {
        heroImg.classList.add('carousel')
        setTimeout(() => {
            heroImg.classList.remove('carousel');
        }, 1000)
        heroImg.style.backgroundImage = `url("${heroDesktop[index]}")`
        index++;
        console.log('d-working')
        if (index > 2) {
            index = 0;
        }
    }
}, 3000)




function carouselNext(interval) {
    clearInterval(interval)
    if (window.innerWidth < 1040) {
        heroImg.classList.add('carousel')
        setTimeout(() => {
            heroImg.classList.remove('carousel');
        }, 1000)
        heroImg.style.backgroundImage = `url("${heroMobile[index]}")`
        index += 1;
        if (index > 2) {
            index = 0;
        }
        if (index < 0) {
            index = 2;
        }
    } else {
        heroImg.classList.add('carousel')
        setTimeout(() => {
            heroImg.classList.remove('carousel');
        }, 1000)
        heroImg.style.backgroundImage = `url("${heroDesktop[index]}")`
        index += 1;
        if (index > 2) {
            index = 0;
        }
        if (index < 0) {
            index = 2;
        }
    }
}
btnArrowRight.addEventListener('click', () => { carouselNext(myCarousel) });

function carouselPrev(interval) {
    clearInterval(interval)
    if (window.innerWidth < 1040) {
        heroImg.classList.add('carousel')
        setTimeout(() => {
            heroImg.classList.remove('carousel');
        }, 1000)
        console.log(heroImg)
        heroImg.style.backgroundImage = `url("${heroMobile[index]}")`
        index = index - 1;
        console.log(index)
        if (index > 2) {
            index = 0;
        }
        if (index < 0) {
            index = 2;
        }
    } else {
        heroImg.classList.add('carousel')
        setTimeout(() => {
            heroImg.classList.remove('carousel');
        }, 1000)
        heroImg.style.backgroundImage = `url("${heroDesktop[index]}")`
        index = index - 1;
        if (index > 2) {
            index = 0;
        }
        if (index <= 0) {
            index = 2;
        }
    }
}

btnArrowLeft.addEventListener('click', () => { carouselPrev(myCarousel) });