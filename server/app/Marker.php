<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
// use Phaza\LaravelPostgis\Eloquent\PostgisTrait;
// use Phaza\LaravelPostgis\Geometries\Point;

class Marker extends Model{
  protected $table = 'marker';
  // use PostgisTrait;
  // protected $fillable=['location','name','status','type','x','y'];
  protected $guarded = [];
  // protected $postgisFields = ['geom'];
  // protected $postgisTypes = [ 'geom' => ['geomtype' => 'geometry', 'srid' => 4326] ];
}
