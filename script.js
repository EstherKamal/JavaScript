const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 12px 35px rgba(0,91,234,.4)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 5px 20px rgba(0,0,0,.12)";

});

});
