"use strict";
exports.__esModule = true;
var identifyValidator = {
    validateIdentifyRequest: function (req, res, next) {
        var _a = req.body, email = _a.email, phoneNumber = _a.phoneNumber;
        if (!email && !phoneNumber) {
            return res.status(400).json({ error: 'Please provide either email or phoneNumber.' });
        }
        next();
    }
};
exports["default"] = identifyValidator;

//# sourceMappingURL=identifyValidator.js.map
