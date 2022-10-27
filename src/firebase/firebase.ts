import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBACJkB6tLshfxmJE17wzt5vKSwiXr9GPE",
  authDomain: "albumdb-c713c.firebaseapp.com",
  databaseURL: "https://albumdb-c713c-default-rtdb.firebaseio.com",
  projectId: "albumdb-c713c",
  storageBucket: "albumdb-c713c.appspot.com",
  messagingSenderId: "873390705124",
  appId: "1:873390705124:web:bc31532ed4cb3400619ff1",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, app };
