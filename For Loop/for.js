const gridContainer = document.getElementById('grid-container');
const gridSize = 10; // Equal number of rows and columns

// Loop to create a grid with equal rows and columns
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        // Alternate colors between red and green
        if (i % 2 === 0) {
            gridItem.classList.add('green');
        }
        gridContainer.appendChild(gridItem);
    }
}

function enter() {
    alert("Mới bạn nhập số:");
}