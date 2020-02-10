import React from 'react';
import "../../../../../App.css";

export function Row({id, text}) {
    return (
        <tr>
            <td>{text}</td>
            <td>
                <button data-action="edit" data-id={id}>Редактировать</button>
                <button data-action="delete" data-id={id}>Удалить</button>
            </td>
        </tr>
    );
}
