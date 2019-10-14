<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class MarkerCollection extends ResourceCollection{
    public function toArray($request){
      return [
        'id' => $this->id,
        'state' => $this->state,
        'district' => $this->district,
        'location' => $this->location,
        'name' => $this->name,
        'status' => $this->status,
        'type' => $this->type,
        'x' => $this->x,
        'y' => $this->y,
      ];
    }
}
