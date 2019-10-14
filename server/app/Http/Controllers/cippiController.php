<?php
namespace App\Http\Controllers;
use App\Marker;
use Illuminate\Http\Request;

class cippiController extends Controller{
  public function index(){
    // return MarkerCollection::collection(Marker::all());
    return Marker::all();
  }
  public function create(){}
  public function store(Request $request){}
  public function show(Marker $cippi){}
  public function edit(Marker $cippi){}
  public function update(Request $request, Marker $cippi){}
  public function destroy(Marker $cippi){}
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */

  /**
   * Display the specified resource.
   *
   * @param  \App\cippi  $cippi
   * @return \Illuminate\Http\Response
   */

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\cippi  $cippi
   * @return \Illuminate\Http\Response
   */

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\cippi  $cippi
   * @return \Illuminate\Http\Response
   */

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\cippi  $cippi
   * @return \Illuminate\Http\Response
   */
}
