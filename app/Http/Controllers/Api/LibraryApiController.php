<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Artists;
use App\Models\Albums;
use App\Models\Tracks;

class LibraryApiController extends Controller
{
    public function artists()
    {
        return Artists::select('ArtistId', 'Name')->get();
    }

    public function albums(Request $r)
    {
        return Albums::where('ArtistId', $r->ArtistId)->get();
    }

    public function tracks(Request $r)
    {
        return Tracks::where('AlbumId', $r->AlbumId)->get();
    }
}
