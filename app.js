function createGrid() {

    const body = document.querySelector('body');

    const container = document.createElement('div');
    container.classList.add('container');

    for (let i = 0; i < (256); i++) {
        const div = document.createElement('div');
        div.classList.add('item');
        div.addEventListener('mouseenter', handleMouseEnter);
        container.appendChild(div);
    }

    body.appendChild(container);

    function handleMouseEnter(e) {
        e.currentTarget.classList.add('marked');
    }

}

createGrid();