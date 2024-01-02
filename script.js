
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();
    document.addEventListener("DOMContentLoaded", function() {
    const googleLogin = document.getElementById("google-login-btn");
    googleLogin.addEventListener("click", function() {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    window.location.href = "../loggedPage.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});
});

  