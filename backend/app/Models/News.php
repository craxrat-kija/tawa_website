<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'content',
        'image',
        'published_at',
        'destination_id', // Nullable if global
    ];

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }
}
