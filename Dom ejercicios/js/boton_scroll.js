const d = document;

const w = window;

export default function scrollTopButton (btn){
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", e => {
        // Lo siguiente es solo por si la aplicacion la abren en un navegador viejo 
        // resista el pageYOffset o el d.documentElement.
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop > 700){
         $scrollBtn.classList.remove("hidden");
        }else {
         $scrollBtn.classList.add("hidden");

        }
    });

    d.addEventListener("click", e => {
        // si el objeto que origina el evento es el btn que tiene el id del boton scroll haz lo siguiente
        if(e.target.matches(btn)){
            // scrollTo es del window y recibe dos propiedades. la animacion o comportamiento y el adonde quiere ir
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                //left: 0,  .... en caso de tener tambien una barra lateral
            });
        }
    });

}