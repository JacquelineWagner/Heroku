console.log("Server starting");

import Http = require("http");
import Url = require("url");

interface AssocStringString {
    [key: string]: string;
}

let port: number = process.env.PORT;
if (port == undefined)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);

function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    console.log(_request.url);
    let query: AssocStringString = Url.parse(_request.url, true).query;
    console.log(query);
    let key: string;
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");

    _response.write("<!DOCTYPE html><html><head><title>Iceshop</title><meta charset='utf8'></head><body>");
    _response.write("Ihre Bestellung" + ":" + "<br>" + "<br>");

    for (key in query) {

        if (query[key] == "0") {
            continue;
        }


        _response.write(key + ":" + " " + query[key] + "<br>");


    }
    //    _response.setHeader("Access-Control-Allow-Origin", "*");
    //    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write("<br>" + "Vielen Dank f�r Ihre Bestellung!");

    _response.write("</body></html>");
    _response.end();
}