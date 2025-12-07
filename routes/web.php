<?php

use App\Http\Controllers\AlbumsController;

use App\Http\Controllers\ArtistsController;
use App\Http\Controllers\Auth\AccountController;
use App\Http\Controllers\Auth\DashboardController;
use App\Http\Controllers\LibraryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TracksController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('library', [LibraryController::class, 'index'])->name('Library');

Route::resource('/order', OrderController::class)->names('Order');

Route::resource('/albums', AlbumsController::class)->names('Albums');

Route::resource('/tracks', TracksController::class);

Route::resource('/artists', ArtistsController::class);

Route::resource('/search', SearchController::class);

Route::middleware('guest')->group(function(){
    Route::get('/login', [LoginController::class, 'show'])->name('login');
    Route::post('/login',[LoginController::class, 'login'])->name('login.post');

});

Route::middleware('auth')->group(function(){
    Route::get('/dashboard',[DashboardController::class,'index'])->name('dashboard');

    Route::get( '/account',[AccountController::class,'index']);
});