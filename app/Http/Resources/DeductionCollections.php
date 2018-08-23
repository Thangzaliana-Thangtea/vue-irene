<?php

namespace App\Http\Resources;


use App\Deduction;
use Illuminate\Http\Resources\Json\ResourceCollection;

class DeductionCollections extends ResourceCollection
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
            'data'=>DeductionResource::collection($this->collection)
        ];
    }
}
