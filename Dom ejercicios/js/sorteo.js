const d= document;

export default function sorteo(btn, selector){
    const getganador = (selector) => {
        const $jugadores = d.querySelectorAll(selector);
        let random = Math.floor(Math.random() * $jugadores.length);
        let ganador = $jugadores[random];

        let cajaRes = d.getElementById("resultado");

        cajaRes.innerHTML= `El Ganador es: <mark> ${ganador.textContent} </mark>`;

        // console.log($jugadores, random, ganador);

      return `El Ganador es: ${ganador.textContent}`;

    };

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            let resultado = getganador(selector);
            alert(resultado);
           // console.log(resultado);

           




        }
    });

}