"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Barcode_1 = require("./Barcode");
var BarcodeCaptureSession = /** @class */ (function () {
    function BarcodeCaptureSession() {
    }
    Object.defineProperty(BarcodeCaptureSession.prototype, "newlyRecognizedBarcodes", {
        get: function () {
            return this._newlyRecognizedBarcodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeCaptureSession.prototype, "newlyLocalizedBarcodes", {
        get: function () {
            return this._newlyLocalizedBarcodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarcodeCaptureSession.prototype, "frameSequenceID", {
        get: function () {
            return this._frameSequenceID;
        },
        enumerable: true,
        configurable: true
    });
    BarcodeCaptureSession.fromJSON = function (json) {
        var session = new BarcodeCaptureSession();
        session._newlyRecognizedBarcodes = json.newlyRecognizedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._newlyLocalizedBarcodes = json.newlyLocalizedBarcodes
            .map(Barcode_1.LocalizedOnlyBarcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    };
    return BarcodeCaptureSession;
}());
exports.BarcodeCaptureSession = BarcodeCaptureSession;
//# sourceMappingURL=BarcodeCaptureSession.js.map