<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{

    /**
     * UsersController constructor.
     */


    public function all()
    {
        $users = User::where('id', '!=', Auth::id())->get();
        return new UserCollection($users);
    }
    public function findById($id)
    {
        return new UserResource(User::find($id));
    }

    public function store(Request $request)
    {

//        var_dump($request);

        $validator=\Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:6',
        ]);

        if ($validator->fails())
            return response()->json(['errors'=>$validator->errors()],406);

        $user =new User();
        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->password=bcrypt($request->get('password'));
        $user->branch_id=$request->get('branch_id');
        $user->role=$request->get('role');

        $user->save();
        return new UserResource($user);

    }


    public function update(Request $request,$id)
    {
        $validator=\Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required',
        ]);

        if ($validator->fails()){
            return response()->json(['errors'=>$validator->errors()],406);
        }
        $user = User::find($id);
        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->branch_id=$request->get('branch_id');
        $user->role=$request->get('role');

        $user->save();
        return new UserResource($user);
    }

    public function destroy($id)
    {
        $user=User::find($id);
        User::destroy($id);
        return new UserResource($user);
    }

}
