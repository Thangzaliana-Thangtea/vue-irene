<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePayScalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pay_scales', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->decimal('starting',8,2)->default(0);
            $table->integer('inc_duration')->default(0);
            $table->decimal('inc_amount',8,2)->default(0);
            $table->decimal('maximum',8,2)->default(0);
            $table->string('remark')->nullable();

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
        Schema::dropIfExists('pay_scales');
    }
}
