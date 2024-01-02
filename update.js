import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBrSIHaF11g7yXmxIMjjMnzZAofdHoi7eM",
    authDomain: "simple-login-45ecd.firebaseapp.com",
    projectId: "simple-login-45ecd",
    storageBucket: "simple-login-45ecd.appspot.com",
    messagingSenderId: "390820266283",
    appId: "1:390820266283:web:6e5b44d5b852c21356856e"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const user = auth.currentUser;

  function updateUser(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    console.log(userEmail);
  }

  const authStateChangedPromise = new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            updateUser(user);
            const uid = user.uid;
            resolve(uid);
        } else {
            alert("Create account and login");
            reject(new Error("User not authenticated"));
        }
    });
});

authStateChangedPromise.then((uid) => {
    console.log("User authenticated with UID:", uid);
}).catch((error) => {
    console.error("Authentication error:", error.message);
});