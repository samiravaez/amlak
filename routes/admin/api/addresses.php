<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\AddressController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\AddressController::class, 'store']);
Route::post('/show/{address_id}', [\App\Http\Controllers\Admin\API\AddressController::class, 'show']);
Route::get('/edit/{address_id}', [\App\Http\Controllers\Admin\API\AddressController::class, 'edit']);
Route::post('/edit/{address_id}', [\App\Http\Controllers\Admin\API\AddressController::class, 'update']);
Route::get('/delete/{address_id}', [\App\Http\Controllers\Admin\API\AddressController::class, 'destroy']);



