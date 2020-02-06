class CookieService {
    getCookie(name) {
        let cookies = document.cookie.split("; ");
        const map = {};

        cookies.forEach(cookie => {
            const [name, value] = cookie.split("=");
            map.name = value;
        });

        return map[name];
    }

    setCookie(name, value, params = {}){

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
    }

    deleteCookie() {
        document.cookie = encodeURIComponent(name) + "=;max-age=-1";
    }
}
