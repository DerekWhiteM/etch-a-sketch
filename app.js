function createGrid() {

    const body = document.querySelector('body');

    const container = document.createElement('div');
    container.classList.add('container');

    for (let i = 0; i < (256); i++) {
        const div = document.createElement('div');
        div.classList.add('item');
        container.appendChild(div);
    }

    body.appendChild(container);

}

createGrid();