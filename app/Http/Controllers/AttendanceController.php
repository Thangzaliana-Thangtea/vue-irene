<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Attendance;
use App\Branch;
use App\Employee;
use App\Http\Resources\AttendanceCollections;
use App\Http\Resources\AttendanceResource;
use App\Http\Resources\EmployeeCollection;
use App\Http\Resources\EmployeeResource;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AttendanceController extends Controller
{
    public function all()
    {
        $attendances = Attendance::all();
        return new AttendanceCollections($attendances);
    }
    public function branchAttendance(){
        $user=auth()->user();
        if ($user) {
            $attendances=Attendance::where('user_id','=',$user->id)->get();
            return new AttendanceCollections($attendances);
        }
        return response()->json(['message'=>'Unautorized'],401);
    }

    public function create(Request $request)
    {
        $validators = \Validator::make($request->all(), [
            'date' => 'required',
            'employee' => 'required'
        ]);

        if ($validators->fails())
            return response()->json(['errors' => $validators->errors()], 406);

        $dateStr= $request->get('date');
        $dateArr=explode('/',$dateStr);


        $date=Carbon::createFromDate($dateArr[2],$dateArr[1],$dateArr[0]);

        $attendance = new Attendance();
        $attendance->date = $date;
        $attendance->user_id= auth()->user()->id;
        $attendance->employee_id = $request->get('employee');
        $attendance->remark = $request->get('remark');
        $attendance->save();

        return new AttendanceResource($attendance);
    }

    public function update(Request $request, $id)
    {
        $validators = \Validator::make($request->all(), [
            'date' => 'required',
            'employee' => 'required'
        ]);

        if ($validators->fails())
            return response()->json(['errors' => $validators->errors()], 406);

        $attendance = Attendance::updateOrCreate([
            'date' => $request->get('date'),
            'employee_id' => $request->get('employee'),
            'remark' => $request->get('remark')
        ]);
        return new AttendanceResource($attendance);

    }

    public function destroy(Request $request, $id)
    {
        $attendance = Attendance::find($id);
        Attendance::destroy($id);

        return new AttendanceResource($attendance);
    }

    public function employeeAttendance($id)
    {
        $attendances = DB::table('attendances')->where('employee_id', '=', $id)->get();
        return new AttendanceCollections($attendances);
    }
}
