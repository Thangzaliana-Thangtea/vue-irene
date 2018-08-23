<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Branch;
use App\Customer;
use App\Http\Resources\AppointmentCollection;
use App\Http\Resources\AppointmentResource;
use App\Http\Resources\BranchCollection;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppointmentController extends Controller
{
    public function all()
    {
        $appointments = Appointment::all();

        return new AppointmentCollection($appointments);
    }

    public function findById($id)
    {
        return new AppointmentResource(Appointment::find($id));
    }

    public function customerAppointments($id)
    {
        $appointments = Appointment::where('cust_id', '=', $id)->get();
        return new AppointmentCollection($appointments);
    }

    public function branchAppointment()
    {
        $user = auth()->user();
        $appointments = Appointment::where('branch_id', '=', $user->branch_id)->get();
        return new AppointmentCollection($appointments);
    }

    public function storeAppointment(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'dateTime' => 'required',
            'customer' => 'required',
            'service' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 406);
        }

        $customer = Customer::find($request->get('customer'));

        $appointment = new Appointment();
        $appointment->title = $customer->name;
        $appointment->customer_id = $customer->id;
        //convert js date to php date
//        $epochTime = $request->get('dateTime');

        $dateStr=$request->get('date');

        $dateArr=explode(' ',$dateStr);
        $date=Carbon::create($dateArr[0],$dateArr[1],$dateArr[2],$dateArr[3],$dateArr[4],$dateArr[5]);

        $appointment->date = $date;

        $appointment->service_id = $request->get('service');

        $appointment->branch_id = auth()->user()->branch_id;
        $appointment->user_id = auth()->user()->user_id;
        $appointment->remark = $request->get('remark');
        $appointment->status = 0;
        $appointment->save();

        return new AppointmentResource($appointment);
    }

    public function update(Request $request, $id)
    {
        $validator = \Validator::make($request->all(), [
            'date' => 'required',
            'employee' => 'required',
            'customer' => 'required',
            'service' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 406);
        }
        $appointment = Appointment::find($id);
        //convert js date to php date
        //convert js date to php date

        $dateStr=$request->get('date');

        $dateArr=explode(' ',$dateStr);
        $date=Carbon::create($dateArr[0],$dateArr[1],$dateArr[2],$dateArr[3],$dateArr[4],$dateArr[5]);

        $appointment->date = $date;

        $appointment->service_id = $request->get('service');
        $appointment->customer_id = $request->get('customer');
        $appointment->emp_id = $request->get('employee');
        $appointment->remark = $request->get('remark');
        $appointment->status = 1;
        $appointment->save();


        return new AppointmentResource($appointment);
    }

    public function destroy($id)
    {
        $appointment = Appointment::find($id);
        Appointment::destroy($id);
        return new AppointmentResource($appointment);
    }
}
