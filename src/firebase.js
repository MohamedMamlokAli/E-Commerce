import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDdIa5P-09Zu9pf6v9Ymk8pb5INICzobFo',
  authDomain: 'clone-21453.firebaseapp.com',
  projectId: 'clone-21453',
  storageBucket: 'clone-21453.appspot.com',
  messagingSenderId: '546099908345',
  appId: '1:546099908345:web:81e3d269586833a0191c28',
  measurementId: 'G-5CJYYJ6WXH',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
