"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var identifyView = {
    sendIdentifyResponse: function (res, primaryContactId, emails, phoneNumbers, secondaryContactIds) {
        res.json({
            contact: {
                primaryContatctId: primaryContactId,
                emails: __spreadArrays([emails[0]], emails.slice(1)),
                phoneNumbers: __spreadArrays([phoneNumbers[0]], phoneNumbers.slice(1)),
                secondaryContactIds: secondaryContactIds
            }
        });
    }
};
exports["default"] = identifyView;

//# sourceMappingURL=identifyView.js.map
