<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dictum extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
    protected $fillable = [
        'content',
        'translation',
        'explanation'
    ];

}
