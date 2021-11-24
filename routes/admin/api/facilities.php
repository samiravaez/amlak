<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\FacilitiesController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\FacilitiesController::class, 'store']);
Route::get('/edit/{facility_id}', [\App\Http\Controllers\Admin\API\FacilitiesController::class, 'edit']);
Route::post('/edit/{facility_id}', [\App\Http\Controllers\Admin\API\FacilitiesController::class, 'update']);
Route::get('/delete/{facility_id}', [\App\Http\Controllers\Admin\API\FacilitiesController::class, 'delete']);

