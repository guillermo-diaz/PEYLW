

function validar(){
    let v1, v2, v3, v4, v5;
    v1 = verificarNombre();
    v2 = verificarApellido();
    v3 = verificarFecha();
    v4 = verificarObra();
    v5 = verificarCorreo();

    if (v1 && v2 && v3 && v4 && v5){
        alert("Datos Enviados Correctamente");
    }
}

function verificarCorreo(){
        let elem, correo, expReg, flag;
        elem = document.getElementById("email")
        correo = elem.value;
        // Expresión regular para validar el formato del correo electrónico
        expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        flag = expReg.test(correo);
        
        flag ? verificado(elem) : reportarError(elem);
        
        return flag;
      
}

function verificarObra(){
    let elem = document.getElementById("obras_sociales");
    let flag = elem.value !== "";

    flag ? verificado(elem) : reportarError(elem);
    return flag;
}

//solo verifica si es positivo, es un numero  y si no excede el rango de los dias [1, 31]
function verificarDia(day) {
    let flag = !isNaN(day) && day > 0 && day <= 31;
    
    if (!flag){
        reportarError(document.getElementById("dia"));
    }
    return flag;
}

//solo verifica si es positivo, es un numero  y si no excede el rango de los meses [1, 12]
function verificarMes(mes){
    let flag = !isNaN(mes) && mes > 0 && mes <= 12;

    if (!flag){
        reportarError(document.getElementById("mes"));
    }
    return flag;
}

//solo verifica si es positivo, es un numero  y si no excede el año actual
function verificarAnio(anio) {
    let flag = !isNaN(anio) && anio > 0 && anio <= ((new Date).getFullYear());
    if (!flag){
        reportarError(document.getElementById("anio"));
    }
    return flag;
}

function verificarFecha(){
    
    let dia, mes, anio, verificacion, verifDia, verifMes, verifAnio;
    verificacion = false;
    dia = parseInt(document.getElementById("dia").value);
    mes = parseInt(document.getElementById("mes").value);
    anio = parseInt(document.getElementById("anio").value);
    verifDia = verificarDia(dia);
    verifMes = verificarMes(mes);
    verifAnio = verificarAnio(anio);

    if (verifDia && verifMes && verifAnio){
        let arrayDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (esAnioBisiesto(anio)) {
            arrayDias[1] = 29; //si es bisiesto cambio la cant de dias de febrero
        } 

        if (dia <= arrayDias[mes-1]){
            verificacion = true; 
     
            let fechaActual = new Date();
            
            
            if (fechaActual.getMonth() + 1 < mes){
                verificacion = false; 
                reportarError(document.getElementById("mes"));
            }

            if (mes === (fechaActual.getMonth()+ 1) && fechaActual.getDate() < dia){
                verificacion = false;
                reportarError(document.getElementById("dia"));
            }

            if (verificacion){
                verificado(document.getElementById("dia"));
                verificado(document.getElementById("mes"));
                verificado(document.getElementById("anio"));
            }
        } else {
            reportarError(document.getElementById("dia"));
            verificado(document.getElementById("mes"));
            verificado(document.getElementById("anio"));
        }
    } 
    
 
    return verificacion;
}

function verificarNombre(){
    let nombreInput = document.getElementById("nombre");
    let nombre = nombreInput.value;

    //nombres con menos de 2 letras o que contengan numeros no son validos
    if (nombre.length == 0 || tieneNumero(nombre)){
        reportarError(nombreInput);
        return false;
    } else {
        verificado(nombreInput);
        return true;
    }

}

function verificarApellido(){
    let apellidoInput = document.getElementById("apellido");
    let apellido = apellidoInput.value;

    //apellidos con menos de 2 letras o que contengan numeros no son validos
    if (apellido.length <= 1 || tieneNumero(apellido)){
        reportarError(apellidoInput);
        return false;
    } else {
        verificado(apellidoInput);
        return true;
    }
}

//verifica si el string del parametro tiene un numero
function tieneNumero(texto) {
    for (let i = 0; i < texto.length; i++) {
      if (!isNaN(parseInt(texto[i]))) {
        return true;
      }
    }
    return false;
  }

  //sirve para reportar que el input es incorrecto
  function reportarError(elem){
    elem.style.borderColor = "red";
  }

  //sirve para reportar que el input es correcto
  function verificado(elem){
    elem.style.borderColor = "green";
  }

  function esAnioBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  }
  

