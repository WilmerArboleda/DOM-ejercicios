import hamburgerMenu from "./menu-Hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import cuenta from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
//import temaOscuro from "./tema_oscuro.js";
import darkTheme from "./tema_oscuro2.js";
import botonOscuro from "./tema-oscuro3.js";
import getGeolocalizacion from "./geolocalizacion.js";
import filtroBusqueda from "./filtro_busqueda.js";
import sorteo from "./sorteo.js";
import responsiveTexter from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./dateccion_de_camara.js";
import slider from "./carrucel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import dibujarTeclas from "./dibujar.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{

hamburgerMenu(".panel-btn", ".panel", ".menu a")

digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

alarm("sonido/alarma-para-despertar-3-.mp3","#activar-alarma", "#desactivar-alarma");

cuenta("cuentaR", "October 07, 2022 11:30:30", "Feliz cumpleaños Wilmer")

scrollTopButton(".scroll-top-btn")

//temaOscuro(".tema-oscuro");



botonOscuro(".tema-oscuro", "oscuro")

responsiveTexter("responsive_texter");

userDeviceInfo("user-device");

webCam("webcam");

getGeolocalizacion("geolocalizacion");

filtroBusqueda(".targetas-filtras", ".targeta");

sorteo("#ganador-btn", ".jugador")

slider();

scrollSpy();

smartVideo();

dibujarTeclas();

contactFormValidations();


})

darkTheme(".dark-theme-btn", "dark-mode")   // esta se saco del DOMContentLoaded porque ya se usa un DOMContentLoaded en su programacion

networkStatus();

speechReader();



