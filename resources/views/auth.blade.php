<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    </head>
    <body class="bg-grey">
        <div class="
            w-full min-h-screen
            flex flex-col justify-center items-center
            bg-fixed bg-center bg-no-repeat bg-cover
            gap-4
            ">
            @if(Session::has('error'))
                <div class="bg-white border-4 border-error rounded-xl p-4">
                    {{ Session::get('error') }}
                </div>
            @endif
            @guest
                <a class="bg-white hover:border-4 border-black rounded-xl p-4" href={{ route('auth.login') }}>
                    Login
                </a>
            @endguest
            @auth
                <div class="bg-white rounded-full p-4">
                    Logged in as {{ Auth::user()->email }}
                </div>
                @if( Auth::user()->is_admin )
                    <a class="bg-white hover:border-4 border-black rounded-xl p-4" href={{ route('backpack.dashboard') }}>
                        Pannello di controllo
                    </a>
                @endif
                <a class="bg-white hover:border-4 border-black rounded-xl p-4" href={{ route('auth.logout') }}>
                    Logout
                </a>
            @endauth
        </div>
    </body>
</html>
