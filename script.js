const track = document.querySelector(".carrosel-ul");
const slides = Array.from(track.children);
const back = document.querySelector(".back");
const go = document.querySelector(".go");
const dots_nav = document.querySelector(".carrosel-nav");
const dots = Array.from(dots_nav.children)

console.log(slides)

const slide_width = slides[0].getBoundingClientRect().width;

slides.forEach((slide, i) =>{
    slide.style.left = slide_width*i+'px';
})
back.addEventListener('click', e=>{
    const current = track.querySelector(".slide-atual")
    const previously = current.previousElementSibling;
    const move = previously.style.left;
    track.style.transform = 'translateX(-'+move+')';
    current.classList.remove("slide-atual")
    current.classList.add('invisible')
    previously.classList.remove("invisible")
    previously.classList.add("slide-atual");;
})
go.addEventListener('click', e=>{
    const current = track.querySelector(".slide-atual")
    const next = current.nextElementSibling;
    const move = next.style.left;
    track.style.transform = 'translateX(-'+move+')';
    current.classList.remove("slide-atual")
    current.classList.add('invisible')
    next.classList.remove("invisible")
    next.classList.add("slide-atual");;
})
