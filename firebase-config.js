// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDJg9clXyEOl3UY1fGavgwxwbSK8IAz7_Q",
  authDomain: "lszbj-87e83.firebaseapp.com",
  databaseURL: "https://lszbj-87e83-default-rtdb.firebaseio.com",
  projectId: "lszbj-87e83",
  storageBucket: "lszbj-87e83.firebasestorage.app",
  messagingSenderId: "877584718053",
  appId: "1:877584718053:web:9e7d8eb4cd444c4a8f5c0c",
  measurementId: "G-LDHX0C1YQ7"
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
