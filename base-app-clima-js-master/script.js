let api_kay ='83a2d8a726c71fe01b9b4134a522d5e4'

let fifKelvin = 273.15

let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad = document.getElementById('ciudadEntrada').value

    if (ciudad) {
        fetchDadosClima(ciudad)
        return; 
    }
})

function fetchDadosClima (ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_kay}`)

    .then(data => data.json())
    .then(data => mostrarClima(data))
}

function mostrarClima(data) {
    const diviDatosClima = document.getElementById('datosClima')
    diviDatosClima.innerHTML='';
    
    const ciudadNombre = data.name;
    const temperatura = data.main.temp;
    const icono = data.weather[0].icon



    const ciudadeTitulo = document.createElement('h2')
    ciudadeTitulo.textContent=ciudadNombre;

    const ciudadeTemperatura = document.createElement('p')
    ciudadeTemperatura.textContent=`la temperatura es: ${Math.floor(temperatura-fifKelvin)}ºc`;

    const iconoInfo = document.createElement('img')
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png` 




    diviDatosClima.appendChild(ciudadeTitulo)
    diviDatosClima.appendChild(ciudadeTemperatura)
    diviDatosClima.appendChild(iconoInfo)

}
