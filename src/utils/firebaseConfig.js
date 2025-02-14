import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHAGjOqHqw-XqLiXqpqGWXqjqLiXqpqGWX",
  authDomain: "fortunetalk.firebaseapp.com",
  projectId: "fortunetalk",
  storageBucket: "fortunetalk.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
  measurementId: "G-XXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { 
  auth, 
  RecaptchaVerifier, 
  signInWithPhoneNumber 
};
