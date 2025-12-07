<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class LoginController extends Controller
{

    public function show()
    {
        return inertia('Login');
    }

    public function login(Request $r)
    {

        $credentials = $r->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (
            !Auth::attempt($credentials)
        ) {
            dd('Auth failed!', $credentials);
            // return redirect('/login')->withErrors(['email' => 'Invalid credentials.']);
        }
        $r->session()->regenerate();
        return redirect()->route('dashboard');
    }

    public function logout(Request $r)
    {
        Auth::logout();

        $r->session()->invalidate();
        $r->session()->regenerateToken();

        return redirect('/home');
    }

}
