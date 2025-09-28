let numAleatorio = Math.floor(Math.random() * 100) + 1
let chute = 0
let contador = 0

while(chute != numAleatorio){
    chute = Number(prompt("Descubra o numero de 1 a 100: "))
    contador++
    if (chute > numAleatorio){
        alert("Muito alto!")
    } else if (chute < numAleatorio){
        alert("Muito baixo!")
    } else {
        alert(`Voce acertou o numero, era ${numAleatorio} em ${contador} tentativas`)
    }
}