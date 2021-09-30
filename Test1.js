const http = require("http");

http.createServer(function (request, response) {
    response.end("<b>Test 1</b>");
}).listen(3000,"127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3000")
});