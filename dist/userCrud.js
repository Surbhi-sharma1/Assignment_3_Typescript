import { data } from "./data.js";
export class UserCRUD {
    constructor() {
        this.data = data;
        this.header = [];
        this.tableContainer = document.querySelector('.Table');
        this.table = document.createElement("table");
        this.read();
    }
    create() {
        this.createTable();
    }
    createTable() {
        let table = document.createElement('table');
        table.id = 'table';
        let existableTable = document.getElementById('table');
        if (typeof (existableTable) != undefined && existableTable != null) {
            existableTable.parentNode.removeChild(existableTable);
        }
        let newHeader = table.insertRow();
        for (const [key, value] of Object.entries(data[0])) {
            var cell = newHeader.insertCell();
            var text = document.createTextNode(key);
            cell.appendChild(text);
        }
        for (let i = 0; i < data.length; i++) {
            let newRow = table.insertRow();
            newRow.id = i.toString();
            for (const [key, value] of Object.entries(data[i])) {
                let newCell = newRow.insertCell();
                let text = document.createTextNode(value.length > 0 ? value : "");
                newCell.append(text);
            }
            let cell1 = newRow.insertCell();
            let editButton = document.createElement('Button1');
            editButton.innerHTML = "Edit";
            editButton.id = "button1" + i;
            editButton.classList.add("editButton");
            cell1.appendChild(editButton);
            editButton.addEventListener('click', (e) => {
                if (editButton.innerHTML === 'Edit') {
                    editButton.innerHTML = 'Save';
                    return this.update(e);
                }
                else {
                    editButton.innerHTML = 'Edit';
                    return this.saveData(e);
                }
            });
            let cell2 = newRow.insertCell();
            let deleteButton = document.createElement('button2');
            deleteButton.innerHTML = 'Delete';
            deleteButton.id = 'button2' + i;
            deleteButton.classList.add("deleteButton");
            cell2.append(deleteButton);
            deleteButton.addEventListener('click', (e) => {
                if (deleteButton.innerHTML === 'Delete') {
                    return this.delete(e);
                }
                else {
                    deleteButton.innerHTML = 'Delete';
                    return this.cancel(e);
                }
            });
        }
        this.tableContainer.append(table);
    }
    cancel(e) {
        let tr = e.target.parentNode.parentNode;
        tr.contentEditable = false;
        let indexOfRow = tr.id;
        let Button1 = document.getElementById("button1" + indexOfRow);
        Button1.innerHTML = "Edit";
    }
    read() {
    }
    update(e) {
        let tr = e.target.parentNode.parentNode;
        let indexOfRow = tr.id;
        tr.contentEditable = true;
        console.log("tr value : " + tr);
        let button2 = document.getElementById("button2" + indexOfRow);
        button2.innerHTML = "Cancel";
    }
    saveData(e) {
        let tr = e.target.parentNode.parentNode;
        tr.contentEditable = false;
        let i = tr.id;
        let Button2 = document.getElementById('button2' + i);
        console.log(Button2);
        Button2.innerHTML = "Delete";
    }
    delete(e) {
        let targetButton = e.target;
        let tr = targetButton.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
    }
    refreshData() {
        this.createTable();
    }
}
