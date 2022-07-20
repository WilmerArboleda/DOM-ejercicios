const d = document;

const n = navigator;

export default function getGeolocalizacion(id) {
let $id = d.getElementById(id),

opciones = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

const todoBien = (position) => {
    let coords = position.coords;
    //console.log(position);

    $id.innerHTML= `
    <p> Tu posicion actual es: </p>
    <ul>
    <li>Latitud: <b> ${coords.latitude} </b></li>
    <li>Longitud: <b> ${coords.longitude} </b></li>
    <li>Precision: <b> ${coords.accuracy} </b> Metros </li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitudes},20z"
     target="_blank" rel="noopener"> Ver en Google Maps </a>        
     `;                   
};

const error = (err) => {
    $id.innerHTML= `<p> <mark> Error ${err.code}: ${err.message} </mark> </p>`
    //console.log(`Error ${err.code}: ${err.message}`);
}

n.geolocation.getCurrentPosition(todoBien, error, opciones)             // esto pide lo que pasa si sale bien, si sale mal y las opciones... las cuales se crearon arriba

      // watchPosition()......  recibe los mismos parametros que el currentPosition y esta se va actualizando "como un recorrido uber"

}