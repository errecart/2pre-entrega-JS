// HTML ==============================================================================================

let foot = document.getElementById("footerF");
let footer1 = document.createElement("footer");
foot.innerHTML = `        
<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
</p>

</svg>
<div class="reds">
<a href="https://www.instagram.com/" target="_blanck">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#fd0061" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
</a>
<a href="https://www.facebook.com/" target="_blanck">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
</a>

<a href="">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
</a>
</div>`

// PREGUNTAS ======================================================================================

// Storage =======================================================================================

const enviarCuenta = document.getElementById("enviar");
enviarCuenta.addEventListener('click', guardaraContenido);

function guardaraContenido() {
  let dato1 = document.getElementById("usuario").value;
  let dato2 = document.getElementById("email").value;
  let dato3 = document.getElementById("contrasenia").value;
  localStorage.setItem('usuario', dato1);
  localStorage.setItem('email', dato2);
  localStorage.setItem('contrasenia', dato3);
}

const borrarCuenta = document.getElementById("borrarCuenta");
borrarCuenta.addEventListener('click', borrarContenido);

function borrarContenido() {
  localStorage.clear();
}



// Juego =========================================================================================

const pregunta1 = document.getElementById('p1');
pregunta1.addEventListener('change', respuestaA => {
  document.querySelector('infoQ1');
  infoQ1.innerText = `Tu destino favorito es la  ${respuestaA.target.value}`
})
const pregunta2 = document.getElementById('p2');
pregunta2.addEventListener('change', respuestaB => {
  document.querySelector('infoQ2');
  infoQ2.innerText = `Tu comida favorito es la: ${respuestaB.target.value}`
})

const pregunta3 = document.getElementById('p3');
pregunta3.addEventListener('change', respuestaC => {
  document.querySelector('infoQ3');
  infoQ3.innerText = `sos un: ${respuestaC.target.value}`
})

const pregunta4 = document.getElementById('p4');
pregunta4.addEventListener('change', respuestaD => {
  document.querySelector('infoQ4');
  infoQ4.innerText = `elegiste el ${respuestaD.target.value}`
})