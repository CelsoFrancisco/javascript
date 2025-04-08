var temperatura = 26
if (temperatura < 0) {
    console.log("Temperatura abaixo de zero");
} else {
    if (temperatura >= 0 && temperatura <= 15) {
        console.log("Está frio");
    } else {
        if (temperatura >= 16 && temperatura <= 25) {
            console.log("Está agradável");
        } else {
            console.log("Está quente");
        }
    }
}
