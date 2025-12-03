<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;

use App\Models\Artists;
use App\Models\Albums;
use App\Models\Tracks;

class SearchApiController extends Controller
{
    public function search($searchterm)
    {

        $res = DB::table('artist')
            ->select('track.Name', 'album.Title', 'artist.Name as ArtistName', 'genre.Name as Genre')
            ->join('album', 'artist.ArtistId', '=', 'album.ArtistId')
            ->join('track', 'album.AlbumId', '=', 'track.AlbumId')
            ->join('genre', 'genre.GenreId', '=', 'track.GenreId')
            ->where('album.Title', 'like', "%{$searchterm}%")
            ->orwhere('artist.Name', 'like', "%{$searchterm}%")
            ->orwhere('track.Name', 'like', "%{$searchterm}%")
            ->orwhere('genre.Name', 'like', "%{$searchterm}%")
            ->get();

        return $res;

    }
}
