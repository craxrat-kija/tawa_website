<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DestinationResource;
use App\Models\Destination;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    public function index()
    {
        return DestinationResource::collection(
            Destination::where('is_active', true)->get()
        );
    }

    public function show($slug)
    {
        $destination = Destination::where('slug', $slug)->firstOrFail();
        return new DestinationResource($destination);
    }
}
