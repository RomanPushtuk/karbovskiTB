import React from 'react';
import "../../../../../App.css";

export function Git() {
    return (
    <div className="stackedit__html">
        <h4 id="посмотреть-историю-коммита">Посмотреть историю коммита</h4>
        <p><code>git log</code> - просмотр истории коммитов</p>
        <p>Дополнительные флаги</p>
        <ul>
            <li><code>git log --path</code> - показывает разницу path внесенную в коммиты</li>
            <li><code>git log --path -2</code> - выводит информацию о 2ух последних коммитах.</li>
            <li><code>git log --stat</code> - сокращенная статистика по коммитам.</li>
            <li><code>git log --pretty</code> - меняет формат вывода информации + опции <code>short</code>, <code>full</code> и <code>fuller</code></li>
        </ul>
        <p>Полезные опции для  <code>git log --pretty=format:"опции</code> отображает наиболее полезные опции для изменения формата.</p>
        <ul>
            <li><code>%H</code> - Хеш коммита</li>
            <li><code>%h</code> - Сокращенный хеш коммита</li>
            <li><code>%T</code> - Хеш дерева</li>
            <li><code>%t</code>- Сокращенный хеш дерева</li>
            <li><code>%P</code> - Хеш родителей</li>
            <li><code>%p</code> - Сокращенный хеш родителей</li>
            <li><code>%an</code> - Имя автора</li>
            <li><code>%ae</code> - Электронная почта автора</li>
            <li><code>%ad</code> - Дата автора (формат даты можно задать опцией --date=option)</li>
            <li><code>%ar</code> - Относительная дата автора</li>
            <li><code>%cn</code> - Имя коммитера</li>
            <li><code>%ce</code> - Электронная почта коммитера</li>
            <li><code>%cd</code> - Дата коммитера</li>
            <li><code>%cr</code> - Относительная дата коммитера</li>
            <li><code>%s</code> - Содержание</li>
        </ul>
        <p>Опции <code>oneline</code> и <code>format</code> являются особенно полезными с опцией <code>--graph</code> команды <code>log</code>. С этой опцией вы сможете увидеть небольшой граф в формате ASCII, который показывает текущую ветку и историю слияний:</p>
        <h4 id="как-временно-убрать-изменения-в-git-">Как временно убрать изменения в git ?</h4>
        <p>
            <code>git stash</code> - положить свои изменения в буфер<br></br>
            <code>git stash list</code> - просмотр содержимого stash<br></br>
            <code>git stash apply</code> - вытягивает последние изменения<br></br>
            <code>git stash pop</code> - не только вытянет последние изменения из stash но и удалит последний из списка<br></br>
            <code>git stash pop &lt;имя stash&gt;</code> - вытягивает из stash`a нужные нам изменения<br></br>
        </p>
        <ul>
            <li><code>git stash drop &lt;имя stash&gt;</code> - удалить из stash</li>
        </ul>
    </div>
)
}
