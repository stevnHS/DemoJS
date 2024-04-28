const table = document.querySelector("#table");
for (let i = 1; i <= 9; i++) {
  const tr = document.createElement("tr");
  for (let j = 1; j <= 9; j++) {
    const td = document.createElement("td");
    if (i * j >= 10) {
      td.innerHTML = `${i}*${j}=${i * j}`;
    } else {
      td.innerHTML = `${i}*${j}=${i * j}`;
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
