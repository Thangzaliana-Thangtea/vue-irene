<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'admin',
            'email'=>'admin@email.com',
            'password'=>bcrypt('password'),
            'role'=>0,
            'branch_id'=>1
        ]);
    }
}
