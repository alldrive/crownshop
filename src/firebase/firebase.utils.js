import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBCVDVwxcqmSVz5E5kDyoKWIrgic2kuQcI",
  authDomain: "crownshop-2fefa.firebaseapp.com",
  databaseURL: "https://crownshop-2fefa.firebaseio.com",
  projectId: "crownshop-2fefa",
  storageBucket: "crownshop-2fefa.appspot.com",
  messagingSenderId: "338797799107",
  appId: "1:338797799107:web:52039dfb7fa5c1bc68a476",
  measurementId: "G-GWDGX5VPPT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;