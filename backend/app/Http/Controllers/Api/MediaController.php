<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MediaResource;
use App\Models\Media;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function index()
    {
        return MediaResource::collection(Media::all());
    }

    public function featured()
    {
        return MediaResource::collection(
            Media::where('is_featured', true)->get()
        );
    }

    public function gallery()
    {
        return MediaResource::collection(
            Media::where('type', 'Gallery')->latest()->get()
        );
    }
}
