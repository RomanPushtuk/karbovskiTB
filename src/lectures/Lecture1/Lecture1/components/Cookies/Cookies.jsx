import React from "react";
import "../../../../../App.css";

export function Cookies() {

    function getCookie(name) {
        let cookies = document.cookie.split("; ");
        const map = {};

        cookies.forEach(cookie => {
            const [name, value] = cookie.split("=");
            map[name] = value;
        });

        console.log(map[name]);
    }

    function setCookie(name, value, params = {}){
        if (params.expires instanceof Date) {
            params.expires = params.expires.toUTCString();
        }

        let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let key in params) {
            cookie += "; " + key;
            let value = params[key];
            if (value !== true) {
                cookie += "=" + value;
            }
        }

        document.cookie = cookie;
        console.log(document.cookie);
    }

    function deleteCookie(name) {
        document.cookie = encodeURIComponent(name) + "=;max-age=-1";
        console.log(document.cookie);
    }

    return (
        <div>
            <button onClick={() => setCookie("Roma", "ReactDeveloper", {"max-age" : 10})}> Добавить куку </button>
            <button onClick={() => getCookie("Roma")}> Получить куку </button>
            <button onClick={() => deleteCookie("Roma")}> Удалить куку </button>
        </div>
    );
}
