let num = 157;
let mensaje = "";

if (num % 2 == 0)
{
   mensaje = "es par";
}
else 
{
    mensaje = "es impar";
}

console.log(mensaje);

//ternario

mensaje = (num % 2 == 0)? "es par": "es impar";
console.log(mensaje);

