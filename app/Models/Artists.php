<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artists extends Model
{
    protected $table = 'artist';

    protected $primaryKey = 'ArtistId';

    public $timestamps = false;

    protected $fillable = ['Name'];

    public function albums(){
        return $this->hasMany(Albums::class);
    }

    public function tracks(){
        return $this->hasManyThrough(Tracks::class,
            Albums::class,
            'ArtistId',
            'AlbumId',
            'ArtistId',
            'AlbumId');
    }
}
