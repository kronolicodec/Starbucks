const track = document.querySelector(".carrosel-ul");
const slides = Array.from(track.children);
const back = document.querySelector(".back");
const go = document.querySelector(".go");
const dots_nav = document.querySelector(".carrosel-nav");
const dots = Array.from(dots_nav.children)


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
function update_dots(current_dot, target_dot) {
    current_dot.classList.remove("slide-atual");
    target_dot.classList.add("slide-atual")
}
back.addEventListener('click', e=>{
   const current = track.querySelector(".slide-atual");
   const current_dot = dots_nav.querySelector('.slide-atual');
   if(slides.indexOf(current) === 0){
    update_dots(current_dot,dots[2])
    return move_to_slide(track, current, slides[2])
   }
   const target_dot = current_dot.previousElementSibling;
   const previous = current.previousElementSibling;
   move_to_slide(track, current, previous);
   update_dots(current_dot,target_dot)

})
go.addEventListener('click', e=>{
    const current_dot = dots_nav.querySelector('.slide-atual');
    
    const current = track.querySelector(".slide-atual")
    if(slides.indexOf(current) === 2){ 
     update_dots(current_dot,dots[0])
     return move_to_slide(track, current, slides[0])
    
    }
    const target_dot = current_dot.nextElementSibling;
    const next = current.nextElementSibling;
    move_to_slide(track, current, next)
    update_dots(current_dot,target_dot)
})

dots_nav.addEventListener('click', e =>{
    const target_dot = e.target.closest("button");

    if(!target_dot) return;
    const current_slide = track.querySelector(".slide-atual");
    const current_dot = dots_nav.querySelector('.slide-atual');
    const target_index = dots.findIndex(dot => dot === target_dot);
    const target_slide = slides[target_index];
    move_to_slide(track, current_slide, target_slide);
    update_dots(current_dot,target_dot)

})