const table = document.getElementById("table")

table.addEventListener("click", handlerClick);

function handlerClick(event) {
    const { target } = event;
    const action = target.dataset.action;

    switch (action) {
        case "edit":
            return textEdit(target);
        case "delete":
            return deleteRecord(target);
    }
}

function editText(target) {
    const text = prompt("Введите текст");

    target.parentNode.previousElementSibling.innerText = text;
}

function deleteRecord(target) {
    const result = confirm("Действительно удалить?");

    if (result) {
        target.parentNode.parentNode.remove();
    }
}
