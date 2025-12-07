<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    function index()
    {
        $userd = Auth::user();

        return inertia('Auth/Dashboard',[
            'user' => $userd
        ]);
    }
}
