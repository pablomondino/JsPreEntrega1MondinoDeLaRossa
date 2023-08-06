let pin="1234";
let ingresar=false;

function ingreso(){
    console.log("hola");
  // alert("Bienvenido a la calculadora de cuotas para acceder a tu lote");
  for (let i=0;   i<=2; i++) { 
   let intento =prompt("ingrese numero de pin para acceder a al sistema");
   if (intento==pin){
    alert("ingresaste correctamente, Bienvenido a sistema para calcular cuota");
    ingresar="true";
    break;
   }else{
    alert("Lo siento, este pin no es correcto. Usaste tu intento N°" + (i+1))
   }
  }
}

ingreso();
