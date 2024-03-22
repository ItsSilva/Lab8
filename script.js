// Definir la función createPost que genera el HTML para una publicación
function createPost(name, message, imageURL) {
    return `
    <div class="post">
    <img src="${imageURL}" alt="Rick and Morty">
        <h2>${name}</h2>
        <p>${message}</p>
    </div>
    `;
}

// Obtener el contenedor de las publicaciones
const postsContainer = document.getElementById('posts-container');

// Ciclo para crear las 826 publicaciones con imágenes diferentes
for (let i = 1; i <= 826; i++) {
    const name = `Character ${i}`;
    const message = `Esta es mi publicación número ${i}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.`;
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;

    const postHTML = createPost(name, message, imageURL);
    // Agregar la publicación al contenedor
    postsContainer.innerHTML += postHTML;
}

