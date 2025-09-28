let palavra =  "arara"
texto = texto.toUpperCase()
let palindromo = texto.split("").reverse().join("")

if(texto == palindromo){
    console.log("Esse palavra é um palindormo!")
} else {
    console.log("Esse palavra não é um palidromo!")
}