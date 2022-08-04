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
function move_to_slide(track, current,target ){
    track.style.transform = 'translateX(-'+target.style.left+')';
    current.classList.remove("slide-atual");
    current.classList.add('invisible');
    target.classList.remove("invisible");
    target.classList.add("slide-atual");
}
back.addEventListener('click', e=>{
   const current = track.querySelector(".slide-atual");
   const previous = current.previousElementSibling;
   move_to_slide(track, current, previous);

})
go.addEventListener('click', e=>{
    const current = track.querySelector(".slide-atual")
    const next = current.nextElementSibling;
    move_to_slide(track, current, next)
})
