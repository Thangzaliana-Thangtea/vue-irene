<?php

namespace App\Http\Controllers;

use App\Branch;
use App\Http\Resources\BranchCollection;
use App\Http\Resources\BranchResource;
use Illuminate\Http\Request;

class BranchController extends Controller
{

    public function all()
    {
        return new BranchCollection(Branch::all());
    }

    public function findById($id){
        return new BranchResource(Branch::find($id));
    }
    public function store(Request $request)
    {
        $validators=\Validator::make($request->all(),[
            'name' => 'bail|required|unique:branches',
        ]);

        if ($validators->fails())
            return response()->json(['errors'=>$validators->errors()],406);
        $branch = new  Branch();
        $branch->name = $request->get('name');
        $branch->address = $request->get('address');
        $branch->description = $request->get('description');

        $branch->save();

        return new BranchResource($branch);
    }

    public function show($id)
    {
        $branch=Branch::find($id);
        return new BranchResource($branch);
    }

    public function update(Request $request,$id)
    {
        $validators=\Validator::make($request->all(),[
            'name' => 'bail|required',
        ]);

        if ($validators->fails())
            return response()->json(['errors'=>$validators->errors()],406);

        $branch=Branch::find($id);
        $branch->name=$request->get('name');
        $branch->description=$request->get('description');
        $branch->address=$request->get('address');

        $branch->save();
    }

    public function destroy($id)
    {
        $branch=Branch::find($id);
        if (!isset($branch)){
            return response(['message'=>'item not found'],203);
        }
        $branch->delete();
        return new BranchResource($branch);
    }

}
