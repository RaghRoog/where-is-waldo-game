import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDWILltSIx_oSwvfroqhFuo3mXD1fm3bd0",
  authDomain: "where-is-waldo-1e072.firebaseapp.com",
  projectId: "where-is-waldo-1e072",
  storageBucket: "where-is-waldo-1e072.appspot.com",
  messagingSenderId: "60573363221",
  appId: "1:60573363221:web:7a85026674ed028831b21c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
