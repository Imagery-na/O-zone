'use strict';
//checkbox
const checkbox = document.querySelectorAll('.filter-check_checkbox');
for (let i=0; i< checkbox.length; i++){
    checkbox[i].addEventListener('change', function(){
        if (this.checked){
            this.nextElementSibling.classList.add('checked');
            console.log('галочка стоит');
        } 
        else {
            this.nextElementSibling.classList.remove('checked');
            console.log('галочку убрали');
        }
    });
}

//end checkbox

//корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');
btnCart.addEventListener('click', () =>{
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () =>{
    modalCart.style.display = 'none';
    document.body.style.overflow = ''; //не скроллится
});
//end

//работа с товаром
const cards = document.querySelectorAll('.goods .card'); //все товары с классом card, лежащие в контейнере goods
const cartWrapper = document.querySelector('.cart-wrapper'),
cartEmpty = document. getElementById('cart-empty'),
countGoods = document.querySelector('.counter');

cards.forEach((card) =>{
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
});

function showData(){
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
}