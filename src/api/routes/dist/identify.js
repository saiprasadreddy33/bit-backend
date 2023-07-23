"use strict";
exports.__esModule = true;
var express_1 = require("express");
var identifyController_1 = require("../controllers/identifyController");
var identifyValidator_1 = require("../validators/identifyValidator");
var router = express_1["default"].Router();
// /identify Endpoint Implementation
router.post('/identify', identifyValidator_1["default"].validateIdentifyRequest, identifyController_1["default"].identify);
exports["default"] = router;

//# sourceMappingURL=identify.js.map
