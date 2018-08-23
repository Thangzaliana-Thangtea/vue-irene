<?php

namespace App\Http\Resources;

use App\User;
use Illuminate\Http\Resources\Json\Resource;

class BranchResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'address' => $this->address,
//            'users'=>UserResource::collection($this->users),
//            'employees'=>EmployeeResource::collection($this->employees),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
