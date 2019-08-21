'use strict';
import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import workCart from './modules/workCart';
import actionPage from './modules/actionPage';

getData().then((data) =>{
    renderCards(data);
    renderCatalog();
    toggleCheckbox(); 
    toggleCart();
    workCart();
    actionPage();
});
