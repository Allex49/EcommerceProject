<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Kreait\Laravel\Firebase\Facades\Firebase;

class LoginController extends Controller
{
   private $firebaseAuth;

   public function __construct()
   {
      $this->firebaseAuth = Firebase::auth();
   }

   public function index(){
      return view("login");
   }

   public function inicio(Request $request){
      $validator = $request->validate([
         'email' => 'required|email|unique:users,email',
         'password' => 'required|min:6',
      ]);

      $email = $request ->input('email');
      $password = $request->input('password');
      
      try {
         
         $createdUser = $this->firebaseAuth -> createUserWithEmailAndPassword($email,$password);
         Session::flash('succes', 'Registro exitoso');
      } catch (\Exception $e) {
         Session::flash('error','Registro fallido');
         //throw $th;
      }

      return redirect()-route('Home');
   }
}
