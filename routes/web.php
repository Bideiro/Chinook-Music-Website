<?php

use App\Http\Controllers\AlbumsController;

use App\Http\Controllers\ArtistsController;
use App\Http\Controllers\LibraryController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TracksController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('library', [LibraryController::class, 'index']);

Route::resource('albums', AlbumsController::class);

Route::resource('tracks', TracksController::class);

Route::resource('artists', ArtistsController::class);

Route::resource('search', SearchController::class);