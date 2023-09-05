const createLoader = () => {
    const container = document.createElement('div');
    container.className = 'loader-container';

    const loader = document.createElement('div');
    loader.className = 'loader';

    container.append(loader);
    return container;
};

export default createLoader;