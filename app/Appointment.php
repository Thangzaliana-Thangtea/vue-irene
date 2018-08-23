<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    public static  $STATUS=[
      0=>"created",
        1=>'finished',
        2=>'cancel;'
    ];

    public  function  user(){
        return $this->belongsTo(User::class);
    }
    public  function  service(){
        return $this->belongsTo(Services::class);
    }

    public function employee(){
        return $this->belongsTo(Employee::class);
    }
}
