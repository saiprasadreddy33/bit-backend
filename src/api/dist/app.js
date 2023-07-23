"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var identify_1 = require("./api/routes/identify");
var app = express_1["default"]();
app.use(body_parser_1["default"].json());
app.use(identify_1["default"]);
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});

//# sourceMappingURL=app.js.map
