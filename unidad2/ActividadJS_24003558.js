/* Actividad 2

crear un programa que le diga al usuario cuál es su signo zodiacal. Para
eso va a preguntar 2 valores: el mes de nacimiento y el día de nacimiento, en ese
orden.

*/
    


var mes = parseInt(prompt("Digita el número del mes de nacimiento: "))
var dia = parseInt(prompt("Digita el número del día de nacimiento: "))

switch (mes) {
    //  Enero
  case 1:
    if(dia >= 1 && dia <= 20) {
        alert("Capricornio")
    } else if(dia >= 21 && dia <= 31) {
        alert("Acuario")
    }
    break;
    // Febrero
  case 2:
    if(dia >= 1 && dia <= 19) {
        alert("Acuario")
    } else if(dia >= 20 && dia <= 29) {
        alert("Piscis")
    }
    break;
    // Marzo
  case 3:
    if(dia >= 1 && dia <= 20){
        alert("Piscis")
    } else if(dia >= 21 && dia <= 31) {
        alert("Aries")
    }
    break;
    //Abril
  case 4:
    if(dia >= 1 && dia <= 20){
        alert("Aries")
    } else if(dia >= 21 && dia <= 30) {
        alert("Tauro")
    }
    break;
    // Mayo 
  case 5:
    if(dia >= 1 && dia <= 20){
        alert("Tauro")
    } else if(dia >= 21 && dia <= 31) {
        alert("Géminis")
    }
    break;
    // Junio
  case 6:
    if(dia >= 1 && dia <= 20){
        alert("Géminis")
    } else if(dia >= 21 && dia <= 30) {
        alert("Cáncer")
    }
    break; 
    // Julio
  case 7:
    if(dia >= 1 && dia <= 22){
        alert("Cáncer")
    } else if(dia >= 23 && dia <= 31) {
        alert("Leo")
    }
    break; 
    // Agosto
  case 8:
    if(dia >= 1 && dia <= 23){
        alert("Leo")
    } else if(dia >= 24 && dia <= 31) {
        alert("Virgo")
    }
    break; 
    // Septiembre
  case 9:
    if(dia >= 1 && dia <= 22){
        alert("Virgo")
    } else if(dia >= 23 && dia <= 30) {
        alert("Libra")
    }
    break; 
    // Octubre
  case 10:
    if(dia >= 1 && dia <= 23){
        alert("Libra")
    } else if(dia >= 24 && dia <= 31) {
        alert("Escorpio")
    }
    break; 
    // Noviembre
  case 11:
    if(dia >= 1 && dia <= 22){
        alert("Escorpio")
    } else if(dia >= 23 && dia <= 30) {
        alert("Sagitario")
    }
    break; 
    // Diciembre
  case 12:
    if(dia >= 1 && dia <= 21){
        alert("Sagitario")
    } else if(dia >= 22 && dia <= 31) {
        alert("Capricornio")
    }
    break;
  default:
     alert("no coinciden los ingresos")
    
}