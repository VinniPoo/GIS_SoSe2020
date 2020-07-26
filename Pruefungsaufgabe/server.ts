import * as Http from "http";
import * as url from "url";

export namespace Prüfungsaufgabe {
    console.log("Starte Server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);



    function handleListen(): void {
        console.log("Server online");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Ice, Ice, Baby");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let link: url.UrlWithParsedQuery = url.parse(_request.url, true);

            console.log("Bestellung eingegangen");

            _response.write("Bestellung eingegangen");

            _response.end();
        }

    }
}