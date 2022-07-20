

export default function botonOscuro(btn, efecto) {
    let boton = document.querySelector(btn);
    let loAfectado = document.querySelector("[darClase]");

    let imagenBoton = "🌙";

    document.addEventListener("click", (e) => {
        if (e.target.matches(btn)){
           let confirmacion = confirm("Desea Cambiar Tema De La Pantalla");

           if(confirmacion === true){

            if (boton.textContent === imagenBoton){
                loAfectado.classList.toggle(efecto);

            }

           }
            
           
            
        }
    })
    
}





/**const d = document;

temaOscuro3(tema-oscuro);

function temaOscuro3(btn){
    let cuerpo = d.querySelector("tomar-body") ;

   d.addEventListener("click", (e) => {
       if(e.target.matches(btn)){
           alert("hola");
        cuerpo.classList.add("oscuro");
       }
   })
        
    }

   let boton = document.querySelector("tema-oscuro");

   boton.addEventListener("click", ()=>{
       alert("hola");

   });
   **/