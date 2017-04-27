var cuestionario = new Array();

cuestionario[0] = ["¿Cómo se clasifican los requerimentos?",3,["Estrategicos y funcionales.","Relacionales y no relacionales.","Funcionales y no funcionales.","Ninguna de las anteriores"]];
cuestionario[1] = ["Son tres clasificaciones de requerimentos funcionales: ",2,["Estrategicos y funcionales.","Interfaz,Datos y Transaccionales","Funcionales y no funcionales.","Eficiencia, funcionalidad y amabilidad."]];
cuestionario[2] = ["Son tres clasificaciones de requerimentos no funcionales: ",4,["Estrategicos y funcionales.","Interfaz,Datos y Transaccionales","Funcionales y no funcionales.","Eficiencia, funcionalidad y amabilidad."]];
cuestionario[3] = ["Estándar en el que se basan para definir los requerimentos no funcionales: ",3,["ISO-9000","Estandar jerarquíco","Estándar ISO/IEC 9125","Norma ISO 25000"]];
cuestionario[4] = ["¿A qué se refiere la portabilidad?",4,["Al software sin errores","A un programa malicioso","A la capacidad del software de ser transmitido de un entorno a otro.","Todas las anteriores."]];
cuestionario[5] = ["¿Qué buscan los requerimentos de interfaz?",1,["Determinar la forma en cómo los usuarios van a interactuar con el sistema","El numero de usuarios que soporta el sistema","Que el tipo de información se adecuado al sistema","Ninguna de las anteriores."]];
cuestionario[6] = ["¿Qué define la funcionalidad?",4,["Que el sistema trabaja con un paradigma funcional.","Que el sistema es una función.","Que el sistema debe estar en función del objetivo.","Características para alcanzar el funcionamiento deseado del sistema."]];
cuestionario[7] = ["¿Cómo es llamada la Amabilidad del sistema en algunas ocasiones?",2,["Generosidad","Usabilidad","Eficiencia","Gentileza"]];
cuestionario[8] = ["La confiabilidad es: ",3,["Confiar en el cliente.","Seguridad de mi sistema.","Capacidad del sistema para mantener niveles de rendimiento bajo ciertas condiciones y un tiempo de respuesta dado.","Cpacidad de confiar en que el cliente dará los requerimentos correctos"]];
cuestionario[9] = ["¿Qué es la seguridad del sistema?",2,["Que cargue rápido.","Capacidad del software para cumplir con los niveles de riesgo permitidos ante posibles daños físicos del sistema como para riesgo de datos.","Capacidad para tener un respaldo de datos","Ninguna de las anteriores."]];
cuestionario[10] = ["¿Qué definen los requerimentos funcionales?",1,["La capacidad que tendrá el sistema que se desarrollará, describiendo procesos, que llevan a la transformación de las entradas para obtener salidas deseadas.","Que el sistema sea 100% funcional.","La capacidad del sistema para trabajar con un paradigma funcional.","Todas las anteriores."]];
cuestionario[11] = ["¿Qué definen los requerimentos no funcionales?",4,["Que el sistema no soporta paradigma funcional","Que el sistema no es una funcion","Que el sistema no depende de nada.","Las posibles causas que son limitantes del sistema."]];
cuestionario[12] = ["¿Qué resulta del análisis de requerimentos?",3,["Un sistema confiable.","Un sistema eficiente.","La especificación de las características operativas del software","Las posibles causas que son limitantes del sistema."]];
cuestionario[13] = ["Son tipos de modelos: ",2,["Modelo relacional,imperativo y declarativo.","Modelo de datos, orientados al flujo y de comportamiento.","Modelo cliente servidor, modelo transaccional y funcional.","Ninguna de las anteriores."]];
cuestionario[14] = ["¿Qué dan los modelos al diseñador de software?",1,["La información que se traduce en  en diseños de arquitectura, interfaz, y componentes.","Un diseño óptimo.","Heramientas para trabajar.","Las posibles causas que son limitantes del sistema."]];
cuestionario[15] = ["¿Qué ilustra el modelo de datos?",4,["Que el sistema no soporta paradigma funcional","Que el sistema no es una funcion","Que el sistema no depende de nada.","Las posibles causas que son limitantes del sistema."]];
cuestionario[16] = ["¿Qué definen los requerimentos no funcionales?",4,["Que el sistema no soporta paradigma funcional","Que el sistema no es una funcion","Que el sistema no depende de nada.","Las posibles causas que son limitantes del sistema."]];
cuestionario[17] = ["¿Qué definen los requerimentos no funcionales?",4,["Que el sistema no soporta paradigma funcional","Que el sistema no es una funcion","Que el sistema no depende de nada.","Las posibles causas que son limitantes del sistema."]];
cuestionario[18] = ["¿Qué definen los requerimentos no funcionales?",4,["Que el sistema no soporta paradigma funcional","Que el sistema no es una funcion","Que el sistema no depende de nada.","Las posibles causas que son limitantes del sistema."]];
cuestionario[19] = ["¿Qué definen los requerimentos no funcionales?",4,["Que el sistema no soporta paradigma funcional","Que el sistema no es una funcion","Que el sistema no depende de nada.","Las posibles causas que son limitantes del sistema."]];
cuestionario[20] = ["¿Qué definen los requerimentos no funcionales?",4,["Que el sistema no soporta paradigma funcional","Que el sistema no es una funcion","Que el sistema no depende de nada.","Las posibles causas que son limitantes del sistema."]];

var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];
var pr1 = Math.floor(Math.random() * (10+1));
var currentIndex = nums.length, temporaryValue, randomIndex ;

while (0 !== currentIndex) {
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	temporaryValue = nums[currentIndex];
	nums[currentIndex] = nums[randomIndex];
	nums[randomIndex] = temporaryValue;
}
