<?php

namespace App\Http\Resources;

use App\Appointment;
use App\Employee;
use App\Services;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\Resource;

class AppointmentResource extends Resource
{

    public function toArray($request)
    {
        $id=$this->status;
        $cssClass=Appointment::$STATUS[$id];
        $employee=Employee::find($this->emp_id);
        $service=Services::find($this->service_id);

        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'start'=>$this->date,
            'end'=>$this->date,
            'date'=>$this->date,
            'cssClass'=>$cssClass,
            'remark'=>$this->remark,
            'service'=>$this->service_id,
            'customer'=>$this->customer_id,
            'employee'=>$this->emp_id,

            'serviceName'=>$service==null ?'NA':$service->name,
            'employeeName'=>$employee == null ? 'NA':$employee->name,

            'emp_id'=>$this->emp_id,
            'customer_id'=>$this->customer_id,
            'branch_id'=>$this->branch_id,
        ];
    }
}
