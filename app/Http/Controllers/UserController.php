<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;

class UserController extends Controller
{

    function login() {
        return Socialite::driver('google')->redirect();
    }
    
    function callback () {
        $gdata = Socialite::driver('google')->user();
        
        $user = User::where( 'email', $gdata->email )->first();

        if( $user ) {
            if( $user->is_approved ) {
                Auth::login( $user );
                return redirect()->route( 'auth' );
            }

            return redirect()->route( 'auth' )->with( 'error', 'Account non abilitato' );
        }

        User::create( [ 'email' => $gdata->email ] );

        return redirect()->route( 'auth' )->with( 'error', 'Account non riconosciuto' );
    }

    function logout() {
        Auth::logout();
        return redirect()->route( 'auth' );
    }
}
