<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tracks extends Model
{
    protected $table = 'track';

    protected $primaryKey = 'TrackId';

    public $timestamps = false;

    protected $fillable = ['Name','AlbumID','MediaTypeId','GenreId',
                            'Composer','Milliseconds','Bytes','UnitPrice'];

    public function albums(){
        return $this->belongsTo(Albums::class);
    }
}
