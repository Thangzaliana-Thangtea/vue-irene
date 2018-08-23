<?php

namespace App\Http\Controllers;

use App\Http\Resources\ServiceCategoryCollection;
use App\Http\Resources\ServiceCategoryResource;
use App\ServiceCategory;
use Illuminate\Http\Request;

class ServiceCategoryController extends Controller
{
    public function all()
    {
        return new ServiceCategoryCollection(ServiceCategory::all());
    }
    public function findById($id){
        return new ServiceCategoryResource(ServiceCategory::find($id));
    }

    public function store(Request $request)
    {
        $validator=\Validator::make($request->all(),[
            'name'=>'required|unique:service_categories'
        ]);
        if ($validator->fails())
            return response()->json(['errors'=>$validator->errors()],406);

        $category=new ServiceCategory();
        $category->name=$request->get('name');
        $category->description=$request->get('description');

        $category->save();
        return new ServiceCategoryResource($category);
    }

    public function update(Request $request, $id)
    {
        $validator=\Validator::make($request->all(),[
            'name'=>'required|unique:service_categories'
        ]);
        if ($validator->fails())
            return response()->json(['errors'=>$validator->errors()],406);

        $category=ServiceCategory::find($id);
        $category->name=$request->get('name');
        $category->description=$request->get('description');

        $category->save();
        return new ServiceCategoryResource($category);
    }

    public function destroy($id)
    {
        $cat=ServiceCategory::find($id);
        ServiceCategory::destroy($id);
        return new ServiceCategoryResource($cat);
    }

}
