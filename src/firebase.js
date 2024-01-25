import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "my-ecommerce-60e2d",
  storageBucket: "my-ecommerce-60e2d.appspot.com",
  messagingSenderId: "145964834849",
  appId: "1:145964834849:web:4ec9427e892042bfdfc360"
}

export const app = initializeApp(firebaseConfig)