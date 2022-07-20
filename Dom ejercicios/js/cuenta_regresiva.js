const d = document;

export default function cuenta(id, limiteDate, finalMassage){
    const $cuenta = d.getElementById(id),
    cuentaDate = new Date(limiteDate).getTime();

    let cuentaTempo = setInterval(() => {
        let ahora = new Date().getTime(),
        limiteTime = cuentaDate - ahora,
        dias = Math.floor(limiteTime / (1000*60*60*24)),
        horas =  ("0" + Math.floor(limiteTime %(1000*60*60*24)/(1000*60*60))).slice(-2),
        minutos = ("0" + Math.floor(limiteTime %(1000*60*60)/(1000*60))).slice(-2),
        segundos = ("0" + Math.floor(limiteTime %(1000*60)/1000)).slice(-2);

        $cuenta.innerHTML = `<h3> Faltan ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos </h3>`;

     if(limiteTime < 0){
         clearInterval(cuentaTempo);
         $cuenta.innerHTML = `<h3> ${finalMassage} </h3>`;

     }

    }, 1000);
}