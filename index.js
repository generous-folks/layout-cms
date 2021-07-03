'use strict';
const functions = require('firebase-functions');

// All the following are exported from ./src/server.js
const app = require('./build/server.bundle').default;
const getPageContent = require('./build/server.bundle').getPageContent;
const getConfig = require('./build/server.bundle').getConfig;
const staticConfig = require('./build/server.bundle').staticConfig;

const region = staticConfig.firebase.region;

// SSR
exports.app = functions.region(region).https.onRequest(app);

// API
exports.getPageContent = functions.region(region).https.onCall(getPageContent);
exports.getConfig = functions.region(region).https.onCall(getConfig);
