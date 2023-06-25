const gridContainerDiv = document.querySelector('.gridContainerDiv');
const gridDimensionsPromptButton = document.querySelector('.gridDimensionsPromptButton');

let size = 4;

function gridGenerator() {

    removeAllChildNodes(gridContainerDiv);

    size = Number(prompt("Enter size (4 to 100)"));

    for (let i = 0; i < size; i++) {

        let container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.flex = '1';
        gridContainerDiv.appendChild(container);

        let row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flex = '1';
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = 'black';
        });
        container.appendChild(row);
        for (let j = 0; j < size - 1; j++) {
            let row = document.createElement('div');
            row.style.display = 'flex';
            row.style.flex = '1';
            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = 'black';
            });
            container.appendChild(row);
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

gridDimensionsPromptButton.addEventListener('click', gridGenerator);