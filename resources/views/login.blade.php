@extends('layout.plantillalogin')

@section('title', 'Inicio')


@section('content')
    <div class="login-container">
        <h1>Inciar Sesion</h1>
        <form class="form" action="">
            <div id="signInMessage" class="messageDiv" style="display:none;"></div>


            <div class="form-group">
                <label for="correo">Correo:</label>
                <input type="email" id="correo" name="correo" required>
            </div>
            
            <div class="form-group">

                <label for="contraseña">Contraseña:</label>
                <input type="password" id="password" name="contraseña" required>
            </div>
            
            <div class="register-link">
                <p>No tienes cuenta?</p>
                <a href="register">Registrarse</a>
            </div>
            <div class="form-group">
                <button type="submit" id="submitSignIn">Iniciar Sesión</button>
            </div>
        
        </form>
        
        <div class="other-login-options">
            <h3>o iniciar sesión con:</h3>
            <div class="social-icons">
                <a href="#" class="social-icon google" id="btnGoogle"><i class="fab fa-google"></i></a>
                <a href="#" class="social-icon facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon linkedin"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <script type="module" src="js/authFirebase.js"></script>

        
        <!-- <script type="module" src="js/authFirebase-login.js"></script>-->
    </div>
@endsection
