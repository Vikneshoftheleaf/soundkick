<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNuRnFYiwZEZjP34TmKXuZFY6_45MIAA8",
    authDomain: "soundkicks-f64cd.firebaseapp.com",
    projectId: "soundkicks-f64cd",
    storageBucket: "soundkicks-f64cd.firebasestorage.app",
    messagingSenderId: "640906175786",
    appId: "1:640906175786:web:3a780e3dfd4d7df311aa53",
    measurementId: "G-8EVDXJH2SJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>