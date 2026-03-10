<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $fillable = [
        'title',
        'type', // Image, Video, Banner
        'file_path',
        'is_featured',
    ];
}
