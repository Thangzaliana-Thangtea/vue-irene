<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Customer;
use App\Http\Resources\AppointmentResource;
use App\Http\Resources\CustomerCollection;
use App\Http\Resources\CustomerResource;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function all()
    {
        return new CustomerCollection(Customer::all());
    }

    public function findById($id){
        return new CustomerResource(Customer::find($id));
    }
    public function store(Request $request)
    {
        $validator=\Validator::make($request->all(),[
           'name'=>'required'
        ]);

        if ($validator->fails())
            return response()->json(['errors'=>$validator->errors()],406);

        $customer =new Customer();
        $customer->name=$request->get('name');
        $customer->contact=$request->get('contact');
        $customer->address=$request->get('address');
        $customer->email=$request->get('email');
        $customer->description=$request->get('description');

        $customer->save();
        return new CustomerResource($customer);
    }

    public function update(Request $request,$id)
    {
        $validator=\Validator::make($request->all(),[
            'name'=>'required'
        ]);

        if ($validator->fails())
            return response()->json(['errors'=>$validator->errors()],406);

        $customer=Customer::find($id);
        $customer->name=$request->get('name');
        $customer->email=$request->get('email');
        $customer->contact=$request->get('contact');
        $customer->address=$request->get('address');
        $customer->description=$request->get('description');

        $customer->save();

        return new CustomerResource($customer);
    }

    public function destroy($id)
    {
        $customer=Customer::find($id);
        Customer::destroy($id);

        return new CustomerResource($customer);
    }

    public function appointments($id){
        $data=\DB::table('appointments')
            ->where('customer_id','=',$id)
            ->get();
        return response()->json([
           'data'=>$data
        ]);
    }

}
