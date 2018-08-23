<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Branch extends Model
{
//    use SoftDeletes;

    public function users(){
        return $this->hasMany(User::class);
    }

    public function employees(){
        return $this->hasMany(Employee::class);
    }
}
