
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || peso <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingresa un peso válido.";
        return;
    }
    if (isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingresa una altura válida.";
        return;
    }

    const imc = peso / (altura * altura);

    document.getElementById('resultado').innerText = `
        Tu peso es ${peso.toFixed(2)} kg, tu altura es ${altura.toFixed(2)} m 
        y tu IMC es ${imc.toFixed(2)}.
    `;
}