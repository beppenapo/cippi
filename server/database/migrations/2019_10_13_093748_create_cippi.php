<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCippi extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cippi', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('location');
            $table->string('name');
            $table->integer('status');
            $table->string('type');
            $table->double('x', 6, 4);
            $table->double('y', 6, 4);
            $table->point('geom', 'GEOMETRY', 4326);

            $table->foreign('location')->references('id')->on('l_location');
            $table->foreign('status')->references('id')->on('l_status');
            $table->unique('x','y');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cippi');
    }
}
