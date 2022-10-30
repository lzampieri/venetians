<?php

namespace App\Http\Controllers;

use App\Models\Dictum;

class DictumController extends Controller
{

    function all() {
        return response()->json( Dictum::all() );
    }
}
