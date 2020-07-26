"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prüfungsaufgabe = void 0;
const Http = require("http");
const url = require("url");
var Prüfungsaufgabe;
(function (Prüfungsaufgabe) {
    console.log("Starte Server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Server online");
    }
    function handleRequest(_request, _response) {
        console.log("Ice, Ice, Baby");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let link = url.parse(_request.url, true);
            console.log("Bestellung eingegangen");
            _response.write("Bestellung eingegangen");
            _response.end();
        }
    }
})(Prüfungsaufgabe = exports.Prüfungsaufgabe || (exports.Prüfungsaufgabe = {}));
//# sourceMappingURL=server.js.map