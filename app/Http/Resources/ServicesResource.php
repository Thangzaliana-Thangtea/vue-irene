<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ServicesResource extends Resource
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
            'duration'=>$this->duration,
            'complimentary'=>$this->complimentary,
            'cost'=>$this->cost,
            'remark'=>$this->remark,
            'commission'=>$this->commission,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at
        ];
    }
}
