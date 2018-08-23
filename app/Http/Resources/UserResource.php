<?php

namespace App\Http\Resources;

use App\Branch;
use Illuminate\Http\Resources\Json\Resource;

class UserResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'email'=>$this->email,
            'branch_id'=>$this->branch_id,
            'branch'=>$this->branch->name,
            'role'=>$this->role,
            'roleName'=>$this->role==0?'Administrator':'Manager',
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at
        ];
    }
}
