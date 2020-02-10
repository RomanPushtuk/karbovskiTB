import React, { Component } from 'react';

export class Lecture3 extends Component {
    intersection = (arr1, arr2) => {
        return new Set(arr1.filter(el => new Set(arr2).has(el)));
    };


    render() {
        return (
            <div>
                <div class="stackedit__html">
                    <p>get - метод отправки данных, в котором данные передаются внутри url строки, поэтому данные становятся видны пользователю.</p>
                    <p>post - метод отправки данных в котором данные скрыты от пользователя и не отображаются в url-строке</p>
                    <p>Сравнение объектов js.<br></br>
                        Самый простой способ сравнить объекты это проверить их ссылки с помощью ===<br></br>
                        Если требуется поверхностное сравнение то можно перебрать два объекта и сравнить значения.<br></br>
                        PureComponent в React использует механизм поверхностного сравнивания.<br></br>
                        Мы можем сами управлять механизмом перерендара используя метод жизненного цикла shuldComponentUpdate</p>
                </div>

                <button onClick={() => alert(Array.from(this.intersection([1,2,3,4], [4,5,6,7])))}>Пересечение [1,2,3,4] и [4,5,6,7]</button>
            </div>
        );
    }
}
