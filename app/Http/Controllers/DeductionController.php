<?php

namespace App\Http\Controllers;

use App\Deduction;
use App\Http\Resources\DeductionCollections;
use App\Http\Resources\DeductionResource;
use Illuminate\Http\Request;

class DeductionController extends Controller
{
    public function all(){
        return new DeductionCollections(Deduction::all());
    }

    public function find($id){
        return new DeductionResource(Deduction::find($id));
    }
    public function create(){
        $validator=\Validator::make(request()->all(),[
            'name'=>'required',
            'amount'=>'required|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()],406);
        }

        $allowances=new Deduction();
        $allowances->name=request('name');
        $allowances->amount=request('amount');
        $allowances->description=request('description');

        $allowances->save();
        return new DeductionResource($allowances);
    }
    public function update($id){
        $validator=\Validator::make(request()->all(),[
            'name'=>'required',
            'amount'=>'required|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()],406);
        }

        $allowances=Deduction::find($id);
        $allowances->name=request('name');
        $allowances->amount=request('amount');
        $allowances->description=request('description');

        $allowances->save();
        return new DeductionResource($allowances);

    }
    public function destroy($id){
        $allowance=Deduction::find($id);
        Deduction::destroy($id);

        return new DeductionResource($allowance);
    }
}
