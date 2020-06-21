'use strict';
const functions = require('firebase-functions');
const app = require('./build/server.bundle').default;
const getPageContent = require('./build/server.bundle').getPageContent;
const getConfig = require('./build/server.bundle').getConfig;

exports.app = functions.region('europe-west3').https.onRequest(app);

exports.getPageContent = functions.region('europe-west3').https.onCall(getPageContent);

exports.getConfig = functions.region('europe-west3').https.onCall(getConfig);
