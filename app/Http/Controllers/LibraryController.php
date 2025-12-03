<?php

namespace App\Http\Controllers;

use App\Models\Albums;
use App\Models\Artists;
use App\Models\Tracks;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LibraryController extends Controller
{
    public function index()
    {
        $artists = Artists::all();
        $acols = array_keys($artists->first()->getAttributes());

        return Inertia::render(
            'Library',
            [
                'artists' => $artists,
                'acols' => $acols,
            ]
        );
    }
}
