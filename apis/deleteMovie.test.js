import fetchMock from 'fetch-mock';
import data from '../src/data.js';
import deleteMovie from './deleteMovie.js';

describe('deleteMovie function', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    test('should send a DELETE request with the correct ID', async () => {
        const movieId = 123;
        const deleteUrl = `${data.baseUrl}/${movieId}`;

        fetchMock.delete(deleteUrl, {
            status: 200
        });

        const response = await deleteMovie(movieId);
        expect(response).toBeNull();
    });

    test('should handle errors gracefully', async () => {
        const movieId = 456;
        const deleteUrl = `${data.baseUrl}/${movieId}`;

        fetchMock.delete(deleteUrl, {
            status: 500
        });

        const response = await deleteMovie(movieId);
        expect(response).toBeNull();
    });
});
