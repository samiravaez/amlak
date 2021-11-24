<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\AttendantController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\AttendantController::class, 'store']);
Route::post('/show/{attendant_id}', [\App\Http\Controllers\Admin\API\AttendantController::class, 'show']);
Route::get('/edit/{attendant_id}', [\App\Http\Controllers\Admin\API\AttendantController::class, 'edit']);
Route::post('/edit/{attendant_id}', [\App\Http\Controllers\Admin\API\AttendantController::class, 'update']);
Route::get('/delete/{attendant_id}', [\App\Http\Controllers\Admin\API\AttendantController::class, 'destroy']);

