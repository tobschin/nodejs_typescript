"use strict";
// https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello, TypeScript Express!');
});
app.post('/', function (req, res) {
    var body = req.body;
    console.log(req);
    res.json(body);
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
