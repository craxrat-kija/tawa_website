<?php

use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\PageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Destination Routes
Route::get('/destinations', [DestinationController::class, 'index']);
Route::get('/destinations/{slug}', [DestinationController::class, 'show']);

// News Routes
Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/latest', [NewsController::class, 'latest']);
Route::get('/news/{slug}', [NewsController::class, 'show']);

// Media Routes
Route::get('/media', [MediaController::class, 'index']);
Route::get('/media/featured', [MediaController::class, 'featured']);
Route::get('/media/gallery', [MediaController::class, 'gallery']);

// Page Routes
Route::get('/pages/{slug}', [PageController::class, 'show']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
