<?php

namespace App\Http\Controllers;

use App\Allowance;
use App\Http\Resources\AllowanceCollections;
use App\Http\Resources\AllowanceResource;
use Illuminate\Http\Request;

class AllowanceController extends Controller
{
    public function all(){
        return new AllowanceCollections(Allowance::all());
    }

    public function find($id){
        return new AllowanceResource(Allowance::find($id));
    }
    public function create(){
        $validator=\Validator::make(request()->all(),[
            'name'=>'required',
            'amount'=>'required|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()],406);
        }

        $allowances=new Allowance();
        $allowances->name=request('name');
        $allowances->amount=request('amount');
        $allowances->description=request('description');

        $allowances->save();
        return new AllowanceResource($allowances);
    }
    public function update($id){
        $validator=\Validator::make(request()->all(),[
            'name'=>'required',
            'amount'=>'required|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()],406);
        }

        $allowances=Allowance::find($id);
        $allowances->name=request('name');
        $allowances->amount=request('amount');
        $allowances->description=request('description');

        $allowances->save();
        return new AllowanceResource($allowances);

    }
    public function destroy($id){
        $allowance=Allowance::find($id);
        Allowance::destroy($id);

        return new AllowanceResource($allowance);
    }
}
