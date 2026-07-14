/* ===================================
STATIC GLOWING STARS
=================================== */

const starsContainer =
document.getElementById("stars-container");

if(starsContainer){

for(let i = 0; i < 120; i++){

const star =
document.createElement("span");

const size =
Math.random() * 3 + 1;

star.style.position = "absolute";

star.style.width =
`${size}px`;

star.style.height =
`${size}px`;

star.style.left =
`${Math.random()*100}%`;

star.style.top =
`${Math.random()*100}%`;

star.style.borderRadius =
"50%";

star.style.background =
"#ffffff";

star.style.opacity =
Math.random();

star.style.boxShadow =
"0 0 8px #fff, 0 0 18px #78e8ff";

star.style.animation =
`twinkle ${Math.random()*4+2}s infinite`;

starsContainer.appendChild(star);

}

}

/* ===================================
TWINKLE ANIMATION
=================================== */

const styleTag =
document.createElement("style");

styleTag.innerHTML = `

@keyframes twinkle{

0%{
opacity:.3;
transform:scale(1);
}

50%{
opacity:1;
transform:scale(1.5);
}

100%{
opacity:.3;
transform:scale(1);
}

}

`;

document.head.appendChild(styleTag);

/* ===================================
SCROLL REVEAL
=================================== */

const revealItems =
document.querySelectorAll(
'.section, .service-card, .projects-masonry img'
);

function revealOnScroll(){

revealItems.forEach(item=>{

const top =
item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

item.style.opacity = "1";

item.style.transform =
"translateY(0)";
}

});

}

revealItems.forEach(item=>{

item.style.opacity = "0";

item.style.transform =
"translateY(40px)";

item.style.transition =
"all .8s ease";
});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ===================================
NAVBAR EFFECT
=================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,.85)";

}

else{

navbar.style.background =
"rgba(255,255,255,.06)";

}

}
);

/* ===================================
PROJECT IMAGE HOVER
=================================== */

const projectImages =
document.querySelectorAll(
'.projects-masonry img'
);

projectImages.forEach(img=>{

img.addEventListener(
'mouseenter',
()=>{

img.style.transform =
'scale(1.03)';

});

img.addEventListener(
'mouseleave',
()=>{

img.style.transform =
'scale(1)';

});

});/* ===================================
LIGHTBOX GALLERY
=================================== */

const galleryImages =
document.querySelectorAll(
'.projects-masonry img'
);

const lightbox =
document.querySelector('.lightbox');

const lightboxImage =
document.querySelector('.lightbox-image');

const closeBtn =
document.querySelector('.close-lightbox');

const nextBtn =
document.querySelector('.next-btn');

const prevBtn =
document.querySelector('.prev-btn');

let currentIndex = 0;

/* ===================================
OPEN IMAGE
=================================== */

galleryImages.forEach((img,index)=>{

img.addEventListener('click',()=>{

currentIndex = index;

showImage();

lightbox.classList.add('active');

document.body.style.overflow='hidden';

});

});

/* ===================================
SHOW IMAGE
=================================== */

function showImage(){

lightboxImage.style.opacity='0';

lightboxImage.style.transform=
'perspective(1000px) rotateY(15deg)';

setTimeout(()=>{

lightboxImage.src =
galleryImages[currentIndex].src;

lightboxImage.style.opacity='1';

lightboxImage.style.transform=
'perspective(1000px) rotateY(0deg)';

},200);

}

/* ===================================
NEXT
=================================== */

function nextImage(){

currentIndex++;

if(currentIndex >= galleryImages.length){

currentIndex = 0;

}

showImage();

}

/* ===================================
PREVIOUS
=================================== */

function prevImage(){

currentIndex--;

if(currentIndex < 0){

currentIndex =
galleryImages.length - 1;

}

showImage();

}

nextBtn.addEventListener(
'click',
nextImage
);

prevBtn.addEventListener(
'click',
prevImage
);

/* ===================================
CLOSE
=================================== */

closeBtn.addEventListener(
'click',
closeGallery
);

function closeGallery(){

lightbox.classList.remove(
'active'
);

document.body.style.overflow='auto';

}

/* ===================================
CLICK OUTSIDE
=================================== */

lightbox.addEventListener(
'click',
(e)=>{

if(e.target === lightbox){

closeGallery();

}

}
);

/* ===================================
KEYBOARD
=================================== */

document.addEventListener(
'keydown',
(e)=>{

if(
!lightbox.classList.contains(
'active'
)
) return;

if(e.key === 'ArrowRight'){

nextImage();

}

if(e.key === 'ArrowLeft'){

prevImage();

}

if(e.key === 'Escape'){

closeGallery();

}

}
);

/* ===================================
MOBILE SWIPE
=================================== */

let startX = 0;
let endX = 0;

lightbox.addEventListener(
'touchstart',
(e)=>{

startX =
e.changedTouches[0].screenX;

}
);

lightbox.addEventListener(
'touchend',
(e)=>{

endX =
e.changedTouches[0].screenX;

handleSwipe();

}
);

function handleSwipe(){

const distance =
startX - endX;

if(distance > 50){

nextImage();

}

if(distance < -50){

prevImage();

}

}

/* ===================================
HERO IMAGE FLOAT
=================================== */

const heroImage =
document.querySelector(
'.hero-image img'
);

if(heroImage){

let floatValue = 0;

setInterval(()=>{

floatValue += 0.02;

heroImage.style.transform =
`translateY(${Math.sin(floatValue)*8}px)`;

},30);

}

/* ===================================
ABOUT IMAGE FLOAT
=================================== */

const aboutImage =
document.querySelector(
'.about-image img'
);

if(aboutImage){

let floatAbout = 0;

setInterval(()=>{

floatAbout += 0.02;

aboutImage.style.transform =
`translateY(${Math.sin(floatAbout)*6}px)`;

},30);

}