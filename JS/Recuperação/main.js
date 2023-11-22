function verificarEstacao() {
    var mesDigitado = document.getElementById("mesInput").value.toLowerCase();
    var estacao;

    if (mesDigitado === "janeiro" || mesDigitado === "fevereiro" || mesDigitado === "março") {
        estacao = "Verão";
    } else if (mesDigitado === "abril" || mesDigitado === "maio" || mesDigitado === "junho") {
        estacao = "Outono";
    } else if (mesDigitado === "julho" || mesDigitado === "agosto" || mesDigitado === "setembro") {
        estacao = "Inverno";
    } else if (mesDigitado === "outubro" || mesDigitado === "novembro" || mesDigitado === "dezembro") {
        estacao = "Primavera";
    } else {
        estacao = "Mês inválido";
    }

    document.getElementById("resultado").innerHTML = "Você escreveu o mês de " + mesDigitado + ", e a estação desse mês é " + estacao + ".";
}