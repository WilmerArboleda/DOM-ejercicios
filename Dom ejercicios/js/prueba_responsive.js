const d = document;

export default function responsiveTexter(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e)=>{
        if(e.target === $form){
            e.preventDefault();
           // alert("formulario enviado");
            tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.Ancho.value}, innerHeight=${$form.Alto.value}`)
        };
    })

    d.addEventListener("click", (e) => {
        if(e.target === $form.cerrar){
         tester.close();

        }
    });

}