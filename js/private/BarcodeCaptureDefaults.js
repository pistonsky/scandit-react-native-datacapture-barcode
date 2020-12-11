"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCaptureDefaults = void 0;
var react_native_1 = require("react-native");
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
// tslint:disable-next-line:variable-name
var BarcodeCapture = react_native_1.NativeModules.ScanditDataCaptureBarcodeCapture;
// tslint:disable-next-line:variable-name
exports.BarcodeCaptureDefaults = {
    RecommendedCameraSettings: Camera_Related_1.CameraSettings
        .fromJSON(BarcodeCapture.Defaults.RecommendedCameraSettings),
    BarcodeCaptureSettings: {
        codeDuplicatedFilter: BarcodeCapture.Defaults.BarcodeCaptureSettings.codeDuplicatedFilter,
    },
    BarcodeCaptureOverlay: {
        DefaultBrush: {
            fillColor: Common_1.Color
                .fromJSON(BarcodeCapture.Defaults.BarcodeCaptureOverlay.DefaultBrush.fillColor),
            strokeColor: Common_1.Color
                .fromJSON(BarcodeCapture.Defaults.BarcodeCaptureOverlay.DefaultBrush.strokeColor),
            strokeWidth: BarcodeCapture.Defaults.BarcodeCaptureOverlay.DefaultBrush.strokeWidth,
        },
    }
};
//# sourceMappingURL=BarcodeCaptureDefaults.js.map