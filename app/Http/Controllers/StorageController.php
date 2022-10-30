<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

class StorageController extends Controller
{

    function getBackground() {
        $files = Storage::allFiles( 'public/bg_images' );
        $key = array_Rand( $files );
        return Storage::response( $files[ $key ] );
    }
}
