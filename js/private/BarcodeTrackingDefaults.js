"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingDefaults = void 0;
var react_native_1 = require("react-native");
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
// tslint:disable-next-line:variable-name
var BarcodeTracking = react_native_1.NativeModules.ScanditDataCaptureBarcodeTracking;
// tslint:disable-next-line:variable-name
exports.BarcodeTrackingDefaults = {
    RecommendedCameraSettings: Camera_Related_1.CameraSettings
        .fromJSON(BarcodeTracking.Defaults.RecommendedCameraSettings),
    BarcodeTrackingBasicOverlay: {
        DefaultBrush: {
            fillColor: Common_1.Color
                .fromJSON(BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.DefaultBrush.fillColor),
            strokeColor: Common_1.Color
                .fromJSON(BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.DefaultBrush.strokeColor),
            strokeWidth: BarcodeTracking.Defaults.BarcodeTrackingBasicOverlay.DefaultBrush.strokeWidth,
        },
    }
};
//# sourceMappingURL=BarcodeTrackingDefaults.js.map