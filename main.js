let pin = "1234";
let ingresar = false;

function ingreso() {
  console.log(ingresar);

  // alert("Bienvenido a la calculadora de cuotas para acceder a tu lote");
  for (let i = 0; i <= 2; i++) {
    let intento = prompt("ingrese numero de pin para acceder a al sistema");
    if (intento == pin) {
      alert("ingresaste correctamente, Bienvenido a sistema para calcular cuota");
      ingresar = "true";

      break;
    } else {
      alert("Lo siento, este pin no es correcto. Usaste tu intento N°" + (i + 1))
    }
  }
}

ingreso();
console.log(ingresar);


if (ingresar) {

  let valorTotalTerreno = 1000;

  let elegirOpcion = prompt("Elegí tu opcion\n 1- Total valor pagando de contado\n 2-De cuanto es la entrega que desea realizar? \n 3-En cuantas cuotas desea financiar?\n 4-Cómo quedaría el plan de financiación elegido\n Presione x para salir");
  while (elegirOpcion != "x") {
    switch (elegirOpcion) {
      case "1":
        alert("elegiste 1\n        El valor total del terrenode contado es " + valorTotalTerreno)

        break;

      case "2":
        let entregaEnEfectivo = parseFloat(prompt("De cuanto es la entrega en efectivo que deseas hacer?"));
        if (entregaEnEfectivo >= 200) {
          alert("tu entrega está correcta. Supera el monto minimo. Te calculo de cuanto quedarán las 12 cuotas");
          valorTotalTerreno = valorTotalTerreno - entregaEnEfectivo;

        } else {
          alert(" tu entrega dede ser igual o superio a 200 para poder financiar en cuotas")
        }

        break;
        case "3":
        let cantidadDeCuotas = parseFloat(prompt("elija una opcion: \n puede elegir de 12 a 36 cuotas"));
            alert("elegiste " + cantidadDeCuotas +"cuotas, tienes que financiar   el saldo que es de " + saldo+ " pesos, en " + cantidadDeCuotas + " esto queda igual a " + (saldo * 2 /cantidadDeCuotas));
            
            /*if (entregaEnEfectivo >= 200) {
              alert("tu entrega está correcta. Supera el monto minimo. Te calculo de cuanto quedarán las 12 cuotas");
              valorTotalTerreno = valorTotalTerreno - entregaEnEfectivo;

            } else {
              alert(" tu entrega dede ser igual o superio a 200 para poder financiar en 12 cuotas")
            }*/

        break;  

      case "3":
        alert("elegiste 3")
        break;

      default:
        alert("Esta opcion no válida")
        break;


    }
    elegirOpcion = prompt("Elegí tu opcion\n 1- Total valor pagando de contado\n 2-Calcular entrega y 12 cuotas \n 3-Calclar entrega y 24 cuotas\n Presione x para salir");

    
  }
  alert("gracias por operar con nosotros");
 
  }
 else{
    alert ("no podras seguir operando. LLama a nuestras oficina para solicitar un nuevo pin.")
}