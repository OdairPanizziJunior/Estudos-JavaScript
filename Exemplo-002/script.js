function calcularSoma(){
    var numero1 = Number(document.getElementById('numero1').value);
    var numero2 = Number(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;

    document.getElementById('resultado').innerText = 'A soma é ' + resultado;
}


// var n1 = Number.parseFloat(window.prompt('Digite um número:'));
// var n2 = Number.parseFloat(window.prompt('Digite outro número:'));
// var s = n1 + n2;
// window.alert(`Você digitou os números ${n1} e ${n2}`); //template string (place holder)
// window.alert('A soma é ' + s.toString());