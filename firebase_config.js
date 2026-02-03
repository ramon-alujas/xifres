const firebaseConfig = {
    apiKey: "AIzaSyAGoEPsPVqRd6caRBk0414NCs_hrWRC_mk",
    authDomain: "concurs-xifres-1a866.firebaseapp.com",
    databaseURL: "https://concurs-xifres-1a866-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "concurs-xifres-1a866",
    storageBucket: "concurs-xifres-1a866.firebasestorage.app",
    messagingSenderId: "818405276406",
    appId: "1:818405276406:web:3cae84f79817b03e29cad7"
};

// Inicialitzem Firebase (això fa que funcioni)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();
