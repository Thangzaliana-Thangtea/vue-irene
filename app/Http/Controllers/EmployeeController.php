<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Branch;
use App\Category;
use App\Employee;
use App\Http\Resources\AppointmentCollection;
use App\Http\Resources\EmployeeCollection;
use App\Http\Resources\EmployeeResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\HttpException;

class EmployeeController extends Controller
{
    public function all()
    {
        return new EmployeeCollection(Employee::with('branch')->latest()->get());
    }

    public function appointment($id){
        $appointment=Appointment::where('emp_id','=',$id)
            ->get();
        return new AppointmentCollection($appointment);
    }

    public function branchEmployee()
    {
        $currentUser=auth()->user();
        if ($currentUser) {
            $employees = Employee::where('branch_id','=',$currentUser->branch_id)->get();
            return new EmployeeCollection($employees);
        }
        return response()->json(['message'=>'Unautorized'],401);
    }

    public function findById($id)
    {
        return new EmployeeResource(Employee::find($id));
    }

    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required',
            'contact' => 'required'
        ]);

        $employee = new Employee();
        $employee->name = $request->get('name');
        $employee->address = $request->get('address');
        $employee->contact = $request->get('contact');
        $employee->description = $request->get('description');

        $employee->branch_id = $request->get('branch_id');

        $employee->save();

        return new EmployeeResource($employee);
    }

    public function storeByManager(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required',
            'contact' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
        }
        $employee = new Employee();
        $employee->name = $request->get('name');
        $employee->address = $request->get('address');
        $employee->contact = $request->get('contact');
        $employee->description = $request->get('description');
        $employee->branch_id = auth()->user()->branch_id;
        $employee->save();

        return new EmployeeResource($employee);
    }

    public function updateByManager(Request $request, $id)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required',
            'contact' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $employee = Employee::find($id);
        $employee->name = $request->get('name');
        $employee->address = $request->get('address');
        $employee->contact = $request->get('contact');
        $employee->description = $request->get('description');
        $employee->branch_id = auth()->user()->branch_id;
        $employee->save();
    }

    public function update(Request $request, $id)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required',
            'contact' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $employee = Employee::find($id);
        $employee->name = $request->get('name');
        $employee->address = $request->get('address');
        $employee->contact = $request->get('contact');
        $employee->description = $request->get('description');
        $employee->branch_id=$request->get('branch_id');
        $employee->save();

        return new EmployeeResource($employee);
    }

    public function destroy($id)
    {
        $employee = Employee::find($id);
        $employee->delete();
        if (!isset($employee)) {
            return response(['message' => 'item not found'], 404);
        }
        return new EmployeeResource($employee);
    }

}
