<?php

use App\Http\Controllers\StorageController;
use App\Http\Controllers\UserController;
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

Route::redirect('/','app')->name('home');

// React
Route::get('/app/{path?}', function () {
    return view('app');
})->where('path', '.*');

// Get data
Route::prefix('get')->group( function () {

    Route::get('background', [ StorageController::class, 'getBackground' ])->name('getBackground');;

});

// Authentication
Route::prefix('auth')->group( function() {

    Route::view( '', 'auth' )->name('auth');
    Route::get('login', [ UserController::class, 'login' ] )->name('auth.login');
    Route::get('callback', [ UserController::class, 'callback' ] );
    Route::get('logout', [ UserController::class, 'logout' ] )->name('auth.logout');

});