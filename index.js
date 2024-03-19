function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto 
        .replace(/a/gi, "apa")
        .replace(/e/gi, "epe")
        .replace(/i/gi, "ipi")
        .replace(/o/gi, "opo")
        .replace(/u/gi, "upu")

    if (document.getElementById("texto").value.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/enc.jpg";
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/apa/gi, "a")
        .replace(/epe/gi, "e")
        .replace(/ipi/gi, "i")
        .replace(/opo/gi, "o")
        .replace(/upu/gi, "u")

        if (document.getElementById("texto").value.length != 0){
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
            muñeco.src = "./img/des.jpg";
        } else {
            muñeco.src = "./img/muñeco.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            alert("Debes ingresar algun texto");
        }
}