<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\CustomerStateController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\CustomerStateController::class, 'store']);
Route::post('/show/{state_id}', [\App\Http\Controllers\Admin\API\CustomerStateController::class, 'show']);
Route::get('/edit/{state_id}', [\App\Http\Controllers\Admin\API\CustomerStateController::class, 'edit']);
Route::post('/edit/{state_id}', [\App\Http\Controllers\Admin\API\CustomerStateController::class, 'update']);
Route::get('/delete/{state_id}', [\App\Http\Controllers\Admin\API\CustomerStateController::class, 'destroy']);

