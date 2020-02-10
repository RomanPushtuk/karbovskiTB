export default function() {
    let interval;
    const table = document.getElementById("table")
    const startInsertVanila = document.getElementById("startInsertVanila");
    const stopInsertVanila = document.getElementById("stopInsertVanila");

    startInsertVanila.addEventListener("click", startInterval);
    stopInsertVanila.addEventListener("click", stopInterval);

    function createRow() {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let buttonEdit = document.createElement('button');
        let buttonDel = document.createElement('button');

        td1.innerText = "Текст";

        buttonEdit.innerText = "Редактировать";
        buttonEdit.setAttribute("data-action", "edit");
        buttonDel.innerText = "Удалить";
        buttonDel.setAttribute("data-action", "delete");

        td2.append(buttonEdit);
        td2.append(buttonDel);

        tr.append(td1);
        tr.append(td2);

        return tr;
    }

    function startInterval(){
        interval = setInterval(() => {
            const tr = createRow();
            table.append(tr);
        }, 1000)
    }

    function stopInterval(){
        clearTimeout(interval);
    }



    if (table) {
        table.addEventListener("click", handlerClick);
    }

    function handlerClick(event) {
        const { target } = event;
        const action = target.dataset.action;

        switch (action) {
            case "edit":
                return textEdit(target);
            case "delete":
                return deleteRecord(target);
            default: return false
        }
    }

    function textEdit(target) {
        const { prompt } = window;
        const text = prompt("Введите текст");

        target.parentNode.previousElementSibling.innerText = text;
    }

    function deleteRecord(target) {
        const { confirm } = window;
        const result = confirm("Действительно удалить?");

        if (result) {
            target.parentNode.parentNode.remove();
        }
    }
}
