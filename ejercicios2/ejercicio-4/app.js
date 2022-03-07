// escribe un programa que localice cuantas veces se repite una letra
let user = prompt("escribe tu texto: ");
let caracter = "a";
let contador = 0;

for (let i = 0; i < user.length; i++){
    if (user.charAt(i) === caracter){
        contador++;
    }
}

alert(`Encontramos ${contador} letras '${caracter}' en tu texto`)

