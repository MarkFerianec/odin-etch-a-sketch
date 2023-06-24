// const gridContainerDiv = document.querySelector('.gridContainerDiv');
// const row1container = document.querySelector('.row1container');
// const row2container = document.querySelector('.row2container');
// const row3container = document.querySelector('.row3container');

const gridContainerDiv2 = document.querySelector('.gridContainerDiv2');
// for loop through an array and assign the ith value of the array
// to a variable like let x = row[i] throughout the array

// const div = document.createElement('div');
// div.textContent = 'Hello World!'

// gridContainerDiv.appendChild(div);

// let divArray = [];

// function setGridSize(size) {
//     for (let i = 0; i < size; i++) {
//         divArray.push(i);
//     }
// }

// setGridSize(4);

// console.log(divArray);

let size = 16;

// for (let i = 0; i < size; i++) {
//     let row1 = document.createElement('div');
//     row1.textContent = 'row,';
//     row1container.appendChild(row1);
// }

// for (let i = 0; i < size; i++) {
//     let row2 = document.createElement('div');
//     row2.textContent = 'row2,';
//     row2container.appendChild(row2);

// }

// for (let i = 0; i < size; i++) {
//     let row3 = document.createElement('div');
//     row3.textContent = 'row3,';
//     row3container.appendChild(row3);
// }

// gridContainerDiv2 container
// for (let i = 0; i < size; i++) {
//     let container = document.createElement('div');
//     gridContainerDiv2.appendChild(container);
//     console.log(container);
// }

for (let i = 0; i < size; i++) {

    let container = document.createElement('div');
    // container.style.maxWidth = '300px';         //This is probably targeting wrong
    // container.style.maxHeight = '300px';        //containers right?
    // container.style.alignSelf = 'center';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.flex = '1'; //might be incorrect value(s) for grow, shrink and basis
    gridContainerDiv2.appendChild(container);

    let row = document.createElement('div');
    row.style.border = 'solid 1px';
    // row.style.padding = '10px';
    row.style.display = 'flex';
    row.style.flex = '1';          // added this
    // row.style.maxWidth = '15px';
    // row.style.maxHeight = '15px';
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = 'black';
    });
    container.appendChild(row);
    for (let j = 0; j < size - 1; j++) {
        let row = document.createElement('div');
        row.style.border = 'solid 1px';
        // row.style.padding = '10px';
        row.style.display = 'flex';
        row.style.flex = '1'; //might be wrong   // added this
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = 'black';
        });
        container.appendChild(row);
    }
}

// for (let i = 0; i < size; i++) {
//     let container = document.createElement('div');
//     gridContainerDiv2.appendChild(container);
//     console.log(container);
//     let row = document.createElement('div');
//     row.textContent = '1';
//     container.appendChild(row);
//     for (let j = 0; j < size - 1; j++) {
//         let row = document.createElement('div');
//         // row.textContent = '1';
//         row.style.border = 'solid 1px';
//         row.style.padding = '10px';
//         // row.onmouseover = 'black';
//         // row.style['onmouseover'] = 'black';
//         // row.style.onmouseover = 'black';
//         row.addEventListener('mouseover', () => {
//             row.style.backgroundColor = 'black';
//         });
//         container.appendChild(row);
//     }
// }

// for (let i = 0; i < size; i++) {
//     let row = document.createElement('div');
//     row.textContent = 'row,+';
//     gridContainerDiv.appendChild(row);
//     for (let j = 0; j < size; j++) {
//         let row = document.createElement('div');
//         row.textContent = 'row,-';
//         gridContainerDiv.appendChild(row);
//     }
// }


// for (let i = 0; i < divArray.length; i++) {
//     let row = document.createElement('div');
//     row.textContent = 'row,'
//     row.style.color = 'blue';
//     gridRows.appendChild(row);
//     for (let j = 0; j < divArray.length - 1; j++) {
//         let column = document.createElement('div');
//         column.textContent = 'col,';
//         column.style.color = 'red';
//         gridColumns.appendChild(column);
//     }
// }


// for (let i = 0; i < divArray.length; i++) {
//     let row = document.createElement('div');
//     row.textContent = 'row,'
//     row.style.color = 'blue';
//     gridRows.appendChild(row);
// }
// for (let j = 0; j < divArray.length; j++) {
//     let column = document.createElement('div');
//     column.textContent = 'col,';
//     column.style.color = 'red';
//     gridColumns.appendChild(column);
// }


// for (let i = 0; i < divArray.length; i++) {
//     let row = document.createElement('div');
//     row.textContent = 'row'
//     row.style.color = 'blue';
//     // row.style.display = 'flex';
//     // row.style.direction = 'column';
//     gridContainerDiv.appendChild(row);
//     for (let j = 0; j < divArray.length - 1; j++) {
//         let column = document.createElement('div');
//         column.textContent = 'column';
//         column.style.color = 'red';
//         // column.style.display = 'flex';
//         // column.style.direction = 'column';
//         gridContainerDiv.appendChild(column);
//     }
// }


// for (let i = 0; i < divArray.length + 1; i++) {
//     let row = document.createElement('div');
//     row.textContent = 'row'
//     row.style.color = 'blue'; 
//     // row.style.display = 'flex';
//     gridContainerDiv.appendChild(row);
//     for (let j = 0; j < divArray.length + 1; j++) {
//         let column = document.createElement('div');
//         column.textContent = 'column';
//         column.style.color = 'red'; 
//         // column.style.display = 'flex';
//         gridContainerDiv.appendChild(column);
//     }
// }


// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }


// for (let j = 0; j < divArray.length + 1; j++) {
//     console.log(j);
// }


// We are going to write code that loops through a length of an array
// then for the length we will make divs that matches what user inputs
// perfect square of divs. i.e. 3x3, 4x4, 5x5 squares.