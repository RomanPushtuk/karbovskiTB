import React, { Component } from "react";
import { Row } from "../Row";
import "../../../../../App.css";

const initialRecords = [
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

export class Table extends Component{
    interval = null;
    counter = 4;

    state = {
        records: [...initialRecords]
    };

    startInterval = () => {
        this.interval = setInterval(() => {
            const id = this.counter++;

            this.setState({records : [...this.state.records, {id, text: `Текст${id}`}]})
        }, 1000)
    };

    stopInterval = () => {
        clearTimeout(this.interval);
    };

    editText = (id) => {
        const { prompt } = window;
        const text = prompt("Введите текст");

        const newRecords = this.state.records.map(record => {
            if(record.id === Number(id)){
                record.text = text;
                return record;
            }
            return record;
        });
        this.setState({records : [...newRecords] })
    };

    deleteRecord = (id) => {
        const { confirm } = window;
        const result = confirm("Действительно удалить?");

        if (result) {
            this.setState({ records : [...this.state.records.filter(record => record.id !== Number(id))] })
        }
    };

    handlerClick = (event) => {
        const { target } = event;
        const { action, id } = target.dataset;

        switch (action) {
            case "edit":
                return this.editText(id);
            case "delete":
                return this.deleteRecord(id);
            default:
                return false;
        }
    };

    renderRow = (record) => {
        const { id, text } = record;
        return <Row key={id} id={id} text={text} />
    };

    render(){
        const { records } = this.state;
        return (
            <div>
                <button onClick={this.startInterval}>Начать реактивное добавление</button>
                <button onClick={this.stopInterval}>Закончить реактивное добавление</button>
                <table onClick={this.handlerClick}>
                    <tbody>
                        {records.map(this.renderRow)}
                    </tbody>
                </table>
            </div>
        )
    }
}
