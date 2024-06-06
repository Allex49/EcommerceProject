@extends('layout.plantillalogin')

@section('title', 'registro')


@section('content')
    <div class="login-container">
        <h1>Inciar Sesion</h1>
        <form class="form" method="POST" action="{{ route('registrarse') }}" >
            @csrf

            <div id="signUpMessage" class="messageDiv" style="display: none;"></div>

            <div class="form-group">
                <label for="nombreUsuario">Nombre: </label>
                <input type="text" id="FName" name="nombre" required>
            </div>

            <div class="form-group">
                <label for="nombreUsuario">Apellido:</label>
                <input type="text" id="LName" name="apellido" required>
            </div>


            <div class="form-group">

                <label for="correo">Correo:</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">

                <label for="contraseña">Contraseña:</label>
                <input type="password" id="password" name="password" required>
            </div>

            <div class="register-link">
                <p>tienes cuenta?</p>
                <a href="login"> Iniciar Sesion</a>
            </div>
                <button type="submit" id="submitSignUp">Registrarse</button>
        
        </form>
        
        <div class="other-login-options">
            <h3>o iniciar sesión con:</h3>
            <div class="social-icons">
                <a href="#" class="social-icon google"><i class="fab fa-google"></i></a>
                <a href="#" class="social-icon facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon linkedin"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>

        <!-- <script type="module" src="js/authFirebase-withEmail.js"></script>-->
   
    </div>
@endsection
