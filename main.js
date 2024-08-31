const form = document.getElementById ('form');

function validaValor(condition){
    const valorA = document.getElementById("valorA").value;
    const valorB = document.getElementById("valorB").value;

    if (valorB > valorA) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener ('submit', function (event){
    event.preventDefault();

    const validou = validaValor();

    const inputA = document.getElementsByTagName('input')[0];
    const inputB = document.getElementsByTagName('input')[1];
    inputA.value =' ';
    inputB.value =' ';

    if (validou) {
        const successmessage = document.getElementsByTagName('p')[0];
        successmessage.innerHTML = 'O Valor de B é maior que o Valor de A';
        successmessage.style.display = 'block';
        successmessage.classList.add('success')


    } else {
        const errormessage = document.getElementsByTagName('p')[0];
        errormessage.innerHTML = 'O Valor de B não é maior que o Valor de A';
        errormessage.style.display = 'block';
        errormessage.classList.add('error')
    }
})


const input01 = document.getElementById('valorA');
const input02 = document.getElementById('valorB');
const menssage01 = document.getElementsByTagName('p')[0];
const menssage02 = document.getElementsByTagName('p')[0];

input01.addEventListener('click', function(event){
    menssage01.style.display = 'none';
})

input02.addEventListener('click', function(event){
    menssage02.style.display = 'none';
})











/*
3) Crie uma validação no JavaScript, na qual o formulário será válido caso o número B seja maior que o número A.

4) Exiba uma mensagem positiva para o usuário quando o formulário for válido e uma mensagem negativa quando for inválido.



Peguei o cod do coleguinha e vou fazer um raciocínio e análise nele. https://github.com/jvalmeidadev/exercicio_html_js./blob/exercicio_html_js/main.js


Neste caso o cod é dividido em duas partes. Parte matemática e ativação. 

Na parte matemárica 



*/