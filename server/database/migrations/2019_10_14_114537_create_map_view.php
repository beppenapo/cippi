<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMapView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
      DB::statement("
        create view marker as
        select cippi.id, state.state, district.district, location.location, cippi.name, status.status, cippi.type, cippi.x, cippi.y from cippi, l_state state, l_district district, l_location location, l_status status where cippi.location = location.id and location.district = district.id and district.state = state.id and cippi.status = status.id order by 1 asc;
      ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('map_view');
    }
}
