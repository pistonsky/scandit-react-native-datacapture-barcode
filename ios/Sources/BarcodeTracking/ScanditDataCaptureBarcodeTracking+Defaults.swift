/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeTracking {
    override func constantsToExport() -> [AnyHashable: Any]! {
        return ["Defaults": defaults]
    }

    var defaults: [String: Any] {
        return barcodeTrackingDefaults
    }

    var recommendedCameraSettings: [AnyHashable: Any] {
        return BarcodeTracking.recommendedCameraSettings.rntsdc_dictionary
    }

    var barcodeTrackingDefaults: [String: Any] {
        return ["RecommendedCameraSettings": recommendedCameraSettings,
                "BarcodeTrackingBasicOverlay": barcodeTrackingBasicOverlayDefaults]
    }

    var barcodeTrackingBasicOverlayDefaults: [String: Any] {
        return ["DefaultBrush": BarcodeTrackingBasicOverlay.defaultBrush.rntsdc_dictionary]
    }
}
