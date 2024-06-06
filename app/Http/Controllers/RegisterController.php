<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Kreait\Firebase\Exception\Auth\EmailExists;
use Kreait\Laravel\Firebase\Facades\Firebase;
use Kreait\Firebase\Factory;

class RegisterController extends Controller
{

    private $firebaseAuth;

    protected $firestore;
   protected $auth;

   public function __construct()
    {
        $this->firebaseAuth = Firebase::auth();

    }

   public function registrarse(Request $request)
   {
      // Validar los datos del formulario
      $validator = $request->validate([
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:6',
     ]);


      $email = $request->input('email');
      $password = $request->input('password');

      try {
         
        $createdUser = $this->firebaseAuth -> createUserWithEmailAndPassword($email,$password);
        Session::flash('succes', 'Registro exitoso');
        return redirect()-route('login');

     } catch (\Exception $e) {
        Session::flash('error','Registro fallido');
        //throw $th;
        return redirect()->back()->withErrors($validator)->withInput();

     }


  }

   
   public function index(){
      return view("Register");
   }



}
