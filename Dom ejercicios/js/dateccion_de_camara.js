
const d = document,
n = navigator;

export default function webCam(id){
    const $video = d.getElementById(id);
    // console.log(n.mediaDevices.getUserMedia);
    
    // validar si el navegador lo permite
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video: true, audio: false})
        .then((stream)=>{
            console.log(stream);
            $video.srcObject = stream;
            // para que se vea video, sin play solo toma la foto
            $video.play();
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("afterend", `<p><mark>¡Sucedio el siguiente error!: ${err}</mark></p>`);
           // console.log(`¡Sucedio el siguiente error!: ${err}`);
        })
    }

}