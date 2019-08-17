'use strict';

function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
                console.log('галочка стоит');
            } else {
                this.nextElementSibling.classList.remove('checked');
                console.log('галочку убрали');
            }
        });
    }
}

function toggleCart() {
    const btnCart = document.getElementById('cart');
    const modalCart = document.querySelector('.cart');
    const closeBtn = document.querySelector('.cart-close');
    btnCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        modalCart.style.display = 'none';
        document.body.style.overflow = ''; //не скроллится
    });
}

function workCart() {
    const cards = document.querySelectorAll('.goods .card'); //все товары с классом card, лежащие в контейнере goods
    const cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');

    cards.forEach((card) => {
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();
            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });

    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'), // все цены
            cardTotal = document.querySelector('.cart-total span'); // строка с общей суммой
        let sum = 0;
        countGoods.textContent = cardsCart.length;
        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        cardTotal.textContent = sum;
        if (cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }
}

// фильтры, поиск
function actionPage(){
    const cards = document.querySelectorAll('.goods .card'), // все карточки товаров
    discountCheckbox = document.getElementById('discount-checkbox'),
    min = document.getElementById('min'),  //минимальная цена в фильтре
    max = document.getElementById('max'),
    search = document.querySelector('.search-wrapper_input'),  
    searchBtn = document.querySelector('.search-btn');
    console.log(min.value);

    discountCheckbox.addEventListener('click', filter); //фильтр акции
    min.addEventListener('change', filter); //фильтр по цене
    max.addEventListener('change', filter);
    console.log(min.value);

   //поиск товаров
    searchBtn.addEventListener('click', ()=>{    // если бы была форма и инпут, лучше было бы событие submit
        const searchText = new RegExp(search.value.trim(), 'i'); //регулярное выражение,trim убирает пробелы,i - регистр
        cards.forEach((card)=> {
            const title = card.querySelector('.card-title');
            if(!searchText.test(title.textContent)){
                card.parentNode.style.display = 'none';
            }
            else{
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    });  // добавить для события нажатия ентер
    
   function filter(){
    cards.forEach((card) => {
        const cardPrice = card.querySelector('.card-price');
        const price = parseFloat(cardPrice.textContent),
        discount = card.querySelector('.card-sale');
        if((min.value && price < min.value) || (max.value && price > max.value)){
            card.parentNode.style.display = 'none';
        }
        else if (discountCheckbox.checked && !discount){
            card.parentNode.style.display = 'none';
        }
        else{
            card.parentNode.style.display = '';
        }
    });   
  }
}
toggleCheckbox(); 
toggleCart();
workCart();
actionPage();