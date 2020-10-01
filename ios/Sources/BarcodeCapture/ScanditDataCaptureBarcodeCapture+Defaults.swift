/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditBarcodeCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureBarcodeCapture {

    override func constantsToExport() -> [AnyHashable: Any]! {
        return ["Defaults": defaults]
    }

    var defaults: [String: Any] {
        return barcodeCaptureDefaults
    }

    var recommendedCameraSettings: [AnyHashable: Any] {
        return BarcodeCapture.recommendedCameraSettings.rntsdc_dictionary
    }

    var barcodeCaptureDefaults: [String: Any] {
        return ["RecommendedCameraSettings": recommendedCameraSettings,
                "BarcodeCaptureOverlay": barcodeCaptureOverlayDefaults,
                "BarcodeCaptureSettings": barcodeCaptureSettings]
    }

    var barcodeCaptureOverlayDefaults: [String: Any] {
        return ["DefaultBrush": BarcodeCaptureOverlay.defaultBrush.rntsdc_dictionary]
    }

    var barcodeCaptureSettings: [AnyHashable: Any] {
        let barcodeCaptureSettings = BarcodeCaptureSettings()
        return ["codeDuplicatedFilter": Int(barcodeCaptureSettings.codeDuplicateFilter * 1000)]
    }
}
