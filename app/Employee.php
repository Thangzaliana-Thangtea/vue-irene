<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Employee
 *
 * @mixin \Eloquent
 */
class Employee extends Model
{
    protected $guarded=[
        'id'
    ];

    public function branch(){
        return $this->belongsTo(Branch::class);
    }

    public function payrolls(){
        return $this->hasMany(Payroll::class);
    }

    public function appointments(){
        return $this->hasMany(Appointment::class);
    }
    public function attendances(){
        return $this->hasMany(Attendance::class);
    }
    public function payScale(){
        return $this->belongsTo(PayScale::class);
    }
}
