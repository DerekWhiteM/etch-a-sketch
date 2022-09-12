function init() {

    const body = document.querySelector('body');

    const button = document.createElement('button');
    button.textContent = "Change grid size";
    button.addEventListener('click', handleButtonClick);
    body.appendChild(button);

    createGrid(16);

    function createGrid(squaresPerSide) {

        const grid = `repeat(${squaresPerSide}, ${100 / squaresPerSide}fr)`;
        const container = document.createElement('div');
        container.classList.add('container');
        container.style.gridTemplateColumns = grid;
        container.style.gridTemplateRows = grid;

        for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
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

    function handleButtonClick() {
        const input = Number(prompt('Enter number of squares per side for the grid:'));
        if (input < 0) { return alert('Value cannot be less than 0') }
        if (input > 100) { return alert('Value cannot be greater than 100') }
        const container = document.querySelector('.container');
        container.remove();
        createGrid(input)
    }

}

init();