


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7ZJiFwj_FJYHFMRjrgUet3fxTgoZAe8w",
    authDomain: "hackaton-73ab7.firebaseapp.com",
    projectId: "hackaton-73ab7",
    storageBucket: "hackaton-73ab7.firebasestorage.app",
    messagingSenderId: "80435321333",
    appId: "1:80435321333:web:f4b8e0b3216e6b50b968bc",
    measurementId: "G-QL4J0916Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let button = document.getElementById("login");
button.addEventListener('click', function (event) {
    event.preventDefault()
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("signup is success fully");
            window.location.href = "http://127.0.0.1:5500/main/index.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error.message);
            // ..
        });
})
