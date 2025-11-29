<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Albums extends Model
{
    protected $table = 'album';

    protected $primaryKey = 'AlbumId';

    public $timestamps = false;

    protected $fillable = ['Title','ArtistId'];
}
