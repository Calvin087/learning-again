import * as firebase from 'firebase'
// Grabs all the named exports and can now use them as Variable.etc

const firebaseConfig = {
    apiKey: "AIzaSyCPdok8-I250DhhBYzpIPg2zwqlbKUSMHg",
    authDomain: "expensis-app.firebaseapp.com",
    databaseURL: "https://expensis-app.firebaseio.com",
    projectId: "expensis-app",
    storageBucket: "expensis-app.appspot.com",
    messagingSenderId: "62753243288",
    appId: "1:62753243288:web:04b5ff5452788e358a10ed"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Calvin Torra'
})