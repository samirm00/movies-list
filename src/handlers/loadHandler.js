import dom from '../dom.js';
import getMovies from '../../apis/getMovies.js';
import createMovie from '../components/createMovie.js';

const loadHandler = async () => {
    const movies = await getMovies();
    if (movies) {
        movies.forEach((movieData) => {
            const movieDom = createMovie(movieData);
            dom.movies.append(movieDom);
        });
    }
};

export default loadHandler;
