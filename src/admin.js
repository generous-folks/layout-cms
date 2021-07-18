/* eslint-disable no-console */
import * as firebaseAdmin from 'firebase-admin';

import serviceAccount from '../gsa_key.json';
import { requestHost } from './utils/host.service';

if (firebaseAdmin.apps.length === 0) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: process.env.RAZZLE_SECRET_FIREBASE_DB,
  });
}

export const admin = firebaseAdmin;
export const db = firebaseAdmin.database();

if (requestHost.hostname === 'localhost') db.useEmulator('localhost', 9001);

export const dbGet = ref =>
  db
    .ref(ref)
    .once('value', snap => snap.val())
    .then(content => content.val())
    .catch(err => console.error(err));

// export const increment = db.ref('').transaction
