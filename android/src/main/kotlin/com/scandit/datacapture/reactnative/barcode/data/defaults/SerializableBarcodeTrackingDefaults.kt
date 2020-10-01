/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.barcode.data.defaults

import com.facebook.react.bridge.WritableMap
import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.utils.putData
import com.scandit.datacapture.reactnative.core.utils.writableMap

internal data class SerializableBarcodeTrackingDefaults(
    private val recommendedCameraSettings: SerializableCameraSettingsDefaults,
    private val trackingBasicOverlayDefaults: SerializableTrackingBasicOverlayDefaults
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_RECOMMENDED_CAMERA_SETTINGS, recommendedCameraSettings)
        putData(FIELD_TRACKING_BASIC_OVERLAY, trackingBasicOverlayDefaults)
    }

    companion object {
        private const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
        private const val FIELD_TRACKING_BASIC_OVERLAY = "BarcodeTrackingBasicOverlay"
    }
}

internal data class SerializableTrackingBasicOverlayDefaults(
    private val defaultBrush: SerializableBrushDefaults
) : SerializableData {
    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_BRUSH, defaultBrush)
    }

    companion object {
        private const val FIELD_BRUSH = "DefaultBrush"
    }
}
