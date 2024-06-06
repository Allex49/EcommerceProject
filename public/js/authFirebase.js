        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
        import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

        // Handle Google Sign-In
        document.querySelector('#btnGoogle').addEventListener('click', function(e) {
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log('User signed in:', user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error('Error during sign-in:', errorCode, errorMessage, email, credential);
                // ...
            });
        });

        // Handle Google Sign-Out
        document.querySelector('#btnLogout').addEventListener('click', function(e) {
            signOut(auth).then(() => {
                console.log('User signed out');
            }).catch((error) => {
                console.error('Error during sign-out:', error);
            });
        });

        