"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
//http wird importiert und der Variable Http zugewiesen
const Http = require("http");
const Url = require("url");
//export ist bedeutungslos, typescript braucht das, weil es davon ausgeht, dass durch import ein neues Modul erzeugt werden soll
var A08Server;
(function (A08Server) {
    console.log("Starting server"); //Starting server wird in der Konsole ausgegeben
    let port = Number(process.env.PORT); //Variable port vom Typ number wird deklariert 
    if (!port) // Wenn der Port nicht gleich das ist, als was er oben deklariert wurde, ist er 8100
        port = 8100;
    let server = Http.createServer(); //server vom Typ Http.Server wird erzeugt und führt die Funktion Http.createServer() aus
    server.addListener("request", handleRequest); //server bekommt einen event Listener, der bei request reagiert und die Funktion handleRequest ausführt
    server.addListener("listening", handleListen); //server bekommt noch einen event Listener, der bei listening reagiert und dei Funktion handleListen ausführt
    server.listen(port); //der port bekommt einen listener
    function handleListen() {
        console.log("Listening"); //Listening wird in der Konsole ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //I hear voices wird in der Konsole ausgegeben
        console.log(""); //"" wird in der Konsole ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Name und Wert für das Header Objekt werden gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Name und Wert für das Header Objekt werden gesetzt
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let abschnitt = url.pathname;
            if (abschnitt == "/html") {
                for (let brechstange in url.query) {
                    //console.log(brechstange + ": " + url.query[brechstange] + "<br/>");
                    _response.write(brechstange + ": " + url.query[brechstange] + "<br/>");
                }
            }
            else if (abschnitt == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        //_response.write(_request.url); //die url, bzw. der query path string wird geschrieben
        //console.log(_request.url); //und in der Konsole ausgegeben
        _response.end(); //beendet Antwort des Servers
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map