
const d = document,
n = navigator,
ua = n.userAgent;

export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
    isMobile = {
      android: ()=> ua.match(/android/i),
      ios: ()=> ua.match(/iphone|ipad|ipod/i),
      window: ()=> ua.match(/windows phone/i),
      any: function(){
    return this.android() || this.ios() || this.window();
    },

    },

    isDesktop = {
     linux: ()=> ua.match(/linux/i),
     mac: ()=> ua.match(/mac os/i),
     window: ()=> ua.match(/windows nt/i),
     any: function(){
    return this.linux() || this.mac() || this.window();},
    },

    isBrowser = {
      chrome: ()=> ua.match(/android/i),
      safari: ()=> ua.match(/safari/i),
      firefox: ()=> ua.match(/firefox/i),
      opera: ()=> ua.match(/opera|opera mini/i),
      ie: ()=> ua.match(/msie|iemobile/i),
      edge: ()=> ua.match(/edge/i),
      any: function(){
    return(
     this.chrome() ||
     this.safari() ||
     this.firefox() ||
     this.opera() ||
     this.ie() ||
     this.edge()
     );
    }
 };

 /**console.log(ua);
 console.log(isMobile.android());**/
 $id.innerHTML= `
 <ul>
 <li>User Agent: <b> ${ua} </b> </li>
 <br>
 <li>Plataforma: <b> ${isMobile.any()? isMobile.any() : isDesktop.any()}
 </b> </li>
 <br>
 <li>Navegador: <b> ${isBrowser.any()} </b> </li>

 `
 // Contenido Exclusivo

 if(isBrowser.chrome()){
     $id.innerHTML += `<p><mark> Este Contenido Solo Se Ve En Chrome </mark></p>`;
 }

 if(isBrowser.edge()){
  $id.innerHTML += `<p><mark> Este Contenido Solo Se Ve En edge </mark></p>`;
}

 if(isBrowser.firefox()){
    $id.innerHTML += `<p><mark> Este Contenido Solo Se Ve En Forefox </mark></p>`;
}

if(isDesktop.window()){
  $id.innerHTML += `<p><mark> Descarga la aplicacion para windows </mark></p>`;
}

if(isDesktop.mac()){
  $id.innerHTML += `<p><mark> Descarga la aplicacion para mac </mark></p>`;
}

if(isDesktop.linux()){
  $id.innerHTML += `<p><mark> Descarga la aplicacion para linux </mark></p>`;
}

if(isMobile.android()){
  $id.innerHTML += `<p><mark> Descarga la aplicacion para android </mark></p>`;
}

// Redireccionamiento

if(isMobile.android()){
  $id.innerHTML += `<p><a href="https://play.google.com/store/apps/details?id=colombia.online"</a> DESCARGA LA APP </p>`;
}

if(isMobile.ios()){
  $id.innerHTML = window.location.href = "https://play.google.com/store/apps/details?id=colombia.online";
}

};
