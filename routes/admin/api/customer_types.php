<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\CustomerTypeController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\CustomerTypeController::class, 'store']);
Route::post('/show/{type_id}', [\App\Http\Controllers\Admin\API\CustomerTypeController::class, 'show']);
Route::get('/edit/{type_id}', [\App\Http\Controllers\Admin\API\CustomerTypeController::class, 'edit']);
Route::post('/edit/{type_id}', [\App\Http\Controllers\Admin\API\CustomerTypeController::class, 'update']);
Route::get('/delete/{type_id}', [\App\Http\Controllers\Admin\API\CustomerTypeController::class, 'destroy']);

