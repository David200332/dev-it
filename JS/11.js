const tbody = document.querySelector('tbody');
const removeBtn = document.getElementById('btnRemove')
const addBtn = document.getElementById('btnInsert');

const addRow = () => {
    const rows = document.getElementById('sampleTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr').length;
    const cells = document.getElementById('sampleTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td').length;
    const tbody = document.getElementById('sampleTable').getElementsByTagName("tbody")[0]
    const row = document.createElement("tr")

    for(let i = 0; i <= cells - 1; i++){
        let x = row.insertCell(i);
        x.innerHTML = `Row${rows+1} cell${i + 1}`;
    }
    tbody.appendChild(row);
}


const removeRow = () => {
    tbody.removeChild(tbody.lastElementChild)
}

removeBtn.addEventListener('click', removeRow)
addBtn.addEventListener('click', addRow)
