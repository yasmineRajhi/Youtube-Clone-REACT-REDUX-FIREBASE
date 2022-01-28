import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAx6MZqvYH4jqX4xP0eDDFQmlKZx5a11L4",
    authDomain: "project-opus-lab.firebaseapp.com",
    projectId: "project-opus-lab",
    storageBucket: "project-opus-lab.appspot.com",
    messagingSenderId: "337383103551",
    appId: "1:337383103551:web:00dd41a9d5479da8e7ec8a"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth();