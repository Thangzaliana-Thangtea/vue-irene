<?php

namespace App\Http\Controllers;

use App\Http\Resources\ServicesCollection;
use App\Http\Resources\ServicesResource;
use App\Services;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function all()
    {
        return new ServicesCollection(Services::paginate(15));
    }
    public function findById($id)
    {
        $service=Services::find($id);
        return new ServicesResource($service);
    }

    public function store(Request $request)
    {
        $validator=\Validator::make($request->all(),[
            'name' => 'required|unique:services',
            'duration' => 'required',
            'commission' => 'required|numeric',
            'cost' => 'required|numeric'
        ]);

        if ($validator->fails()){
            $msg=[];
            foreach ($validator->errors()->getMessages() as $k =>$v){
                array_push($msg,$v);
            }
            return  response()->json(['errors'=>$msg],406);
        }

        $services = new Services();
        $services->name = $request->get('name');
        $services->complimentary = $request->get('complimentary');
        $services->duration = $request->get('duration');
        $services->cost = $request->get('cost');
        $services->commission = $request->get('commission');
        $services->remarks=$request->get('remark');
        $services->save();

        return new ServicesResource($services);

    }

    public function update(Request $request,$id)
    {
         $validator=\Validator::make($request->all(),[
            'name' => 'required',
            'duration' => 'required',
            'commission' => 'required|numeric',
            'cost' => 'required|numeric'
        ]);

        if ($validator->fails()){
            $msg=[];
            foreach ($validator->errors()->getMessages() as $k =>$v){
                array_push($msg,$v);
            }
            return  response()->json(['errors'=>$msg],406);
        }

        $services=Services::find($id);
        $services->name = $request->get('name');
        $services->complimentary = $request->get('complimentary');
        $services->duration = $request->get('duration');
        $services->cost = $request->get('cost');
        $services->commission = $request->get('commission');
//        $services->category_id=$request->get('category_id');

        $services->save();

        return new ServicesResource($services);
    }

    public function destroy($id)
    {
        $services=Services::find($id);
        Services::destroy($id);
        return new ServicesResource($services);
    }

}
