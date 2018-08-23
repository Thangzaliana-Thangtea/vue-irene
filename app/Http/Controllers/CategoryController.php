<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function all()
    {
        return new CategoryCollection(Category::all());
    }

    public function store(Request $request)
    {
        $validator=\Validator::make($request->all(),[
            'name' => 'required'
        ]);

        if ($validator->fails())
            return response()->json(['errors'=>$validator->errors()],406);

        $category = new Category();
        $category->name = $request->get('name');
        $category->description = $request->get('description');
        $category->save();
        return new CategoryResource($category);
    }

    public function findById($id){
        return new CategoryResource(Category::find($id));
    }

    public function update($id)
    {
        $request=request();

        $validator=\Validator::make($request->all(),[
            'name' => 'required|unique:categories'
        ]);

        if ($validator->fails())
            return response()->json(['errors'=>$validator->errors()],406);

        $category = Category::find($id);

        $category->name = $request->get('name');
        $category->description = $request->get('description');
        $category->save();

        return new CategoryResource($category);
    }

    public function destroy($id)
    {
        $category=Category::find($id);
        Category::destroy($id);
        return new CategoryResource($category);
    }

}
