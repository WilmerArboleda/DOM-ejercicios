
const d = document;

const ls = localStorage;

export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

    //console.log($selectors);

    let moon = "🌙";

    let sun = "☀️";

    const modoDia = () => {
        $selectors.forEach(el =>el.classList.remove(classDark));
        $themeBtn.textContent = moon;

        ls.setItem("tema","dia");                      // --- si se cumple esta funcion se crea la variable en el localstorage

    }

    const modoNoche = () => {
        $selectors.forEach(el =>el.classList.add(classDark));
            $themeBtn.textContent = sun;

            ls.setItem("tema","noche");               // --- si se cumple esta funcion se crea la variable en el localstorage

        
    }

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
          //  console.log($themeBtn.textContent);  // con el console se da cuenta de el contenido dentro de la etiqueta. en este caso el sol y luna
        if($themeBtn.textContent === moon){
          //  $selectors.forEach(el =>el.classList.add(classDark));
          //  $themeBtn.textContent = sun;                     ------    asi era sin usar localstorage
          modoNoche();
            
         } else{
          //  $selectors.forEach(el =>el.classList.remove(classDark));
           // $themeBtn.textContent = moon;                    ----- asi era sin el localstorage 
           modoDia ();

            }


        }
        }
    )

    d.addEventListener("DOMContentLoaded", (e) =>{
        if(ls.getItem("tema") === null){   // pregunta si existe la variable en el localstorage. no existe
            ls.setItem("tema", "dia")      // aqui crea esta variable en el local con llave tema y value dia
        }

        if(ls.getItem("tema") === "dia"){
            modoDia();
        }

        if(ls.getItem("tema") === "noche"){
            modoNoche();
        }
        
    })

}