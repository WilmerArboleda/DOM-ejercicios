
const d = document;

export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

    //console.log($inputs);

    $inputs.forEach((input)=>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error","none");
        input.insertAdjacentElement("afterend", $span);
    })
// al soltar la tecla en los input requeridos les pone el pattern
    d.addEventListener("keyup", (e)=>{
        if(e.target.matches(".contact-form [required]")){
            let $etarg = e.target,
            pattern = $etarg.pattern || $etarg.dataset.pattern; // Queda valiendo (e.target.patter!ex reg! o e.target.dataset.pattert!ex reg!

            // console.log("aquiiiiiiiii",$etarg, pattern);

// como los patter no funcionan en textArea se puso el data-patter con la exp regular como texto para agregarla despues
// si tiene pattern y el objeto del evento es diferente a strin vasio
            if ( pattern && $etarg.value !== ""){
                // console.log("el input tiene patron")

                let regx = new RegExp(pattern);
                return !regx.exec($etarg.value)
                ?d.getElementById($etarg.name).classList.add("is-active")
                :d.getElementById($etarg.name).classList.remove("is-active");

            }

            if(!pattern){
                // console.log("el input no tiene patron")
                //console.log("yooooooooo",$etarg.value)

                return $etarg.value === ""
                ?d.getElementById($etarg.name).classList.add("is-active")
                :d.getElementById($etarg.name).classList.remove("is-active");

            }
        }
    })

    // Simular envio de formulario

    d.addEventListener("submit", (e)=>{
        e.preventDefault();

        alert("Enviando Formulario");

        const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        setTimeout(()=>{
        
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();       // sirve para resetear el formulario

            setTimeout(()=>{
                $response.classList.add("none"); // un set dentro de otro set
            },3000)

        },3000);
    })

}