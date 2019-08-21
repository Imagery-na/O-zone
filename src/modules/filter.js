export default
function filter(){
    const cards = document.querySelectorAll('.goods .card'), // все карточки товаров
    discountCheckbox = document.getElementById('discount-checkbox'),
    min = document.getElementById('min'),  //минимальная цена в фильтре
    max = document.getElementById('max'),
    activeLi = document.querySelector('.catalog-list li.active');

    cards.forEach((card) => {
        const cardPrice = card.querySelector('.card-price');
        const price = parseFloat(cardPrice.textContent),
        discount = card.querySelector('.card-sale');
        card.parentNode.style.display = '';
        if((min.value && price < min.value) || (max.value && price > max.value)){
            card.parentNode.style.display = 'none';
        }
        else if (discountCheckbox.checked && !discount){
            card.parentNode.style.display = 'none';
        }
        else if(activeLi && card.dataset.category !== activeLi.textContent){
            card.parentNode.style.display = 'none';
        }
    });   
  }