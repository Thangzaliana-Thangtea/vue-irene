<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function authenticate(Request $request){
        $credential=$request->only('email','password','remember');

        $login=Auth::attempt($this->$credential);
        if ($login){
            $user=Auth::user();
            return new UserResource($user);
        }else{
            return response()->json("Invalid Credential",401);
        }
    }

    public function checkAuth(){
         $user=Auth::user();

        if (isset($user)){

            $roleName=$user->role;
            if ($roleName=='Admin'){
                return response()->json([
                    'redirectTo'=>'dashboard',
                    'currentUser'=>$user,
                    'auth'=>true,
                    'message'=>''
                ]);
            }elseif ($roleName=='Manager'){
                return response()->json([
                    'redirectTo'=>'dashboard',
                    'currentUser'=>$user,
                    'auth'=>true,
                    'message'=>''
                ]);
            }else{
                return response()->json([
                    'redirectTo'=>'dashboard',
                    'currentUser'=>$user,
                    'auth'=>true,
                    'message'=>''
                ]);
            }
        }else
            return response()->json([
                'redirectTo'=>'#',
                'currentUser'=>$user,
                'auth'=>false,
                'message'=>'Invalid credential'
                ]);
    }
}
