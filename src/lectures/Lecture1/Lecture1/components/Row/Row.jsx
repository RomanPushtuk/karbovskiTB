import React from 'react';
import "../../../../../App.css";

export function Row({text}) {
    return (
        <tr>
            <td>{text}</td>
            <td>
                <button data-action="edit">Редактировать</button>
                <button data-action="delete">Удалить</button>
            </td>
        </tr>
    );
}
