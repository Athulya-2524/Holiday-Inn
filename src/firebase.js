import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "REAL_API_KEY_HERE",
  authDomain: "REAL_PROJECT.firebaseapp.com",
  projectId: "REAL_PROJECT_ID",
  appId: "REAL_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
