import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyCaBrQ_Pz2RaSNomZtofPSmgsUmz-XcVwc",
  authDomain: "disabledassistnetwork.firebaseapp.com",
  projectId: "disabledassistnetwork",
  storageBucket: "disabledassistnetwork.firebasestorage.app",
  messagingSenderId: "339347449525",
  appId: "1:339347449525:web:10264d135ed34349e880fc",
  measurementId: "G-7PDSK652RT"
};

// Initialize Firebase client app (singleton)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics safely for browser environments
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}
