
function suma (x, y) {
    return x + y;
}

function resta (x, y) {
    return x-y;
}

function multiplicacion(x, y){
    return x*y;
}

function division(x, y) {
    return x/y;
}

function potencia(x, y){
    Math.pow(x, y);
}

function cuadrado(x){
    return x*x;
}


//ejercicio 7d
function factorial(n){
    if(n === 0){
        return 1; 
    } else {
        return n*factorial(n-1);
    }
}

function realizar_operacion(nombre_op){
    let resultado;

    if (nombre_op === 'Factorial'){
        let n = parseInt(prompt("Ingrese el n para el factorial: "));
        resultado = factorial(n);
    }  else {
        let x = parseFloat(prompt("Ingrese el primer valor X: "));
        let y = parseFloat(prompt("Ingrese el segundo valor Y: "));

        switch (nombre_op) {
            case 'Sumar':
                resultado = suma(x, y);
                break;
            case 'Restar':
                resultado = resta(x, y);
                break;
            case 'Dividir':
                resultado = division(x, y);
                break;
            case 'Multiplicar':
                resultado = multiplicacion(x, y);
                break;
            default:
                resultado = 'Invalido';
                break;
        }
    }
    document.getElementById('mostrarResultado').value = resultado;
}