<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable()->default("NA");
            $table->dateTime('date')->default(\Carbon\Carbon::now());

            $table->string('remark')->nullable();

            $table->integer('customer_id')->unsigned()->nullable();
            $table->integer('emp_id')->unsigned()->nullable();
            $table->integer('user_id')->unsigned()->nullable();
            $table->integer('service_id')->unsigned()->nullable();
            $table->integer('branch_id')->unsigned()->nullble();

            $table->decimal('commission')->default(0);
            $table->decimal('cost')->default(0);

            $table->smallInteger('status')->unsigned()->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
