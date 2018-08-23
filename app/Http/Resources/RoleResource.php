<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class RoleResource extends ResourceCollection
{

    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name' => $this->name,
            'display_name' => $this->display_name,
            'description' => $this->description,
            'permissions'=> PermissionResource::collection($this->perms),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
