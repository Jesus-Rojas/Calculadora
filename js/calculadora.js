// Estas son variables globales
var num1="";
var num2="";
var num3="";
var uno=false;
var dos=false;
var tres=false;
var cuatro=false;
var cinco=false;
var signo="";
var signo2="";
// Esta funcion me deja en blanco la caja de texto
function EliminarTodoResultado() {
    document.getElementById("resultado").value="";
}
// Esta funcion recibe la pulsacion del boton "C" me deja en blanco la caja de texto y devuelve el valor inicial a las variables globales
function EliminarTodoFronted() {
    document.getElementById("resultado").value="";
    num1="";
    num2="";
    num3="";
    uno=false;
    dos=false;
    tres=false;
    cuatro=false;
    cinco=false;
    signo="";
    signo2="";
}
// En esta funcion resivo la pulsacion de los botones a excepcion de "C"
function Parametros(m) {
    //Ingreso de datos numericos y este a su vez permite que si el primer dato se ingresa con un "-" este se muestre en pantalla
    if ((m=="-"&&cuatro==false)||(!isNaN(m)&&uno==false)) {
        // Este condicional recibe como primer dato el "-", lo guarda en una variable y el con un boleano se anula asi mismo
        if (m=="-"&&num1!="-") {
            var a = document.getElementById("resultado").value;
            document.getElementById("resultado").value=a+m;
            num1=num1 + m;
            cuatro=true;
            // Este condicional recibe numeros, los guarda en una variable y este con un boleano anula el condicional del "-"
        }else{
            var a = document.getElementById("resultado").value;
            document.getElementById("resultado").value=a+m;
            num1=num1 + m;
            cuatro=true;
        }   
    }
    // ya ingresamos numeros en el condicional anterior la funcion de este es que si ingresamos un signo lo guarda en una variable; este con boleanos no vuelve a pasar sobre este mismo condicional y tambien anula el anterior condicional
    if (isNaN(m)&&dos==false) {
        EliminarTodoResultado();
        document.getElementById("resultado").value=num1;
        if (num1==""||num1=="-") {
            uno=false;
            dos=false;
        }else{
            uno=true;
            dos=true;
        }
        signo=m;
    } 
    // Este condicional recibe valores numericos; borra lo que tiene en pantalla, guarda el dato que recibio en una variable, lo muestra en pantalla y habilita el siguiente condicional
    if (!isNaN(m)&&dos==true&&tres==false) {
        EliminarTodoResultado();
        num2=num2 + m;
        document.getElementById("resultado").value=num2;
        cinco=true;
    }
    // Este condicional recibe signos; borra lo que tiene en pantalla, guarda el dato que recibio en una variable, llama una funcion lo muestra en pantalla y por ultimo hace intercambio de valores
    if (isNaN(m)&&dos==true&&cinco==true) {
        EliminarTodoResultado();
        signo2=m;
        var res=Operacion(num1,num2,signo);
        document.getElementById("resultado").value=res;
        num1=res;        
        num2="";
        signo=signo2;
    }   
}
// En esta funcion se encarga de recibir variables de la funcion parametros y este entra en un condicional de casos dependiendo de su caso el retorna una varibale
function Operacion(a,b,c) {
    // este es un condicional de casos y por consiguiente se le hace al signo que hallamos ingresado
    switch (c) {
            //este caso realiza la suma
        case "+":
           var resul=(a*1)+(b*1);
            break;
            //este caso realiza la resta
        case "-":
           var resul=(a*1)-(b*1);
            break;
            //este caso realiza la multiplicacion
        case "*":
            if (b=="") {
                var resul=(a*1)
            }else{
                var resul=(a*1)*(b*1);
            }
            break;
            //este caso realiza la division
        case "/":
            if (b=="") {
                var resul=(a*1)
            }else{
                var resul=(a*1)/(b*1);
            }
            break;
            //este caso es por si ninguno de los demas se cumple
        default:
            var resul=(a*1);
            break;
    }
    // Este me retorna la variable dependiendo de la operacion que se realizo
    return resul;
}