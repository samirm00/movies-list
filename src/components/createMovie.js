import dom from '../dom.js';
import deleteMovieHandler from '../handlers/deleteMovieHandler.js';

const createMovie = (movieData) => {
    const id = movieData.id;
    // create container
    const container = document.createElement('div');
    container.classList.add('image-box');
    container.id = movieData.id;

    // create img
    const img = document.createElement('img');
    img.src = movieData.src;
    img.alt = movieData.title;

    // create title
    const title = document.createElement('h6');
    title.innerText = movieData.title;

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'deleteBtn';

    deleteButton.addEventListener('click', () => {
        deleteMovieHandler(id);
    });

    // edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'editBtn';
    editButton.addEventListener('click', () => {
        dom.btn.innerText = 'Edit Movie';
        container.classList.add('selected');
    });

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    btnContainer.append(deleteButton, editButton);

    container.append(img, title, btnContainer);

    return container;
};

export default createMovie;
