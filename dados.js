function inicio() {
    document.getElementById("dado").style.opacity = 0; 
    document.getElementById("saldo").innerHTML = 0;
}

const dados = ["imgCaras/1.png","imgCaras/2.png","imgCaras/3.png","imgCaras/4.png","imgCaras/5.png","imgCaras/6.png"];

function apuesta() {

    let valorDado = document.getElementById("valor").value;
    let cantApostar = document.getElementById("apostar").value;
    let saldoUltimo = parseInt(document.getElementById("saldo").innerHTML);

    if (valorDado == 0){ 
        alert("ERROR: Ingrese Número correcto de cara de Dado");
    }

    if (valorDado > 0 && valorDado < 7){
        if (cantApostar > 0){
            if (saldoUltimo > 0){
                if (saldoUltimo >= cantApostar){

                    // Funcion Apostar !!
                    document.getElementById("dado").style.opacity = 70;

                    for (let i = 0; i < dados.length; i++) {
                        let result = 0;
                        result = Math.floor(Math.random()*6);   
                        document.getElementById("cara").src = dados[result];
                        result = result+1;
                
                document.getElementById("resultado").innerHTML = "Tu Elección fue: "+document.getElementById("valor").value;
                
                    if (result == document.getElementById("valor").value){
                        document.getElementById("mensaje").innerHTML = "¡¡ EUREKA, GANASTE !!";
                        document.getElementById("mensaje").style.backgroundColor = "green";
                        document.getElementById("mensaje").style.color = "white";
                        var perdiste = "false";
                
                        }else {
                        document.getElementById("mensaje").innerHTML="¡PERDISTE sigue intentando, la proxima sale !"; 
                        document.getElementById("mensaje").style.backgroundColor = "red";
                        var perdiste = "true";
                        }
                    }

                    if(perdiste == "true"){

                        let x = document.getElementById("saldo").innerHTML;
                        let y = document.getElementById("apostar").value;

                        // Si se pierde resto el valor apostado al saldo
                        let saldoNew = x - y;

                       document.getElementById("saldo").innerHTML = saldoNew;

                    } else {
                        let x = parseInt(document.getElementById("saldo").innerHTML);
                        let y = document.getElementById("apostar").value;

                        // Al GANAR con el numero del dado, multiplico por 6 el valor apostado y sumo esa ganancia al saldo
                        let saldoNew = (y * 6) + x;

                        document.getElementById("saldo").innerHTML = saldoNew;

                    }

                } else {
                    alert("Ingrese más Dinero, Saldo actual debe ser mayor que cantidad a Apostar");
                } 

            } else {
                alert("ERROR: Ingrese Dinero al Saldo para Poder Apostar");
            }    

        } else {
            alert("ERROR: La Cantidad para Apostar debe ser mayor que Cero");
        }

    } else{
        alert("ERROR: Ingrese un Valor correcto del Dado para Apostar");
    }
    
} 

/* function apuesta() {

    document.getElementById("dado").style.opacity = 70;

    for (let i = 0; i < dados.length; i++) {
        let result = 0;
        result = Math.floor(Math.random()*6);   
        document.getElementById("cara").src = dados[result];
        result = result+1;

document.getElementById("resultado").innerHTML = "Tu Elección fue: "+document.getElementById("valor").value;

    if (result == document.getElementById("valor").value){
        document.getElementById("mensaje").innerHTML = "¡¡ EUREKA, GANASTE !!";
        document.getElementById("mensaje").style.backgroundColor = "green";
        document.getElementById("mensaje").style.color = "white";

        }else {
        document.getElementById("mensaje").innerHTML="¡PERDISTE sigue intentando, la proxima sale !"; 
        document.getElementById("mensaje").style.backgroundColor = "red";
        }
    }
} */

function cargar() {
    
    let masDinero = document.getElementById("dinero").value;
    let saldoActual = document.getElementById("saldo").innerHTML;
    let nuevoSaldo = parseInt(masDinero) + parseInt(saldoActual);

    if (saldoActual == 0 && masDinero == 0){
        alert("IMPORTANTE: Ingrese Dinero para poder apostar");
    }

    if (parseInt(saldoActual) == 0 && parseInt(masDinero) > 0){
        document.getElementById("saldo").innerHTML = masDinero;
    } 
    
    if (saldoActual > 0 && parseInt(masDinero) > 0){
        document.getElementById("saldo").innerHTML = nuevoSaldo;
    }

    if (saldoActual > 0 && masDinero == 0){
        alert("Para ingresar mas SALDO, el campo dinero debe ser mayor que Cero");
    }
    
    if (masDinero < 0){
        alert("Para ingresar mas SALDO, el campo dinero debe ser mayor que Cero");
    }
    document.getElementById("dinero").value = 0;
} 
