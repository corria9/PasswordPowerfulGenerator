
// // PRUEBA DE ENLACE DE SCRIPT



window.onload = function(){

 	alert ("Generador de Contraseñas Poderosas")
}



// ============================




var uppercase_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



var lowercase_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


var symbols = ['/', '[', ']', '$', '-', ':', '_', '?', '{', '}', '~', '!', '@', '#', '%', '&', '*', '(', ')', '"', '^', '§', ',', '.', '°', '+', '-', ':'];



var length1;




// ===============================





var check1;

var check2;

var check3;

var check4;

var password = '';



// ===============================


function getvalues() {

   
   check1 = document.getElementsByClassName("check")[0];

   check2 = document.getElementsByClassName("check")[1];

   check3 = document.getElementsByClassName("check")[2];

   check4 = document.getElementsByClassName("check")[3];

   length1 = parseFloat(document.getElementById("length").value);
   checkinput(length1);


}




function checkinput (length1) {


	if (length1 > 100) {

		alert ("Vamos! No la vas a memorizar! Prueba con menos de 100 caracteres.");
		clearnumber();

	} else if(length1 < 0) {

		alert ("Ingresa un numero positivo.");
		clearnumber();

	} else if(isNaN(length1)){

      alert("No es un numero!");
      cleannumber();

   } else if (length1 === 0) {

      alert("La longitud no debe ser 0");
      cleannumber();
   } else if(length1 % 1 !== 0){

      alert ("No se permiten numeros decimales!");
      cleannumber();

   } else {
      generatestring();
   }



}



function generatestring () {

	var string = [''];

   if (check1.checked === true) {string = string.concat(uppercase_letters); }
   
   if (check2.checked === true) {string = string.concat(lowercase_letters); }
   
   if (check3.checked === true) {string = string.concat(numbers); }
   
   if (check4.checked === true) {string = string.concat(symbols); }

   if(check1.checked === true || check2.checked === true || check3.checked === true || check4.checked === true){


   generatepassword(string);


   } else {


      alert("Elige al menos una opcion!");


   }


}





function generatepassword(string) {


   var i;
   for (i = 0; i < length1; i++) {


      var random = Math.floor(Math.random() * (string.length - 1)) + 1 ;
      password += string[random];
   }


   show(password);
   password = '';


}





function show(password) {


   var output = document.getElementById("password");

   output.innerHTML = password;

   clean();
}





function clean(){



   cleanchecks();

   cleannumber();
}



function cleanchecks(){


   check1.checked = false;

   check2.checked = false;

   check3.checked = false;

   check4.checked = false;


}




function cleannumber(){


   document.getElementById("length").value = '';
}



























