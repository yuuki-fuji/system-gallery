"use strict";
exports.__esModule = true;
exports.client = void 0;
var microcms_js_sdk_1 = require("microcms-js-sdk");
exports.client = microcms_js_sdk_1.createClient({
    serviceDomain: "system-gallery",
    apiKey: process.env.API_KEY
});
