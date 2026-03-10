<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'type',
        'location',
        'map_link',
        'is_active',
    ];

    public function admins()
    {
        return $this->hasMany(User::class);
    }
}
