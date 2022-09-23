/*
const cards = document.querySelectorAll(".common");
cards.forEach(card => {
    card.addEventListener("click", ()=>{
        removeActiveClass();
        card.classList.add("active");
    });
});

function removeActiveClass(){
    cards.forEach(card =>{
        card.classList.remove("active");
    });
}

*/

const card = document.querySelectorAll(".naya");
for(let i=0;i<card.length;i++){
    card[i].addEventListener("click", function(){
        removeActiveClass1();
        this.classList.add("active");
    });
}

function removeActiveClass1(){
    for(let i=0;i<card.length;i++){
        card[i].classList.remove("active");
    }
}

const cards = document.querySelectorAll(".all");
for(let i=0;i<cards.length;i++){
    cards[i].addEventListener("click", function(){
        removeActiveClass2();
        this.classList.add("active");
    });
}

function removeActiveClass2(){
    for(let i=0;i<cards.length;i++){
        cards[i].classList.remove("active");
    }
}