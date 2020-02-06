import React from "react";
import { Row } from "../Row";
import "../../../../../App.css";

const records = [
    {
        id: 1,
        text: "Text1"
    },
    {
        id: 2,
        text: "Text2"
    },
    {
        id: 3,
        text: "Text3"
    }
];

export function Table () {

    const editText = (target) => {
        const { prompt } = window;
        const text = prompt("Введите текст");

        target.parentNode.previousElementSibling.innerText = text;
    };

    const deleteRecord = (target) => {
        const { confirm } = window;
        const result = confirm("Действительно удалить?");

        if (result) {
            target.parentNode.parentNode.remove();
        }
    };

    const handlerClick = (event) => {
        const { target } = event;
        const { action } = target.dataset;

        switch (action) {
            case "edit":
                return editText(target);
            case "delete":
                return deleteRecord(target);
        }
    };

    return (
        <table onClick={handlerClick}>
            <tbody>
            {records.map(({id, text}) => {
                return <Row key={id} text={text} />
            })}
            </tbody>
        </table>
    )
}
