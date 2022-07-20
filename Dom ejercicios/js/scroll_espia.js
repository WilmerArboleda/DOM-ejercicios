
const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries)=> {
        // console.log("entrien", entries);

        entries.forEach((entry) => {
         // console.log("entry", entry);

          const id = entry.target.getAttribute("id");
        //  console.log(id);

          if(entry.isIntersecting){
              d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
          }else{
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");

          }

            
        });
    }
  // hasta aqui funciona sin los valores de (cb, {}) solo se usara porque las selecciona de dos en dos
  // porque las secciones estan pegadas una de la otra
    const observer = new IntersectionObserver(cb, {
        //rootMargin: "-250px",   esta es una opcion
        //threshold: 0.5,
        threshold: [0.5, 0.75],
    });
   // console.log("observer", observer);

    $sections.forEach((el)=> observer.observe(el));
}