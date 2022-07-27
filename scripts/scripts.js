let inputPeso = document.querySelector('#peso');
let inputAltura = document.querySelector('#altura');
let btn = document.querySelector('#button');
let result = document.querySelector('#result');
let description = document.querySelector('.tooltip');
let container = document.querySelector('#container-result');

function calculoIMC() {
    altura = (inputAltura.value) / 100;
    peso = inputPeso.value;

    resultado = peso / (altura * altura).toFixed(2); 
    result.textContent = resultado;  

    if (resultado <= 18.5) {
        description.innerHTML = "Magreza";
    } else if (resultado <= 24.9) {
        description.innerHTML = "Normal";
    } else if (resultado <= 29.9) {
        description.innerHTML = "Sobrepeso";
    } else if (resultado >= 30) {
        description.innerHTML = "Obesidade";
    }  
    container.classList.remove('hide');
}   