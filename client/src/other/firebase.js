import firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyAMxVSZ4pQ6odwRqVbH5yXyYo2F5pEYCpg",
    authDomain: "plant-app-a5ba9.firebaseapp.com",
    databaseURL: "https://plant-app-a5ba9.firebaseio.com",
    projectId: "plant-app-a5ba9",
    storageBucket: "plant-app-a5ba9.appspot.com",
    messagingSenderId: "44435225888",
    appId: "1:44435225888:web:3a835af91e93ac3dc02b45",
    measurementId: "G-QKXL6Q0WCY"
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;