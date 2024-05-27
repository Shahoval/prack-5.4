document.addEventListener("DOMContentLoaded", function() {
    function calculate() {
        const startX = parseFloat(document.getElementById('startX').value);
        const endX = parseFloat(document.getElementById('endX').value);
        const stepX = parseFloat(document.getElementById('stepX').value);
        const resultsTable = document.getElementById('resultsTable');
        
        resultsTable.innerHTML = ''; // Очистити таблицю перед новими розрахунками
        
        for (let x = startX; x <= endX; x += stepX) {
            let Z;
            if (x < 2) {
                Z = Math.sin(3 * x) + 1;
            } else if (x === 2) {
                Z = Math.cos(x) ** 2;
            } else if (x > 2) {
                Z = Math.log(x) + Math.sqrt(x);
            }

            const row = document.createElement('tr');
            const cellX = document.createElement('td');
            const cellZ = document.createElement('td');
            
            cellX.textContent = x.toFixed(2);
            cellZ.textContent = Z.toFixed(4);
            
            row.appendChild(cellX);
            row.appendChild(cellZ);
            resultsTable.appendChild(row);
        }
    }

    // Додаємо обробник події до кнопки
    document.querySelector('button').addEventListener('click', calculate);
});
