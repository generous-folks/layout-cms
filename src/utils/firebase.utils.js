import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

import { isServer } from './ssr.utils';
import { staticConfig } from '../config';
import { requestHost } from './host.service';

let config = {
  apiKey: `${process.env.RAZZLE_SECRET_FIREBASE_APIKEY}`,
  authDomain: `${process.env.RAZZLE_SECRET_FIREBASE_DOMAIN}`,
  databaseURL: `${process.env.RAZZLE_SECRET_FIREBASE_DB}`,
  projectId: `${process.env.RAZZLE_SECRET_FIREBASE_ID}`,
  storageBucket: `${process.env.RAZZLE_SECRET_FIREBASE_BUCKET}`,
  messagingSenderId: `${process.env.RAZZLE_SECRET_FIREBASE_MESSAGING}`,
  appId: `${process.env.RAZZLE_SECRET_FIREBASE_APP_ID}`,
};

if (!isServer() && window.location.hostname === 'localhost') {
  config = {
    apiKey: `${process.env.RAZZLE_SECRET_FIREBASE_APIKEY}`,
    databaseURL: 'http://localhost:9001/?ns=layout-system',
    projectId: `${process.env.RAZZLE_SECRET_FIREBASE_ID}`,
  };
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export const database = !isServer() && firebase.database.length === 0 && firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();
const functions = firebase.app().functions(staticConfig.firebase.region);

if (!isServer() && window.location.hostname === 'localhost') {
  // Point to the RTDB emulator running on localhost.
  database && database.useEmulator('localhost', 9001);
}

if (requestHost.hostname === 'localhost') functions.useEmulator('localhost', 5001);

export const callApi = (method, body) => functions.httpsCallable(method)(body);

export const signOut = () => auth.signOut();
export const signIn = ({ email, password }) =>
  auth
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => firebase.auth().signInWithEmailAndPassword(email, password));

export const getFile = ref => storage.ref(ref).getDownloadUrl();

export const setFile = (ref, file) =>
  storage
    .ref()
    .child(ref)
    .put(file);

export const deleteFile = ref => {
  storage.ref(ref).delete();
};

export const storageRef = ref => storage.ref(ref);

export const increment = (ref, number) =>
  database
    .ref(ref)
    .transaction(currentCount => (currentCount ? parseInt(currentCount, 10) + parseInt(number, 10) : number))
    .catch(err => console.error(`Increment transaction error: ${JSON.stringify(err, null, 2)}`)); // eslint-disable-line no-console

export function getNewKey(ref) {
  return database.ref(ref).push().key;
}
