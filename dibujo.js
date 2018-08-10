/* usa alert al comienzo para corroborar que 
el javascript esta siendo bien invocado

Guía de mi súper javascript que cambiara el mundo
----------------------------------------------------------


1. Declaracion de variables
2. Declaracion de funciones
3. Declaracion de ciclos & condicionales
4. Bandeja de entrada


-----------------------------------------------------------------

*/

//el area se suele llamar lienzo


// 1. Declaracion de variables

	var d = document.getElementById("dibujito"); //Metodo del doc
	// Las mayusculas y las minusculas importan en JS
	// Para obtener elementos del html por su id
	var caja_texto = document.getElementById("texto_lineas");
	var boton = document.getElementById("superboton");
	boton.addEventListener("click", dibujoPorClick );	
	//Convertir texto plano en numero entero
	

	// metodo añadir escuchador de eventos
	// A cual evento reacciona, parametro 1
	// Parametro 2: nombre funcion que se dispara
	// si escribo dibujoPorClick() dispara de una vez
	// Si escribo dibujoPorClick() refiero el nombre
	// sin que se dispare

	var ancho_lienzo =  d.width;
	var lienzo = d.getContext("2d"); 
	/* metodo del objeto canvas que te 
	permite obtener el contexto sobre el cual se va a dibujar */
	// Puedes dibujar en 2 D y puedes dibujar en 3D

	

	/*

	Un programador trabaja con varios problemas 
	pequeños desde el RPM

	Desglosar y resolver micro

	4 problemas claves
	---
	Si quiero 10 que me dibuje 10
	1 Al darle click pase algo
	2 Como obtengo y uso este numero
	3 Como hago para que dibuje solo cuando doy click
	4 Como hago para que las lineas sean las del codigo

	*/

// 2. Declaracion de funciones

/* 
Las funciones son una herramienta 
para encapsular el codigo que usamos muchas vecs
*/

//Declarando una nueva función
function dibujarLinea (color, xinicial , yinicial, xfinal, yfinal)
//En el argument estoy declarando las variables
{
	
	lienzo.beginPath(); 
	lienzo.strokeStyle = color; 
	lienzo.moveTo (xinicial, yinicial);
	lienzo.lineTo (xfinal, yfinal);
	lienzo.stroke(); 
	lienzo.closePath(); 
}

//Puedo colocar la funcion donde sea e igual va a funcionar
// Desde el comienzo

//Haciendo un triangulo divertido
//dibujarLinea("pink", 10, 16, 40, 100);
//dibujarLinea ("blue", 40, 100, 60, 16 );
//dibujarLinea("green", 10, 16, 60, 16);

//dibujarLinea("#aaf", 0,0 , 10, 300);
//dibujarLinea("#aaf", 0,10 , 20, 300);
//dibujarLinea("#aaf", 0,20 , 30, 300);


console.log (lienzo);

function crear_linea() {

	lienzo.beginPath(); //Arrancamos camino
	lienzo.strokeStyle = "white"; //Linea color rojo
	lienzo.moveTo (20,10); // Nos movimos al punto 100 , 100
	lienzo.lineTo(2500,100); // trazamos una diagonal hasta 200 ,200
	// Los numeros dentro son parametros, secolocan con coma
	// Los primeros son x , el segundo es Y
	lienzo.stroke(); //Dibuja la linea recta
	lienzo.closePath(); //Son el html de apertura y cierre
	// Para levantar el lapiz
	// si creo otra linea sin cerrar close path parte desde
	// el mismo punto de la linea que acabo de hacer

};

function dibujoPorClick ()
	{
		
		var lineas = parseInt(caja_texto.value);
		var l = 0;
		var primeray, ultimax;
		var colorcito = "#faa"
		var espacio = ancho_lienzo / lineas;

		console.log (caja_texto.value);
		// <estoy pidiendo el valor especifico
		// del texto en formulario
		
		for (l=0;  l < lineas; l++ ) //primero declara la variable que itera
	//se separa con ;
	{
		
		primeray = espacio * l;
		ultimax = espacio * (l + 1);
		dibujarLinea(colorcito, 0,primeray , ultimax, 300);
		console.log ("linea " + 1);
	}


		// RETO Freddy
// Hacer que el borde sea el borde superior derecho
// con la menor cantidad de lineas de codigo
// es una multiplicacion

dibujarLinea(colorcito, 1, 1, 1,299);
dibujarLinea(colorcito, 299, 299, 1,299);

/* 
Si coordenas son:
Coordenadas
Punto 1 = 1,1 
Punto 2 = 1, 299
Punto 3 = 299, 299
Punto 4 = 299 , 1 (Lo descubro por logica, es un cuadrado)

Entonces cambiar borde anterior
*/

dibujarLinea(colorcito, 1, 1, 299,1);
dibujarLinea(colorcito, 299, 299, 299,1);

// Lo logré :D

for (l=0;  l < lineas; l++ ) //primero declara la variable que itera
	//se separa con ;
// Simplemente invierto los valores en la funcion
	{
		
		primeray = 10 * l;
		ultimax = 10 * (l + 1);
		dibujarLinea(colorcito, primeray,0 , 300, ultimax);
		console.log ("linea " + 1);
	}

	}

// 3. Declaracion de ciclos & condicionales

/*
while ( l < lineas ) //mientras esto sea verdad
	{
		
		primeray = 10 * l;
		ultimax = 10 * (l + 1);
		dibujarLinea(colorcito, 0,primeray , ultimax, 300);
		l++;
		console.log ("linea " + 1);
	}
dibujarLinea(colorcito, 1, 1, 1,299);
dibujarLinea(colorcito, ultimax, 299, 0,299); */

// Para crear un ciclo necesitamos tener un limite
// Limite es 30 lineas




// 4. Bandeja de entrada

/*

Crea un bucle que ejecuta una sentencia especificada, 
hasta que la condición de comprobación se evalúa como falsa.
 La condición se evalúa después de ejecutar la sentencia, 
 dando como resultado que la sentencia especificada se ejecute 
 al menos una vez.

do {
   i += 1;
   document.write(i);
} while (i < 5);
*/

// Ambito, las variables funcionan en un lugar concreto
// Lo que esta en las llaves solo vive en las llaves