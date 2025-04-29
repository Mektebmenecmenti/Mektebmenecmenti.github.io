import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDncbU605eCJ8bYvxJKJI71CLGgLFlbkx0",
    authDomain: "idareetmeportali-e3e6f.firebaseapp.com",
    projectId: "idareetmeportali-e3e6f",
    storageBucket: "idareetmeportali-e3e6f.firebasestorage.app",
    messagingSenderId: "491252468385",
    appId: "1:491252468385:web:5db624f2925065c242bee0"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
