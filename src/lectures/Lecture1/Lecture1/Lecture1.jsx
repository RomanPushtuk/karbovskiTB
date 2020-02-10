import React, { Component } from 'react';
import { Table } from "./components/Table";
import { Git } from "./components/Git";
import { Cookies } from "./components/Cookies";
import vanila from "./vanilaDelegation.js"

import '../../../App.css';


export class Lecture1 extends Component {
    componentDidMount() {
        vanila();
    }

    render() {
        return (
            <div>
                <h2>Задание1 - реализовать делегирование в реакт js</h2>
                <Table/>
                <h2>Задание2 - реализовать делегирование на ванильном js</h2>
                <button id="startInsertVanila">Начать ванильное добавление</button>
                <button id="stopInsertVanila">Закончить ванильное добавление</button>
                <table id="table">
                    <tbody>
                        <tr>
                            <td>Текст</td>
                            <td>
                                <button data-action="edit">Редактировать</button>
                                <button data-action="delete">Удалить</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Текст</td>
                            <td>
                                <button data-action="edit">Редактировать</button>
                                <button data-action="delete">Удалить</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2>Задание3 - найчится работать с куками </h2>
                <Cookies />
                <h2>Задание4 - Теория по гит</h2>
                <Git/>
            </div>
        );
    }
}
