

const cool = require("cool-ascii-faces");
const expreso = require("express");

var aplicacion = expreso();

//Esto es para obtener la hora del sistema



aplicacion.get("/cool",(request, response) => {
	response.send("<html>"+cool()+"</html>");
});

aplicacion.get("/time",(request, response) => {
	
	//lo ponemos dentro del bucle de aplicacion, asi cada vez que refresquemos, iremos obteniendo la hora en cada momento
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	
	response.send("<html>"+dateTime+"</html>");
});

aplicacion.listen(80);

console.log("Servidor preparado y listo");