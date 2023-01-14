let mostrar_texto_bttn = document.getElementById('mostrar_texto_bttn');
let mostrar_texto = document.getElementById('mostrar_texto')

mostrar_texto_bttn.addEventListener('click', toggle_text);

function toggle_text(){
    mostrar_texto.classList.toggle('show');
    
}