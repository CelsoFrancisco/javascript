   var nota = 8;

if (nota >= 7) {
    console.log(`Você está aprovado com a nota ${nota}, parabéns.`);
} else {
    if (nota >= 5 && nota < 7) {
        console.log(`Sua nota foi de ${nota} pontos, você está de recuperação, estude.`);
    } else {
        console.log(`Sua nota foi de ${nota} pontos, você está reprovado(a).`);
    }
}
    