/*==========================================
        ESTHER KAMAL PORTFOLIO
==========================================*/

// Smooth Navbar Background

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,8,22,.75)";
        nav.style.backdropFilter = "blur(25px)";
        nav.style.boxShadow = "0 15px 40px rgba(0,0,0,.4)";

    } else {

        nav.style.background = "rgba(255,255,255,.08)";
        nav.style.boxShadow = "none";

    }

});


// ========================================
// Scroll Reveal
// ========================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll("section,.card,.project").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// ========================================
// Floating Mouse Glow
// ========================================

const glow = document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});


// ========================================
// Book Tilt
// ========================================

const book=document.querySelector(".book");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/30;

const y=(window.innerHeight/2-e.clientY)/30;

book.style.transform=`
rotateY(${-x}deg)
rotateX(${y}deg)
translateY(-10px)
`;

});

document.addEventListener("mouseleave",()=>{

book.style.transform="rotateY(0deg) rotateX(0deg)";

});


// ========================================
// Typing Effect
// ========================================

const subtitle=document.querySelector(".hero h2");

const text=subtitle.innerText;

subtitle.innerText="";

let i=0;

function typing(){

if(i<text.length){

subtitle.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,45);

}

}

typing();


// ========================================
// Counter Animation
// ========================================

const numbers=document.querySelectorAll(".number");

numbers.forEach(counter=>{

const target=+counter.dataset.target;

let current=0;

const update=()=>{

current+=target/100;

if(current<target){

counter.innerText=Math.floor(current);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

});


// ========================================
// Progress Bar
// ========================================

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});


// ========================================
// Card Tilt
// ========================================

document.querySelectorAll(".card,.project").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/12);

const rotateY=((rect.width/2-x)/12);

card.style.transform=`
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-12px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});


// ========================================
// Floating Particles
// ========================================

for(let i=0;i<40;i++){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=(5+Math.random()*10)+"s";

particle.style.animationDelay=Math.random()*5+"s";

particle.style.width=particle.style.height=(2+Math.random()*6)+"px";

document.body.appendChild(particle);

}


// ========================================
// Button Ripple
// ========================================

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// ========================================
// Parallax Hero
// ========================================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=window.scrollY*.4+"px";

});


// ========================================
// Console Easter Egg
// ========================================

console.log("%c👋 Welcome!","font-size:35px;color:#4F8CFF;font-weight:bold;");

console.log("%cDesigned by Esther Kamal","font-size:18px;color:#8B5CF6;");
