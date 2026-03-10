<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $query = News::with('destination');

        if ($request->has('destination_id')) {
            $query->where('destination_id', $request->destination_id);
        }

        return NewsResource::collection(
            $query->latest('published_at')->paginate(10)
        );
    }

    public function show($slug)
    {
        $news = News::with('destination')->where('slug', $slug)->firstOrFail();
        return new NewsResource($news);
    }

    public function latest()
    {
        return NewsResource::collection(
            News::with('destination')->latest('published_at')->limit(3)->get()
        );
    }
}
