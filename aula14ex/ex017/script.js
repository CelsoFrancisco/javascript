function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = 'gatinho1.png'
    document.body.style.background = '#87CEFA'
} else if (hora >= 12 && hora <= 18) {
    // Boa tarde!
    img.src = 'gatinho2.png'
    document.body.style.background = '#BBB39E'
} else {
    // Boa noite!
    img.src = 'gatinho3.png'
    document.body.style.background = '#272824'
}
}