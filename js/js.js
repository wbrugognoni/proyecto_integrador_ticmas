let mostrar_texto_bttn1 = document.getElementById('mostrar_texto_bttn1');
let mostrar_texto_bttn2 = document.getElementById('mostrar_texto_bttn2');
let mostrar_texto_bttn3 = document.getElementById('mostrar_texto_bttn3');
let mostrar_texto_bttn4 = document.getElementById('mostrar_texto_bttn4');
let mostrar_texto_bttn5 = document.getElementById('mostrar_texto_bttn5');
let mostrar_texto_bttn6 = document.getElementById('mostrar_texto_bttn6');
let mostrar_texto_bttn7 = document.getElementById('mostrar_texto_bttn7');
let mostrar_texto1 = document.getElementById('mostrar_texto1')
let mostrar_texto2 = document.getElementById('mostrar_texto2')
let mostrar_texto3 = document.getElementById('mostrar_texto3')
let mostrar_texto4 = document.getElementById('mostrar_texto4')
let mostrar_texto5 = document.getElementById('mostrar_texto5')
let mostrar_texto6 = document.getElementById('mostrar_texto6')
let mostrar_texto7 = document.getElementById('mostrar_texto7')

mostrar_texto_bttn1.addEventListener("click", toggle_text1);
mostrar_texto_bttn2.addEventListener("click", toggle_text2);
mostrar_texto_bttn3.addEventListener("click", toggle_text3);
mostrar_texto_bttn4.addEventListener("click", toggle_text4);
mostrar_texto_bttn5.addEventListener("click", toggle_text5);
mostrar_texto_bttn6.addEventListener("click", toggle_text6);
mostrar_texto_bttn7.addEventListener("click", toggle_text7);

function toggle_text1(){
    mostrar_texto1.classList.toggle("hide");   

    if(mostrar_texto1.classList.contains("hide")){
        mostrar_texto_bttn1.innerHTML = "Leer más";
    }else{
        mostrar_texto_bttn1.innerHTML = "Leer menos";
    }
}
function toggle_text2(){
    mostrar_texto2.classList.toggle("hide");   

    if(mostrar_texto2.classList.contains("hide")){
        mostrar_texto_bttn2.innerHTML = "Leer más";
    }else{
        mostrar_texto_bttn2.innerHTML = "Leer menos";
    }
}
function toggle_text3(){
    mostrar_texto3.classList.toggle("hide");   

    if(mostrar_texto3.classList.contains("hide")){
        mostrar_texto_bttn3.innerHTML = "Leer más";
    }else{
        mostrar_texto_bttn3.innerHTML = "Leer menos";
    }
}
function toggle_text4(){
    mostrar_texto4.classList.toggle("hide2");   

    if(mostrar_texto4.classList.contains("hide")){
        mostrar_texto_bttn4.innerHTML = "Leer más";
    }else{
        mostrar_texto_bttn4.innerHTML = "Leer menos";
    }
}
function toggle_text5(){
    mostrar_texto5.classList.toggle("hide2");   

    if(mostrar_texto5.classList.contains("hide")){
        mostrar_texto_bttn5.innerHTML = "Leer más";
    }else{
        mostrar_texto_bttn5.innerHTML = "Leer menos";
    }
}
function toggle_text6(){
    mostrar_texto6.classList.toggle("hide2");   

    if(mostrar_texto6.classList.contains("hide")){
        mostrar_texto_bttn6.innerHTML = "Leer más";
    }else{
        mostrar_texto_bttn6.innerHTML = "Leer menos";
    }
}
function toggle_text7(){
    mostrar_texto7.classList.toggle("hide2");   

    if(mostrar_texto7.classList.contains("hide")){
        mostrar_texto_bttn7.innerHTML = "Leer más";
    }else{
        mostrar_texto_bttn7.innerHTML = "Leer menos";
    }
}