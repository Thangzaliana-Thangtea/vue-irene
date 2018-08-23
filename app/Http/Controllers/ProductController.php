<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function all()
    {
        return new ProductCollection(Product::all());
    }

    public function store(Request $request)
    {
        $validator=\Validator::make($request->all(),[
            'name'=>'required|unique:products',
            'price'=>'required|numeric',
            'unit'=>'required'
        ]);

        if ($validator->fails()){
            return response()->json(['errors'=>$validator->errors()],406);
        }

        $product = new Product();
        $product->name = $request->get('name');
        $product->category_id=$request->get('category_id');
        $product->description = $request->get('description');
        $product->price = $request->get('price');
        $product->unit = $request->get('unit');

        $product->save();

        return new ProductResource($product);
    }

    public function findById($id)
    {
        $product=Product::find($id);
        return new ProductResource($product);
    }

    public function update(Request $request,$id)
    {
        $validator=\Validator::make($request->all(),[
            'name'=>'required',
            'price'=>'required|numeric',
            'unit'=>'required'
        ]);

        if ($validator->fails()){
            return response()->json(['errors'=>$validator->errors()],406);
        }

        $product = Product::find($id);

        $product->name = $request->get('name');
        $product->description = $request->get('description');
        $product->price = $request->get('price');
        $product->unit = $request->get('unit');

        $product->save();
        return new ProductResource($product);
    }

    public function destroy($id)
    {
        $product=Product::find($id);
        Product::destroy($id);
        return new ProductResource($product);
    }

}
