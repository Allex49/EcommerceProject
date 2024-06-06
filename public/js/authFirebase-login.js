
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
        import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
       // import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyDQkgbYmkO4movePsnCfiIftc4vOFuiyZA",
          authDomain: "ecommerce-project-56779.firebaseapp.com",
          projectId: "ecommerce-project-56779",
          storageBucket: "ecommerce-project-56779.appspot.com",
          messagingSenderId: "85824988393",
          appId: "1:85824988393:web:8b664d31275df5c008fc78",
          measurementId: "G-YVCJ3S23GS"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);

        const provider = new GoogleAuthProvider();




const signIn=document.getElementById('submitSignIn');

function showMessage(message,divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function() {
        messageDiv.style.opacity=0;
    }, 5000);
}

signIn.addEventListener('click', (event)=>{
   event.preventDefault();
   const email=document.getElementById('correo').value;
   const password=document.getElementById('password').value;
   const auth=getAuth();

   signInWithEmailAndPassword(auth, email,password)
   .then((userCredential)=>{
       showMessage('login is successful', 'signInMessage');
       const user=userCredential.user;
       localStorage.setItem('loggedInUserId', user.uid);
       window.location.href='Home';
   })
   .catch((error)=>{
       const errorCode=error.code;
       if(errorCode==='auth/invalid-credential'){
           showMessage('Incorrect Email or Password', 'signInMessage');
       }
       else{
           showMessage('Account does not Exist', 'signInMessage');
       }
   })
})