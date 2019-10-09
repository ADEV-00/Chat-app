// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA-9KSLL8IUEi-ag-EqTk_B_i4EfkOJ2YA",
  authDomain: "chat-room-mahala.firebaseapp.com",
  databaseURL: "https://chat-room-mahala.firebaseio.com",
  projectId: "chat-room-mahala",
  storageBucket: "",
  messagingSenderId: "653090135491",
  appId: "1:653090135491:web:7b22fed070148dd72e3176",
  measurementId: "G-J8GD93J7MR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
