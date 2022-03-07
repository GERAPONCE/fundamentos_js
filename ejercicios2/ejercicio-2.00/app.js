 // cual es el número mayor
 
 let num1, num2, num3, mayor;
 num1 = parseInt(prompt("Escribe un número"));
 num2 = parseInt(prompt("Escribe un número"));
 num3 = parseInt(prompt("Escribe un número"));

if(num1 >= num2 && num1 >= num3){
    mayor = num1;
}else if(num2 >= num1 && num2 >= num3){
    mayor = num2;
}else{
    mayor = num3;
}
alert("El número mayor es : " + mayor)


