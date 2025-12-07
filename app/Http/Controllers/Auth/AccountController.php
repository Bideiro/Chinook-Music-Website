<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    function index(){

        $ud = Auth::user();

        return inertia('Auth/Account',[
            'user' => $ud
        ]);
    }
}
