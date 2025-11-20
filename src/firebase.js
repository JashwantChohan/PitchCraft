// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Your Firebase config object from the console
const firebaseConfig = {
  apiKey: "AIzaSyDI8ZbRgbwYisJ-tWVog305HvDoioMlm1U",
  authDomain: "pitchcraft-e6945.firebaseapp.com",
  projectId: "pitchcraft-e6945",
  appId: "1:670917537613:web:ba886fd213ca026e4e9104",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
export default app;
