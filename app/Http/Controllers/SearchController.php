<?php

namespace App\Http\Controllers;

use App\Models\Albums;
use App\Models\Tracks;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
class SearchController extends Controller
{
    public function index(){

        $albums = Albums::all();
        $tracks = DB::table('artist')
        ->join('album', 'artist.ArtistId' , '=', 'album.ArtistId')
        ->join('track','album.AlbumId','=','track.AlbumId')
        ->join('invoiceline','invoiceline.TrackId','=','track.TrackId')
        ->join('genre','genre.GenreId','=','track.GenreId')
        ->select('track.Name','album.Title','artist.Name as ArtistName', 'genre.Name as Genre')
        ->get();

        return inertia('Search',
        [
            'tracks' => $tracks,
            'albums' => $albums
        ]);
    }
}
