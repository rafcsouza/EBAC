const numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log(numeroSecreto);
const botao = document.getElementById("btn");
const resultado = document.getElementById("resultado");
const tentativas = document.getElementById("tentativas");
let vidas = 5;

botao.addEventListener("click", function () {
    const chute = Number(document.getElementById("chute").value);
    console.log("Chute registrado: " + chute);
    console.log("Tentativas restantes: " + vidas);

    if (chute < 1 || chute > 100) {
        resultado.innerHTML = "O número deve estar entre 1 e 100!!";
        return;
    }
    if (chute === numeroSecreto) {
        resultado.innerHTML = "Parabéns! Você acertou o número!";
        tentativas.innerHTML = "Vidas restantes: " + vidas;
        botao.disabled = true;
    } else if (chute < numeroSecreto) {
        vidas--;
        resultado.innerHTML = "O número secreto é maior. Tente novamente.";
        tentativas.innerHTML = "Vidas restantes: " + vidas;
    } else {
        vidas--;
        resultado.innerHTML = "O número secreto é menor. Tente novamente.";
        tentativas.innerHTML = "Vidas restantes: " + vidas;
    }
    if (vidas === 0) {
        botao.disabled = true;
        tentativas.innerHTML = `Você perdeu! O número secreto era ${numeroSecreto}.`;
    } else {
        tentativas.innerHTML = `Vidas restantes: ${vidas}`;
    }
});
