<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrateListaDistrict extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('l_district', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('state');
            $table->string('district');

            $table->foreign('state')->references('id')->on('l_state');
            $table->unique('state','district');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('l_district');
    }
}
