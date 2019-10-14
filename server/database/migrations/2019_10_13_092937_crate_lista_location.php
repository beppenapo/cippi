<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrateListaLocation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('l_location', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('district');
            $table->string('location');

            $table->foreign('district')->references('id')->on('l_district');
            $table->unique('district','location');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('l_location');
    }
}
