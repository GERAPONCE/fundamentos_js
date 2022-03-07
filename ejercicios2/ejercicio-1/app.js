// escribir un programa que indque cual número ingresado es mayor
let num1, num2, mayor

 num1 = parseInt(prompt("Escribe un número"));
 num2 = parseInt(prompt("Escribe un número"));

if(num1 >= num2){
    mayor = num1
}else{
    mayor = num2
}

alert("El número mayor es: " + mayor)

