
const d = document;

export default function filtroBusqueda(input, selector){
    d.addEventListener("keyup", e =>{
       // console.log(e.key);
       // console.log(e.target.value);

        d.querySelectorAll(selector).forEach(el =>{
            el.textContent.toLowerCase().includes(e.target.value)
            ? el.classList.remove("filtrar")
            :el.classList.add("filtrar")
        })

    })

}



