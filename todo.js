let todoObjectList = [];
let todoListString = '';

function printOutBoth() {
    todoListString = '';

    for (let index = 0; index < todoObjectList.length; index++) {
        const element = `
            <div>${todoObjectList[index].name}</div>
            <div>${todoObjectList[index].dueDate}</div>
            <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
        `;

        todoListString = todoListString + element;
    }

    document.querySelector('.display-list-elements').innerHTML = todoListString;
}

function whenYouClickAdd() {
    const choreName = document.querySelector('.chore-input-textbox').value;
    const dueDate = document.querySelector('.date-input-box').value;

    if (!choreName.trim()) {
        return;
    }

    todoObjectList.push({ name: choreName, dueDate: dueDate });
    printOutBoth();

    document.querySelector('.chore-input-textbox').value = '';
}

function deleteTask(index) {
    todoObjectList.splice(index, 1);
    printOutBoth();
}

function clearPlaceHolder(element) {
    element.placeholder = '';
}

function restorePlaceHolder(element, text) {
    if (element.value.trim() === '') {
        element.placeholder = text;
    }
}

function initializeTodoApp() {
    const taskInput = document.querySelector('.chore-input-textbox');
    const dateInput = document.querySelector('.date-input-box');
    const addButton = document.querySelector('.add-button');

    if (!taskInput || !dateInput || !addButton) {
        return;
    }

    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            whenYouClickAdd();
        }
    });

    dateInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            whenYouClickAdd();
        }
    });

    addButton.addEventListener('click', whenYouClickAdd);
}

document.addEventListener('DOMContentLoaded', initializeTodoApp);