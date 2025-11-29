<?php

use App\Http\Controllers\AlbumsController;

use App\Http\Controllers\TracksController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::resource('albums',AlbumsController::class);

Route::resource('tracks',TracksController::class);