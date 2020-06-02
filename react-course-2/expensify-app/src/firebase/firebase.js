import * as firebase from 'firebase'
import moment from 'moment'

// Grabs all the named exports and can now use them as firebase.something

// Firebase can not handle Arrays, looks like we'll need to use objects of objects.

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

const database = firebase.database()

// Child Removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// Child Changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
}) 

// Child Added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
}) 

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             }) 
//         })
//     console.log(expenses)
// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 18986900
// })