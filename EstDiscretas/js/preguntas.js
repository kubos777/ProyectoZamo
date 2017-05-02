var cuestionario = new Array();

cuestionario[0] = ["¿Cuántos números de 5 cifras diferentes se puede formar con los dígitos: 1, 2, 3, 4, 5.?",3,["0","5","120","404"]];
cuestionario[1] = ["¿De cuántas formas distintas pueden sentarse ocho personas en una fila de butacas?",2,["2","40320","403203","0"]];
cuestionario[2] = ["¿De cuántas formas distintas pueden sentarse ocho personas alrededor de una mesa redonda?",4,["10","34","5300","5040"]];
cuestionario[3] = ["Con las letras de la palabra libro, ¿cuántas ordenaciones distintas se pueden hacer que empiecen por vocal?",3,["84","100","48","2500"]];
cuestionario[4] = ["¿Cuántos números de cinco cifras distintas se pueden formar con las cifras impares? ¿Cuántos de ellos son mayores de 70.000?",4,["98","987","5","48"]];
cuestionario[5] = ["En una clase de 35 alumnos se quiere elegir un comité formado por tres alumnos. ¿Cuántos comités diferentes se pueden formar?",1,["6545","6540","7654","0"]];
cuestionario[6] = ["¿De cuántas formas pueden mezclarse los siete colores del arco iris tomándolos de tres en tres?",4,["53","90","87","35"]];
cuestionario[7] = ["¿A una reunión asisten 10 personas y se intercambian saludos entre todos. ¿Cuántos saludos se han intercambiado?",2,["Ninguno","45","56","54"]];
cuestionario[8] = ["¿Cuántas apuestas de Lotería Primitiva de una columna han de rellenarse para asegurarse el acierto de los seis resultados, de 49?",3,["Confiar en el cliente.","Seguridad de mi sistema.","Capacidad del sistema para mantener niveles de rendimiento bajo ciertas condiciones y un tiempo de respuesta dado.","Cpacidad de confiar en que el cliente dará los requerimentos correctos"]];
cuestionario[9] = ["¿¿Cuántas apuestas de Lotería Primitiva de una columna han de rellenarse para asegurarse el acierto de los seis resultados, de 49?",2,["9876","13983816","99876","345675"]];
cuestionario[10] = ["Demuestre que si 8 personas están en una habitación, al menos dos de ellas cumplen años el mismo día de la semana.",1,["Las palomas son las personas y los nidos son los días de la semana. Como hay 8 palomas y 7 nidos, hay algún nido con más de una paloma, es decir, hay algún día de la semana en el cual cumplen años dos (o más) de esas personas.","Las palomas son las personas y los nidos son los días de la semana. Como hay 7 palomas y 6 nidos, hay algún nido con más de una paloma, es decir, hay algún día de la semana en el cual cumplen años dos (o más) de esas personas.","Las palomas son las personas y los nidos son los días de la semana. Como hay 4 palomas y 2 nidos, hay algún nido con más de una paloma, es decir, hay algún día de la semana en el cual cumplen años dos (o más) de esas personas.","No se puede resolver."]];
cuestionario[11] = ["Si una persona puede tener no más de 200.000 cabellos, ¿es posible que en una ciudad de 300.000 habitantes haya dos personas con la misma cantidad de cabellos en la cabeza?",4,["Si, es seguro que existen dos personas con la misma cantidad de cabellos. Las palomas son las 200.000 personas y los nidos son las cantidades de cabellos (0,1,2,...,300.000). A cada paloma le corresponde uno de esos nidos. Como hay más palomas que nidos, hay algún nido (cantidad) con más de una paloma (habitante).","No existen personas con la misma cantidad de cabellos.","No se puede resolver","Si, es seguro que existen dos personas con la misma cantidad de cabellos. Las palomas son las 300.000 personas y los nidos son las cantidades de cabellos (0,1,2,...,200.000). A cada paloma le corresponde uno de esos nidos. Como hay más palomas que nidos, hay algún nido (cantidad) con más de una paloma (habitante)."]];

cuestionario[12] = ["Dibujamos en el plano un hexágono regular de lado 3 metros, y pintamos en su interior o en su frontera 2009 puntos rojos distintos. Demuestra que hay un triángulo equilátero de lado 1 metro, incluido en el interior o la frontera del anterior, en cuyo interior o frontera hay al menos 38 puntos rojos distintos. ",3,["No hay demostración","No podemos dividir el hexágono regular ","podemos dividir el hexágono regular en tres triángulos equiláteros de lado 3 metros, dibujando sus diagonales mayores. Cada uno de estos triángulos puede ser a su vez dividido en 9 triángulos equiláteros de lado 1 metro, dividiendo primero cada lado en tres segmentos iguales, y luego dibujando por cada uno de los puntos de división líneas paralelas a los lados del triángulo (¡prueba tú mismo a hacer el dibujo!). Tenemos así el hexágono dividido en 54 triángulos equiláteros de lado 1 metro, de forma que los interiores y las fronteras de estos triángulos cubren completamente el interior y la frontera del hexágono. Como 2009=54×37+11, y cada punto rojo, al estar en el hexágono, está en uno de los 54 triángulos, entonces por el principio del palomar hay al menos uno de los triángulos que contiene al menos 38 puntos. ","No se puede resolver."]];

var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var pr1 = Math.floor(Math.random() * (10+1));
var currentIndex = nums.length, temporaryValue, randomIndex ;

while (0 !== currentIndex) {
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	temporaryValue = nums[currentIndex];
	nums[currentIndex] = nums[randomIndex];
	nums[randomIndex] = temporaryValue;
}
