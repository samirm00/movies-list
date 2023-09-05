import dom from '../dom.js';
import getMovies from '../../apis/getMovies.js';
import createMovie from '../components/createMovie.js';
import sortMovies from '../utils/sortMovies.js';

const loadHandler = async () => {
    const movies = await getMovies();
    if (movies) {
        const sortedMovies = sortMovies(movies);
        sortedMovies.forEach((movieData) => {
            const movieDom = createMovie(movieData);
            dom.movies.append(movieDom);
        });
    }
};

export default loadHandler;
