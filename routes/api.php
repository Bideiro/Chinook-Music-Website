<?php

use App\Http\Controllers\Api\SearchApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LibraryApiController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('/artists', [LibraryApiController::class, 'artists']);
Route::get('/albums/{ArtistId}', [LibraryApiController::class, 'albums']);
Route::get('/tracks/{AlbumId}', [LibraryApiController::class, 'tracks']);
Route::get('/search/{searchterm}',[SearchApiController::class, 'search']);