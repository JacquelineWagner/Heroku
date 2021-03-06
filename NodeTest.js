"use strict";
console.log("Server starting");
const Http = require("http");
const Url = require("url");
let port = process.env.PORT;
if (port == undefined)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    console.log(_request.url);
    let query = Url.parse(_request.url, true).query;
    console.log(query);
    let key;
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
//# sourceMappingURL=NodeTest.js.map