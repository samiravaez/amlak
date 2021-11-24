<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\LandTypeController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\LandTypeController::class, 'store']);
Route::get('/edit/{term_id}', [\App\Http\Controllers\Admin\API\LandTypeController::class, 'edit']);
Route::post('/edit/{term_id}', [\App\Http\Controllers\Admin\API\LandTypeController::class, 'update']);
Route::get('/delete/{term_id}', [\App\Http\Controllers\Admin\API\LandTypeController::class, 'delete']);

