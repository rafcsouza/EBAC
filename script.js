class Parquimetro {
    constructor() {
        this.tabelaPrecos = [
            {valor: 1, minutos: 30},
            {valor: 1.75, minutos: 60},
            {valor: 3, minutos: 120}
        ];
        this.valorMinimo = 1;
        this.valorMaximo = 3;
    }

    calcularTempo(valorInserido) {
        if (valorInserido < this.valorMinimo) {
            return "Erro: Valor inserido menor que o mínimo permitido.";
        }

        if (valorInserido > this.valorMaximo) {
            const troco = (valorInserido - this.valorMaximo).toFixed(2);
            return { tempo: 120, troco }; // Tempo máximo é 120 minutos
        }

        let tempoTotal = 0;
        let valorRestante = valorInserido;

        for (let i = this.tabelaPrecos.length - 1; i >= 0; i--) {
            const { valor, minutos } = this.tabelaPrecos[i];
            while (valorRestante >= valor) {
                tempoTotal += minutos;
                valorRestante -= valor;
            }
        }

        return { tempo: tempoTotal, troco: valorRestante.toFixed(2) };
    }
}

document.querySelector("button").addEventListener("click", () => {
    const valorInserido = parseFloat(document.getElementById("pagamento").value);
    if (isNaN(valorInserido)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    const parquimetro = new Parquimetro();
    const resultado = parquimetro.calcularTempo(valorInserido);

    if (typeof resultado === "string") {
        alert(resultado);
    } else {
        document.getElementById("troco").textContent = `Troco: R$ ${resultado.troco}`;
        document.getElementById("tempo").textContent = `Tempo decorrido: ${resultado.tempo} minutos`;
    }
});