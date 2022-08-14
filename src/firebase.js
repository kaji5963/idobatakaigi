import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwJ3s8W6plz-irw1o6vfXptEs6hTc8d9w",
  authDomain: "idobatakaigi-tool.firebaseapp.com",
  projectId: "idobatakaigi-tool",
  storageBucket: "idobatakaigi-tool.appspot.com",
  messagingSenderId: "826119711247",
  appId: "1:826119711247:web:90283fc62037dc0628517a",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
