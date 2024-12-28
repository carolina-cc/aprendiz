//Esto es un comentario en linea

/*
 Esto es un comentario de bloque (multilínea)
 */
 
/* 

 var num3;
 var num4=5;
 alert("Clase de repaso heavey")
 
 //let nota1=6;
 //let cantidadnotas=0;
 let cantidadnotas = parseInt(prompt("Ingrese cantidad de notas a calificar:"))
 while (cantidadnotas<3){
	 console.log("ciclo..." +cantidadnotas)
	 prompt("Ingrese una nota")
	 cantidadnotas++
}

*/

//API

/*
async function consultar(){
 let resultado = await fetch("https://randomuser.me/api/?results=5")
 .then(response=>response.json())
 .then(data=>data)
 
 console.log(resultado)
}

consultar()

/*
 fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => console.log(data));
  //
  console.log(resultado.results[0].gender)
 */


//


 
 async function fetchWeather(city) {
    // Construye la URL completa para la solicitud a la API
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "9f7b18dd26f1232697933dceb84e9615"; // Tu clave API
    const units = "metric"; // Unidades métricas (Celsius)
    const lang = "es"; // Idioma español
    const response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`);

    // Convierte la respuesta en formato JSON
    const data = await response.json();
    return data;
}

async function updateWeatherCard(city) {
    // Obtiene los datos meteorológicos para la ciudad especificada
    const weatherData = await fetchWeather(city);
    console.log(weatherData);

    // Actualiza los elementos HTML con los datos obtenidos
    document.getElementById("city").textContent = weatherData.name;
    document.getElementById("temperature").textContent = weatherData.main.temp + " °C";
    // ... (resto de los elementos HTML se actualizan de manera similar)
}

updateWeatherCard("Buenos Aires");
