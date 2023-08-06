let displayValue = "";

function appendToDisplay(value) { //função appendToDisplay
    displayValue += value; //displayValue recebe ele memso + o value, isso é o que significa +=
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Erro";
    }
    updateDisplay();
}

//MODAL
function textomodal(){
   document.getElementById('custom-modal').style.display = 'block';
}

document.querySelector('.close-btn').addEventListener('click', function() {
    // Oculta o modal quando o botão de fechar no modal é clicado
    document.getElementById('custom-modal').style.display = 'none';
  });