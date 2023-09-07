import dom from '../dom.js';
import addMovieHandler from '../handlers/addMovieHandler.js';

const addMovieEvent = () => {
    dom.btn.addEventListener('click', (e) => {
        addMovieHandler(e);
    });
};

export default addMovieEvent;
