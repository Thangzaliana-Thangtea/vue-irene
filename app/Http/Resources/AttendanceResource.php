<?php

namespace App\Http\Resources;

use App\Employee;
use Illuminate\Http\Resources\Json\JsonResource;

class AttendanceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $emp=Employee::find($this->employee_id);
        return [
            'id'=>$this->id,
            'title'=>$emp->name,
            'start'=>$this->date,
            'end'=>$this->date,
            'date'=>$this->date,
            'employee'=>$this->employee_id,
            'remark'=>$this->remark,
            'desc'=>$this->remark,
        ];
    }
}
