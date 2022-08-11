import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import pageScroll from './modules/pageScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';


//timer('30 July 2022');
//menu();
modal();
pageScroll();
tabs();
//slider();
calculator();
sendForm({
    formId: 'form1',
    someElement: [{
        type: 'block',
        id: 'total'
    }]
});
sendForm({
    formId: 'form2',
    someElement: [{
        type: 'block',
        id: 'total'
    }]
});
sendForm({
    formId: 'form3',
    someElement: [{
        type: 'block',
        id: 'total'
    }]
});