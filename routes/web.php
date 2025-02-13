<?php

use App\Http\Controllers\CursosController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use GPBMetadata\Google\Api\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class,'index']);

Route::controller(CursosController::class)->group(function () {

    Route::get('cursos', 'LoginController@index');


    Route::get('cursos/create', 'create');
    
    
    Route::get('cursos/{curso}', 'show');
    
});

Route::get('login',[LoginController::class , 'index']);
Route::post('login',[LoginController::class , 'index']);

Route::get('register',[RegisterController::class, 'index']);


Route::post('/registrarse', [RegisterController::class, 'registrarse'])->name('registrarse');
