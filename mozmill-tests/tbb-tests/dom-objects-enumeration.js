// This test enumerates all DOM objects exposed in the global namespace
// and produce an error if one of them is not in the expected list.
//
// This test has been suggested in the iSEC partners' report:
// https://blog.torproject.org/blog/isec-partners-conducts-tor-browser-hardening-study

"use strict";

var {expect} = require("../mozilla-mozmill-tests/lib/assertions");

// The list of expected DOM objects
const interfaceNamesInGlobalScope =
  [
    "__XBLClassObjectMap__",
    "addEventListener",
    "adjustToolbarIconArrow",
    "alert",
    "AnalyserNode",
    "AnimationEvent",
    "Application",
    "applicationCache",
    "ArchiveRequest",
    "Array",
    "ArrayBuffer",
    "AsyncScrollEventDetail",
    "atob",
    "Attr",
    "Audio",
    "AudioBuffer",
    "AudioBufferSourceNode",
    "AudioContext",
    "AudioDestinationNode",
    "AudioListener",
    "AudioNode",
    "AudioParam",
    "AudioProcessingEvent",
    "AudioStreamTrack",
    "BarProp",
    "BatteryManager",
    "BeforeUnloadEvent",
    "BiquadFilterNode",
    "Blob",
    "BlobEvent",
    "blur",
    "Boolean",
    "BoxObject",
    "BrowserFeedWriter",
    "btoa",
    "CameraCapabilities",
    "CameraControl",
    "CameraManager",
    "cancelAnimationFrame",
    "CanvasGradient",
    "CanvasPattern",
    "CanvasRenderingContext2D",
    "captureEvents",
    "CaretPosition",
    "CDATASection",
    "ChannelMergerNode",
    "ChannelSplitterNode",
    "CharacterData",
    "ChromeMessageBroadcaster",
    "ChromeMessageSender",
    "ChromeWindow",
    "ChromeWorker",
    "clearInterval",
    "clearTimeout",
    "ClientInformation",
    "ClientRect",
    "ClientRectList",
    "ClipboardEvent",
    "close",
    "closed",
    "CloseEvent",
    "CommandEvent",
    "Comment",
    "Components",
    "CompositionEvent",
    "confirm",
    "console",
    "Console",
    "Contact",
    "ContactManager",
    "content",
    "ContentFrameMessageManager",
    "Controllers",
    "ConvolverNode",
    "Counter",
    "CRMFObject",
    "crypto",
    "Crypto",
    "CryptoDialogs",
    "CSS",
    "CSS2Properties",
    "CSSCharsetRule",
    "CSSConditionRule",
    "CSSFontFaceRule",
    "CSSFontFeatureValuesRule",
    "CSSGroupingRule",
    "CSSGroupRuleRuleList",
    "CSSImportRule",
    "CSSMediaRule",
    "CSSMozDocumentRule",
    "CSSNameSpaceRule",
    "CSSPageRule",
    "CSSPrimitiveValue",
    "CSSRect",
    "CSSRule",
    "CSSRuleList",
    "CSSStyleDeclaration",
    "CSSStyleRule",
    "CSSStyleSheet",
    "CSSSupportsRule",
    "CSSUnknownRule",
    "CSSValue",
    "CSSValueList",
    "CustomEvent",
    "DataChannel",
    "DataContainerEvent",
    "DataErrorEvent",
    "DataTransfer",
    "DataView",
    "Date",
    "decodeURI",
    "decodeURIComponent",
    "DelayNode",
    "DesktopNotification",
    "DesktopNotificationCenter",
    "DeviceAcceleration",
    "DeviceLightEvent",
    "DeviceMotionEvent",
    "DeviceOrientationEvent",
    "devicePixelRatio",
    "DeviceProximityEvent",
    "DeviceRotationRate",
    "DeviceStorage",
    "DeviceStorageChangeEvent",
    "DeviceStorageCursor",
    "dispatchEvent",
    "document",
    "Document",
    "DocumentFragment",
    "DocumentTouch",
    "DocumentType",
    "DocumentXBL",
    "DOMCursor",
    "DOMError",
    "DOMException",
    "DOMImplementation",
    "DOMMMIError",
    "DOMParser",
    "DOMPoint",
    "DOMPointReadOnly",
    "DOMQuad",
    "DOMRect",
    "DOMRectList",
    "DOMRectReadOnly",
    "DOMRequest",
    "DOMSettableTokenList",
    "DOMStringList",
    "DOMStringMap",
    "DOMTokenList",
    "DOMTransactionEvent",
    "DragEvent",
    "dump",
    "DynamicsCompressorNode",
    "Element",
    "ElementCSSInlineStyle",
    "ElementReplaceEvent",
    "ElementTimeControl",
    "encodeURI",
    "encodeURIComponent",
    "Error",
    "ErrorEvent",
    "escape",
    "eval",
    "EvalError",
    "Event",
    "EventListener",
    "EventListenerInfo",
    "EventSource",
    "EventTarget",
    "external",
    "External",
    "File",
    "FileHandle",
    "FileList",
    "FileReader",
    "FileRequest",
    "find",
    "Float32Array",
    "Float64Array",
    "focus",
    "FocusEvent",
    "FontFace",
    "FontFaceList",
    "FormData",
    "frameElement",
    "frames",
    "fullScreen",
    "Function",
    "FutureResolver",
    "GainNode",
    "Gamepad",
    "GamepadAxisMoveEvent",
    "GamepadButtonEvent",
    "GamepadEvent",
    "GeoGeolocation",
    "GeoPosition",
    "GeoPositionCallback",
    "GeoPositionCoords",
    "GeoPositionError",
    "GeoPositionErrorCallback",
    "getComputedStyle",
    "getDefaultComputedStyle",
    "getInterface",
    "getSelection",
    "GetUserMediaErrorCallback",
    "GetUserMediaSuccessCallback",
    "GlobalObjectConstructor",
    "GlobalPropertyInitializer",
    "HashChangeEvent",
    "history",
    "History",
    "HTMLAnchorElement",
    "HTMLAppletElement",
    "HTMLAreaElement",
    "HTMLAudioElement",
    "HTMLBaseElement",
    "HTMLBodyElement",
    "HTMLBRElement",
    "HTMLButtonElement",
    "HTMLByteRanges",
    "HTMLCanvasElement",
    "HTMLCollection",
    "HTMLCommandElement",
    "HTMLContentElement",
    "HTMLDataElement",
    "HTMLDataListElement",
    "HTMLDirectoryElement",
    "HTMLDivElement",
    "HTMLDListElement",
    "HTMLDocument",
    "HTMLElement",
    "HTMLEmbedElement",
    "HTMLFieldSetElement",
    "HTMLFontElement",
    "HTMLFormControlsCollection",
    "HTMLFormElement",
    "HTMLFrameElement",
    "HTMLFrameSetElement",
    "HTMLHeadElement",
    "HTMLHeadingElement",
    "HTMLHRElement",
    "HTMLHtmlElement",
    "HTMLIFrameElement",
    "HTMLImageElement",
    "HTMLInputElement",
    "HTMLLabelElement",
    "HTMLLegendElement",
    "HTMLLIElement",
    "HTMLLinkElement",
    "HTMLMapElement",
    "HTMLMediaElement",
    "HTMLMenuElement",
    "HTMLMenuItemElement",
    "HTMLMetaElement",
    "HTMLMeterElement",
    "HTMLModElement",
    "HTMLObjectElement",
    "HTMLOListElement",
    "HTMLOptGroupElement",
    "HTMLOptionElement",
    "HTMLOptionsCollection",
    "HTMLOutputElement",
    "HTMLParagraphElement",
    "HTMLParamElement",
    "HTMLPreElement",
    "HTMLProgressElement",
    "HTMLPropertiesCollection",
    "HTMLQuoteElement",
    "HTMLScriptElement",
    "HTMLSelectElement",
    "HTMLShadowElement",
    "HTMLSourceElement",
    "HTMLSpanElement",
    "HTMLStyleElement",
    "HTMLTableCaptionElement",
    "HTMLTableCellElement",
    "HTMLTableColElement",
    "HTMLTableElement",
    "HTMLTableRowElement",
    "HTMLTableSectionElement",
    "HTMLTemplateElement",
    "HTMLTextAreaElement",
    "HTMLTimeElement",
    "HTMLTitleElement",
    "HTMLTrackElement",
    "HTMLUListElement",
    "HTMLUnknownElement",
    "HTMLVideoElement",
    "IDBCursor",
    "IDBCursorWithValue",
    "IDBDatabase",
    "IDBFactory",
    "IDBFileHandle",
    "IDBIndex",
    "IDBKeyRange",
    "IDBObjectStore",
    "IDBOpenDBRequest",
    "IDBRequest",
    "IDBTransaction",
    "IDBVersionChangeEvent",
    "Image",
    "ImageData",
    "ImageDocument",
    "indexedDB",
    "Infinity",
    "innerHeight",
    "innerWidth",
    "InputEvent",
    "insertPropertyStrings",
    "InstallTrigger",
    "InstallTriggerImpl",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "InternalError",
    "Intl",
    "isFinite",
    "isNaN",
    "Iterator",
    "JSON",
    "JSWindow",
    "KeyboardEvent",
    "KeyEvent",
    "length",
    "LinkStyle",
    "LoadStatus",
    "LocalMediaStream",
    "localStorage",
    "location",
    "Location",
    "locationbar",
    "LockedFile",
    "LSProgressEvent",
    "Map",
    "matchMedia",
    "Math",
    "MediaElementAudioSourceNode",
    "MediaError",
    "MediaList",
    "MediaQueryList",
    "MediaQueryListListener",
    "MediaRecorder",
    "MediaStream",
    "MediaStreamAudioDestinationNode",
    "MediaStreamAudioSourceNode",
    "MediaStreamTrack",
    "menubar",
    "MessageEvent",
    "MessagePort",
    "MimeType",
    "MimeTypeArray",
    "ModalContentWindow",
    "MouseEvent",
    "MouseScrollEvent",
    "moveBy",
    "moveTo",
    "MozAlarmsManager",
    "mozAnimationStartTime",
    "MozApplicationEvent",
    "MozBlobBuilder",
    "MozBrowserFrame",
    "mozCancelAnimationFrame",
    "mozCancelRequestAnimationFrame",
    "MozCanvasPrintState",
    "MozConnection",
    "mozContact",
    "MozContactChangeEvent",
    "MozCSSKeyframeRule",
    "MozCSSKeyframesRule",
    "mozIndexedDB",
    "mozInnerScreenX",
    "mozInnerScreenY",
    "MozMmsEvent",
    "MozMmsMessage",
    "MozMobileCellInfo",
    "MozMobileConnectionInfo",
    "MozMobileMessageManager",
    "MozMobileMessageThread",
    "MozMobileNetworkInfo",
    "MozNamedAttrMap",
    "MozNavigatorMobileMessage",
    "MozNavigatorNetwork",
    "MozNavigatorSms",
    "MozNavigatorTime",
    "MozNetworkStats",
    "MozNetworkStatsData",
    "MozNetworkStatsManager",
    "mozPaintCount",
    "MozPowerManager",
    "mozRequestAnimationFrame",
    "MozSettingsEvent",
    "MozSmsEvent",
    "MozSmsFilter",
    "MozSmsManager",
    "MozSmsMessage",
    "MozSmsSegmentInfo",
    "MozTimeManager",
    "MozTouchEvent",
    "MozWakeLock",
    "MozWakeLockListener",
    "MutationEvent",
    "MutationObserver",
    "MutationRecord",
    "name",
    "NaN",
    "navigator",
    "Navigator",
    "NavigatorCamera",
    "NavigatorDesktopNotification",
    "NavigatorDeviceStorage",
    "NavigatorGeolocation",
    "NavigatorUserMedia",
    "netscape",
    "Node",
    "NodeFilter",
    "NodeIterator",
    "NodeList",
    "NodeSelector",
    "__noscriptStorage",
    "Notification",
    "NotifyAudioAvailableEvent",
    "NotifyPaintEvent",
    "NSEditableElement",
    "NSEvent",
    "NSRGBAColor",
    "NSXPathExpression",
    "Number",
    "Object",
    "OfflineAudioCompletionEvent",
    "OfflineAudioContext",
    "OfflineResourceList",
    "onabort",
    "onafterprint",
    "onbeforeprint",
    "onbeforeunload",
    "onblur",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "oncontextmenu",
    "ondblclick",
    "ondevicelight",
    "ondevicemotion",
    "ondeviceorientation",
    "ondeviceproximity",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "ongotpointercapture",
    "onhashchange",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onLoad",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onlostpointercapture",
    "onmessage",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onmozfullscreenchange",
    "onmozfullscreenerror",
    "onmozpointerlockchange",
    "onmozpointerlockerror",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpause",
    "onplay",
    "onplaying",
    "onpointercancel",
    "onpointerdown",
    "onpointerenter",
    "onpointerleave",
    "onpointermove",
    "onpointerout",
    "onpointerover",
    "onpointerup",
    "onpopstate",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onscroll",
    "onseeked",
    "onseeking",
    "onselect",
    "onshow",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "onunload",
    "onuserproximity",
    "onvolumechange",
    "onwaiting",
    "onwheel",
    "open",
    "opener",
    "OpenWindowEventDetail",
    "Option",
    "OscillatorNode",
    "outerHeight",
    "outerWidth",
    "PageTransitionEvent",
    "pageXOffset",
    "pageYOffset",
    "PaintRequest",
    "PaintRequestList",
    "PannerNode",
    "parent",
    "parseFloat",
    "parseInt",
    "Parser",
    "ParserJS",
    "Path2D",
    "PaymentRequestInfo",
    "performance",
    "Performance",
    "PerformanceEntry",
    "PerformanceNavigation",
    "PerformanceResourceTiming",
    "PerformanceTiming",
    "PeriodicWave",
    "PermissionSettings",
    "personalbar",
    "PhoneNumberService",
    "Pkcs11",
    "Plugin",
    "PluginArray",
    "PopStateEvent",
    "PopupBlockedEvent",
    "postMessage",
    "print",
    "ProcessingInstruction",
    "ProgressEvent",
    "Promise",
    "prompt",
    "PropertyNodeList",
    "Proxy",
    "PushManager",
    "QueryInterface",
    "Range",
    "RangeError",
    "RecordErrorEvent",
    "Rect",
    "ReferenceError",
    "RegExp",
    "releaseEvents",
    "removeEventListener",
    "requestAnimationFrame",
    "RequestService",
    "resizeBy",
    "resizeTo",
    "RGBColor",
    "RTCIceCandidate",
    "RTCPeerConnection",
    "RTCPeerConnectionIdentityErrorEvent",
    "RTCPeerConnectionIdentityEvent",
    "RTCSessionDescription",
    "screen",
    "Screen",
    "screenX",
    "screenY",
    "ScriptProcessorNode",
    "scroll",
    "ScrollAreaEvent",
    "scrollbars",
    "scrollBy",
    "scrollByLines",
    "scrollByPages",
    "scrollMaxX",
    "scrollMaxY",
    "scrollTo",
    "scrollX",
    "scrollY",
    "Selection",
    "self",
    "Serializer",
    "Services",
    "sessionStorage",
    "Set",
    "setInterval",
    "setResizable",
    "setTimeout",
    "SettingsLock",
    "SettingsManager",
    "SharedWorker",
    "showModalDialog",
    "sidebar",
    "SimpleGestureEvent",
    "sizeToContent",
    "SmartCardEvent",
    "SpeechRecognitionError",
    "SpeechRecognitionEvent",
    "speechSynthesis",
    "SpeechSynthesisEvent",
    "status",
    "statusbar",
    "stop",
    "StopIteration",
    "Storage",
    "StorageEvent",
    "StorageIndexedDB",
    "StorageItem",
    "StorageManager",
    "StorageObsolete",
    "String",
    "StyleRuleChangeEvent",
    "StyleSheet",
    "StyleSheetApplicableStateChangeEvent",
    "StyleSheetChangeEvent",
    "StyleSheetList",
    "SVGAElement",
    "SVGAltGlyphElement",
    "SVGAngle",
    "SVGAnimatedAngle",
    "SVGAnimatedBoolean",
    "SVGAnimatedEnumeration",
    "SVGAnimatedInteger",
    "SVGAnimatedLength",
    "SVGAnimatedLengthList",
    "SVGAnimatedNumber",
    "SVGAnimatedNumberList",
    "SVGAnimatedPathData",
    "SVGAnimatedPoints",
    "SVGAnimatedPreserveAspectRatio",
    "SVGAnimatedRect",
    "SVGAnimatedString",
    "SVGAnimatedTransformList",
    "SVGAnimateElement",
    "SVGAnimateMotionElement",
    "SVGAnimateTransformElement",
    "SVGAnimationElement",
    "SVGCircleElement",
    "SVGClipPathElement",
    "SVGComponentTransferFunctionElement",
    "SVGDefsElement",
    "SVGDescElement",
    "SVGDocument",
    "SVGElement",
    "SVGEllipseElement",
    "SVGEvent",
    "SVGFEBlendElement",
    "SVGFEColorMatrixElement",
    "SVGFEComponentTransferElement",
    "SVGFECompositeElement",
    "SVGFEConvolveMatrixElement",
    "SVGFEDiffuseLightingElement",
    "SVGFEDisplacementMapElement",
    "SVGFEDistantLightElement",
    "SVGFEDropShadowElement",
    "SVGFEFloodElement",
    "SVGFEFuncAElement",
    "SVGFEFuncBElement",
    "SVGFEFuncGElement",
    "SVGFEFuncRElement",
    "SVGFEGaussianBlurElement",
    "SVGFEImageElement",
    "SVGFEMergeElement",
    "SVGFEMergeNodeElement",
    "SVGFEMorphologyElement",
    "SVGFEOffsetElement",
    "SVGFEPointLightElement",
    "SVGFESpecularLightingElement",
    "SVGFESpotLightElement",
    "SVGFETileElement",
    "SVGFETurbulenceElement",
    "SVGFilterElement",
    "SVGFilterPrimitiveStandardAttributes",
    "SVGFitToViewBox",
    "SVGForeignObjectElement",
    "SVGGElement",
    "SVGGradientElement",
    "SVGGraphicsElement",
    "SVGImageElement",
    "SVGLength",
    "SVGLengthList",
    "SVGLinearGradientElement",
    "SVGLineElement",
    "SVGLocatable",
    "SVGMarkerElement",
    "SVGMaskElement",
    "SVGMatrix",
    "SVGMetadataElement",
    "SVGMpathElement",
    "SVGMPathElement",
    "SVGNumber",
    "SVGNumberList",
    "SVGPathElement",
    "SVGPathSeg",
    "SVGPathSegArcAbs",
    "SVGPathSegArcRel",
    "SVGPathSegClosePath",
    "SVGPathSegCurvetoCubicAbs",
    "SVGPathSegCurvetoCubicRel",
    "SVGPathSegCurvetoCubicSmoothAbs",
    "SVGPathSegCurvetoCubicSmoothRel",
    "SVGPathSegCurvetoQuadraticAbs",
    "SVGPathSegCurvetoQuadraticRel",
    "SVGPathSegCurvetoQuadraticSmoothAbs",
    "SVGPathSegCurvetoQuadraticSmoothRel",
    "SVGPathSegLinetoAbs",
    "SVGPathSegLinetoHorizontalAbs",
    "SVGPathSegLinetoHorizontalRel",
    "SVGPathSegLinetoRel",
    "SVGPathSegLinetoVerticalAbs",
    "SVGPathSegLinetoVerticalRel",
    "SVGPathSegList",
    "SVGPathSegMovetoAbs",
    "SVGPathSegMovetoRel",
    "SVGPatternElement",
    "SVGPoint",
    "SVGPointList",
    "SVGPolygonElement",
    "SVGPolylineElement",
    "SVGPreserveAspectRatio",
    "SVGRadialGradientElement",
    "SVGRect",
    "SVGRectElement",
    "SVGScriptElement",
    "SVGSetElement",
    "SVGStopElement",
    "SVGStringList",
    "SVGStylable",
    "SVGStyleElement",
    "SVGSVGElement",
    "SVGSwitchElement",
    "SVGSymbolElement",
    "SVGTests",
    "SVGTextContentElement",
    "SVGTextElement",
    "SVGTextPathElement",
    "SVGTextPositioningElement",
    "SVGTitleElement",
    "SVGTransform",
    "SVGTransformable",
    "SVGTransformList",
    "SVGTSpanElement",
    "SVGUnitTypes",
    "SVGURIReference",
    "SVGUseElement",
    "SVGViewElement",
    "SVGViewSpec",
    "SVGZoomAndPan",
    "SVGZoomEvent",
    "SyntaxError",
    "TCPSocket",
    "Text",
    "TextDecoder",
    "TextEncoder",
    "TextMetrics",
    "TextTrack",
    "TextTrackCueList",
    "TextTrackList",
    "TimeEvent",
    "TimeRanges",
    "toolbar",
    "top",
    "toStaticHTML",
    "ToString",
    "Touch",
    "TouchEvent",
    "TouchList",
    "TrackEvent",
    "TransitionEvent",
    "TreeColumn",
    "TreeColumns",
    "TreeContentView",
    "TreeSelection",
    "TreeWalker",
    "TypeError",
    "UIEvent",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "undefined",
    "UndoManager",
    "unescape",
    "uneval",
    "updateCommands",
    "URIError",
    "URL",
    "URLSearchParams",
    "UserDataHandler",
    "UserProximityEvent",
    "USSDReceivedEvent",
    "ValidityState",
    "VideoStreamTrack",
    "VTTCue",
    "WaveShaperNode",
    "WeakMap",
    "WebGLActiveInfo",
    "WebGLBuffer",
    "WebGLFramebuffer",
    "WebGLProgram",
    "WebGLRenderbuffer",
    "WebGLRenderingContext",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "WebGLTexture",
    "WebGLUniformLocation",
    "WebGLVertexArray",
    "WebSocket",
    "WheelEvent",
    "window",
    "Window",
    "WindowCollection",
    "WindowInternal",
    "WindowPerformance",
    "WindowUtils",
    "Worker",
    "XMLDocument",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
    "XMLSerializer",
    "XMLStylesheetProcessingInstruction",
    "XPathEvaluator",
    "XPathExpression",
    "XPathNamespace",
    "XPathNSResolver",
    "XPathResult",
    "XPCNativeWrapper",
    "XSLTProcessor",
    "XULButtonElement",
    "XULCheckboxElement",
    "XULCommandDispatcher",
    "XULCommandEvent",
    "XULContainerElement",
    "XULContainerItemElement",
    "XULControlElement",
    "XULControllers",
    "XULDescriptionElement",
    "XULDocument",
    "XULElement",
    "XULImageElement",
    "XULLabeledControlElement",
    "XULLabelElement",
    "XULMenuListElement",
    "XULMultiSelectControlElement",
    "XULPopupElement",
    "XULRelatedElement",
    "XULSelectControlElement",
    "XULSelectControlItemElement",
    "XULTemplateBuilder",
    "XULTextBoxElement",
    "XULTreeBuilder",
    "XULTreeElement",
  ];


var setupModule = function(aModule) {
  aModule.controller = mozmill.getBrowserController();
}

var testDOM = function() {
    var allObjects = Object.getOwnPropertyNames(controller.tabs.activeTab.defaultView);
    var unexpectedObjects = [];
    for (var i in allObjects) {
        var name = allObjects[i];
        if (interfaceNamesInGlobalScope.indexOf(name) < 0) {
            unexpectedObjects.push(name);
        }
    }
    if (unexpectedObjects.length > 0) {
        expect.fail('Unexpected objects: ' + unexpectedObjects.join(', '));
    } else {
        expect.pass('No unexpected objects');
    }
}
