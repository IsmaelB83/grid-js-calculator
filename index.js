let resultado = document.querySelector('.resultado');
let botones = document.querySelectorAll('.button');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', buttonEventListener);
}

/* Gestionar un click en uno de los botones */
function buttonEventListener (event) {
    switch (event.srcElement.innerHTML) {
        case 'Del':
            resultado.value = "0";
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (resultado.value !== "0" && 
                !isNaN(parseInt(resultado.value[resultado.value.length-1])))  {
                resultado.value += event.srcElement.innerHTML;    
            }
            break;
        case '=':
            resultado.value = eval(resultado.value);
            break;
        default:
            if (resultado.value === '0') resultado.value = '';
            resultado.value += event.srcElement.innerHTML;
            break;
    }
}