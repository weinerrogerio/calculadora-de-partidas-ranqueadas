function classification(saldo) {
    if (saldo < 10) return 'Ferro';
    if (saldo >= 11 && saldo <= 20) return 'Bronze';
    if (saldo >= 21 && saldo <= 50) return 'Prata';
    if (saldo >= 51 && saldo <= 80) return 'Ouro';
    if (saldo >= 81 && saldo <= 90) return 'Diamante';
    if (saldo >= 91 && saldo <= 100) return 'Lendário';
    if (saldo >= 101) return 'Imortal';
}


function playerRanking(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}


function main(vitorias, derrotas) {
    let saldoVitorias = playerRanking(vitorias, derrotas);
    const nivel = classification(saldoVitorias)
    // Não existe saldo de vitórias negativo, então: se saldo < 0, saldo = 0
    if (saldoVitorias < 0) saldoVitorias = 0
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

main(500, 10)
