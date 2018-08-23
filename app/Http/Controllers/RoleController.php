<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleCollection;
use App\Http\Resources\RoleResource;
use App\Role;
use Illuminate\Http\Request;
use Zizaco\Entrust\EntrustRole;

class RoleController extends Controller
{

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:Roles'
        ]);
        $owner = new Role();
        $owner->name = $request->input('name');
        $owner->display_name = $request->input('displayName'); // optional
        $owner->description  = 'User is the owner of a given project'; // optional
        $owner->save();
        return response($owner, 200);
    }

    public function all()
    {
        return new RoleCollection(Role::all());
    }

    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        return new RoleResource(Role::find($id));
    }

    public function update(Request $request, $id)
    {
        $role = Role::find($id);

        $role->name = $request->get('name');
        $role->display_name = $request->get('display_name');
        $role->description = $request->get('description');

        $role->save();
    }

    public function destroy($id)
    {
        $role = Role::find($id);
        Role::destroy($id);
        return new RoleResource($role);
    }
}
