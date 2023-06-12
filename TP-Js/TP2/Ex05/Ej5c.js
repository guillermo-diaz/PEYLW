var dolarP = 244.30;
var realesP = 50.06;
var eurosP = 262.71;

function realizarConversion() {
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var tipo = document.getElementById("conversion1").value;
    var conversion = document.getElementById("conversion2").value;
    var resultado;

    if (tipo === "Pesos"){
        switch (conversion) {
            case "Dólares":
                resultado = pesosTo(cantidad, dolarP);
                break;
            case "Euros":
                resultado = pesosTo(cantidad, eurosP);
                break;
            case "Reales":
                resultado = pesosTo(cantidad, realesP);
                break;
            default:
                resultado = cantidad;
                break;
        }
    } else if (tipo !== "Pesos" && conversion === "Pesos"){
        switch (tipo) {
            case "Dólares":
                resultado = dolaresToPesos(cantidad);
                break;
            case "Euros":
                resultado = eurosToPesos(cantidad);
                break;
            case "Reales":
                resultado = realesToPesos(cantidad);
                break;
            default:
                resultado = cantidad;
                break;
        }
    } else {
        resultado = 'Conversion no disponible';
    }

    document.getElementById("resultado").value = resultado;
  }

function pesosTo(pesos, valorMoneda){
    return pesos / valorMoneda;
}

function dolaresToPesos(dolares){
    return dolares*dolarP;
}


function realesToPesos(reales){
    return reales*realesP;
}


function eurosToPesos(euros){
    return euros*eurosP;
}



