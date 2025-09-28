let texto =  "arara"
texto = texto.toUpperCase()
let palindromo = texto.split("").reverse().join("")

if(texto == palindromo){
    console.log("Esse palavra é um palindromo!")
} else {
    console.log("Esse palavra não é um palindromo!")
}