<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
    protected $casts = [
        'is_approved' => 'boolean',
        'is_admin' => 'boolean',
    ];

    protected $fillable = [
        'email',
        'is_approved',
        'is_admin'
    ];
}
