'use strict';

{
  function setUp() {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      displayPanel();
    });
  }

  function displayPanel() {
    const table = document.getElementById('table');
    if (table.hasChildNodes) {
      while(table.firstChild){
        table.removeChild(table.firstChild)
      }
    }
    const row = 4;
    const col = 4;
    const numberSource = createNumber();

    for (let i = 0; i < row; i++) {
      const panelRow = document.createElement('tr');
      for (let j = 0; j < col; j++) {
        const panel = document.createElement('td');
        panel.textContent = numberSource.splice(Math.floor(Math.random() * numberSource.length), 1)[0]
        panel.index = (i * row + j) + 1;
        console.log(panel.index);
        panelRow.appendChild(panel);
      }
      table.appendChild(panelRow);
    }
  }

  function createNumber() {
    const numberSource = [];
    const maxNumber = 16;
    for (let i = 1; i < maxNumber; i++) {
      numberSource.push(i);
    }
    return numberSource;
  }

  setUp();
}