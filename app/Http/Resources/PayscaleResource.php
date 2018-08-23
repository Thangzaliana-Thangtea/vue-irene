<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PayscaleResource extends JsonResource
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
            'starting'=>$this->starting,
            'duration'=>$this->inc_duration,
            'amount'=>$this->inc_amount,
            'max'=>$this->maximum,

            'description'=>$this->starting . "/" . $this->inc_duration .":".$this->inc_amount . "/" . $this->maximum,

            'remark'=>$this->remark
        ];
    }
}
