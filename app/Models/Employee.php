<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Laravel\Sanctum\HasApiTokens;

class Employee extends Authenticatable
{
    protected $table = 'employee';

    protected $primaryKey = 'EmployeeId';

    public $timestamps = false;
    protected $fillable = [
        'FirstName',
        'LastName',
        'email',
        'Title',
        'password',
        'BirthDate',
        'HireDate',
        'Address',
        'City',
        'State',
        'Country',
        'PostalCode',
        'Phone',
        'Fax'
    ];

    protected $hidden = [
        'Password',
    ];

    protected function casts(): array
    {
        return [
            'Password' => 'hashed',
        ];
    }

    public function getAuthIdentifier()
    {
        return $this->EmployeeId;
    }


}
