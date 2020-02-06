﻿#### Как изменить имя пользователя и email автора коммита

Для изменения имени автора нужно отредактировать конфиг git
- `git config --global --list` - просмотр конфига
- `git congit user.name "<name>"` - изменить имя
- `git congit user.email "<email>"` - изменить email

#### Как влить в ветку только 1 коммит из другой ветки? 

`git cherry-pick <hash>` - добавляет указанный коммит в текущую ветку

`git cherry-pick <hash> --no-commit` - добавить изменения в рабочую директорию, и в индекс.

Опции доступные во время копирования
- `--abort` - отменяет cherry-pic
- `--continue` - продолжить копировать (после исправления конфликта)
- `--quit` - остановиться на месте, и сбросить запомненное состояние

#### Как отменить коммит? Как объединить коммиты в один? Попробовать на практике.

- `git checkout -- .` - отменить все текущие изменения, которые не добавлены в index
- `git reset .` - выбрасывает все изменения из индекса, ну а потом можно сделать `git checkout` и отменить изменения

Но если мы уже закомитили изменения у нас есть 2 пути, это жесткий и мягкий ресет.
Жесткий ресет отменят коммит и не оставляет изменений
- `git reset --hard HEAD^1` - отменить один коммит, и отменить все измения
-  `git reset --soft HEAD^1` - отменить один коммит, но оставить изменения
