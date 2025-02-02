// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputName = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombre = inputName.ariaValueMax.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre valido.");
        return;
    }

    amigos.push(nombre);
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    inputName.value = "";
}