import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//we need to seed the database
// import { seedDatabase } from '../seed';
// we need to config here
const config = {
    apiKey: "AIzaSyD1YDXFTj8rBbtXF01jwoEc_Vxj97la7mk",
    authDomain: "netflix-c9c42.firebaseapp.com",
    databaseURL: "https://netflix-c9c42.firebaseio.com",
    projectId: "netflix-c9c42",
    storageBucket: "netflix-c9c42.appspot.com",
    messagingSenderId: "31872559385",
    appId: "1:31872559385:web:6a30c39c60394e5dc07d88"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);              Need to only run this once in order to seed the database. If ran more that once - will create dupes
export { firebase };
