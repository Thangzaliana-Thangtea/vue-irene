<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class EmployeeResource extends Resource
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
            'address'=>$this->address,
            'description'=>$this->description,
            'contact'=>$this->contact,
//            'branch'=>new BranchResource($this->branch),
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at
        ];
    }
}
