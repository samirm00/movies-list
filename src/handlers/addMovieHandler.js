import dom from '../dom.js';
import addMovie from '../../apis/addMovie.js';
import updateMovie from '../../apis/updateMovie.js';
import createMovie from '../components/createMovie.js';

const addMovieHandler = async (e) => {
    e.preventDefault();

    const newMovie = {
        title: dom.titleInput.value,
        src: dom.sourceInput.value
    };

    if (dom.btn.innerText === 'Add movie') {
        const movieDom = createMovie(newMovie);
        dom.movies.prepend(movieDom);
        const movieAdd = await addMovie(newMovie);
    } else {
        dom.btn.innerText = 'Add Movie';
        const movieDom = document.querySelector('.selected');
        movieDom.querySelector('img').src = newMovie.src;
        movieDom.querySelector('h6').innerText = newMovie.title;
        const id = Number(movieDom.id);
        await updateMovie(id, newMovie);
        movieDom.classList.remove('selected');
    }
};

export default addMovieHandler;
