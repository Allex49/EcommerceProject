        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
        import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
        import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

        function showMessage(message,divId){
            var messageDiv = document.getElementById(divId);
            messageDiv.style.display="block";
            messageDiv.innerHTML=message;
            messageDiv.style.opacity=1;
            setTimeout(function() {
                messageDiv.style.opacity=0;
            }, 5000);
        }




        // Handle Google Sign-In
        const signUp = document.querySelector('#submitSignUp');
        
        signUp.addEventListener('click',(event) => {
                event.preventDefault();
                const email = document.getElementById('Rcorreo').value;
                const password = document.getElementById('Rpassword').value;
                const firstName = document.getElementById('FName').value;
                const lastName = document.getElementById('LName').value;
                

                const auth = getAuth();
                const db=getFirestore();

                console.log("Email:", email);
                console.log("Contraseña:", password);
                console.log("Nombre:", firstName);
                console.log("Apellido:", lastName);

                
                createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
                    const user = userCredential.user;
                    const userData ={
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                    };
                    showMessage('Account Create Successfully','signUpMessage');
                    const docRef = doc (db, "users", user.uid);
                    setDoc(docRef,userData).then(()=> {

                        window.location.href='Home.blade.php';
                    }).catch((error) =>{
                        console.error("error writing document", error);
                    });
                }).catch((error)=>{
                    const errorCode=error.code;
                    if (errorCode == 'auth/email-already-in-use') {
                        showMessage('Email Address Already Exists !!!','signUpMessage');
                    }
                    else{
                        showMessage('unable to create User','signUpMessage');
                    }
                } )
                    
        });

        // Handle Google Sign-Out
        const btnLogout = document.querySelector('#btnLogout');

        if (btnLogout) {
            btnLogout.addEventListener('click', function(e) {
                e.preventDefault();
                signOut(auth).then(() => {
                    console.log('Usuario cerró sesión exitosamente');
                    // Aquí puedes redirigir a tu página de inicio de sesión o a otra página.
                }).catch((error) => {
                    console.error('Error al cerrar sesión:', error);
                });
            });
        } else {
            console.error('Elemento con ID "btnLogout" no encontrado en el DOM');
        }

        