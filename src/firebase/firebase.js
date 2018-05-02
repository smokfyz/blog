import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB4-UTzlw5RFwnmoy6UAdLFk4Z9ZdcM940",
  authDomain: "blog-90ff6.firebaseapp.com",
  databaseURL: "https://blog-90ff6.firebaseio.com",
  projectId: "blog-90ff6",
  storageBucket: "blog-90ff6.appspot.com",
  messagingSenderId: "788364205682"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
