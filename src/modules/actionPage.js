import filter from './filter';
export default
function actionPage(){
    const cards = document.querySelectorAll('.goods .card'), // все карточки товаров
    discountCheckbox = document.getElementById('discount-checkbox'),
    min = document.getElementById('min'),  //минимальная цена в фильтре
    max = document.getElementById('max'),
    search = document.querySelector('.search-wrapper_input'),  
    searchBtn = document.querySelector('.search-btn');

    discountCheckbox.addEventListener('click', filter); //фильтр акции
    min.addEventListener('change', filter); //фильтр по цене
    max.addEventListener('change', filter);

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
}
