<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\RemindMethodController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\RemindMethodController::class, 'store']);
Route::get('/edit/{method_id}', [\App\Http\Controllers\Admin\API\RemindMethodController::class, 'edit']);
Route::post('/edit/{method_id}', [\App\Http\Controllers\Admin\API\RemindMethodController::class, 'update']);
Route::get('/delete/{method_id}', [\App\Http\Controllers\Admin\API\RemindMethodController::class, 'destroy']);

