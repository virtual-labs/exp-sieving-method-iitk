const net = document.querySelector(".net");

// function to add dynamic net filter size for different seive sizes
function buildNet(table, rows, cols) {
  let rowsArray = [];
  for (let i = 0; i < rows - 1; i++) {
    table.insertRow(-1);
    rowsArray.push(table.insertRow(-1));
  }

  for (let i = 0; i < rowsArray.length; i++) {
    for (let j = 0; j < cols; j++) {
      rowsArray[i].insertCell(-1);
    }
  }
}

// @params (element name, rows, columns)
buildNet(net, 10, 40);
