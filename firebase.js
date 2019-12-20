import * as firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBNEF17RYaE7W0tRFBche1TsR7iRNORA_Q",
    authDomain: "dec-self.firebaseapp.com",
    databaseURL: "https://dec-self.firebaseio.com",
    projectId: "dec-self",
    storageBucket: "dec-self.appspot.com",
    messagingSenderId: "432462687749",
    appId: "1:432462687749:web:063e2040ac1077e265b66c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth

export default firebase;
