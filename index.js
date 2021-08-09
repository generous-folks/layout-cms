'use strict';
const functions = require('firebase-functions');

// All the following are exported from ./src/server.js
const { default: app, getConfig, getPageContent, staticConfig } = require('./build/server.bundle');
const region = staticConfig.firebase.region;

// SSR
exports.app = functions.region(region).https.onRequest(app);

// API
exports.getPageContent = functions.region(region).https.onCall(getPageContent);
exports.getConfig = functions.region(region).https.onCall(getConfig);
