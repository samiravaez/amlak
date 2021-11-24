<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\DealController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\DealController::class, 'store']);
Route::post('/show/{deal_id}', [\App\Http\Controllers\Admin\API\DealController::class, 'show']);
Route::get('/edit/{deal_id}', [\App\Http\Controllers\Admin\API\DealController::class, 'edit']);
Route::post('/edit/{deal_id}', [\App\Http\Controllers\Admin\API\DealController::class, 'update']);
Route::get('/delete/{deal_id}', [\App\Http\Controllers\Admin\API\DealController::class, 'delete']);

