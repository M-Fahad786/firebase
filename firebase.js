// 1st setup 
// npm install firebase@8.10.1 --save

// 2nd setup 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 3rd setup 
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
    // ...
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);


// 4th setup 
// import { collection, addDoc } from "firebase/firestore"; 

// Adding data Done 

// One time data 

// Read Data 
// import { collection, getDocs } from "firebase/firestore"; 

// Use in Use Effect 
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// Real Time Update 
// import { doc, onSnapshot } from "firebase/firestore";



// import { collection, query, where, onSnapshot } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("state", "==", "CA"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//       cities.push(doc.data().name);
//   });
//   console.log("Current cities in CA: ", cities.join(", "));
// });

