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
        return alert("Erro: Valor inserido menor que o mínimo permitido.");
    }
}

}