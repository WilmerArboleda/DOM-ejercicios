
const d = document;

export default function slider(){
    const $nextBtn = d.querySelector(".slider-btn .next"),
    $prevBtn = d.querySelector(".slider-btn .prev"),
    $slides = d.querySelectorAll(".slider-slide");

    let i = 0;

// Se pone el escuchador de evento click en el documento con
// la condicion si el objeto del click es igual a previo hacer lo siguiente

    d.addEventListener("click", (e)=>{
        if(e.target === $prevBtn){
            e.preventDefault();

            $slides[i].classList.remove("active");
            i--;

            if(i < 0){
                i = $slides.length - 1;
            }

            $slides[i].classList.add("active");

        }

        if(e.target === $nextBtn){
            e.preventDefault();

            $slides[i].classList.remove("active");
            i++;

            if(i >= $slides.length){
                i = 0;
            }

            $slides[i].classList.add("active");

        }
    });

    
}