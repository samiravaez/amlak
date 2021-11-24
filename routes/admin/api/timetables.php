<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\TimetableController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\TimetableController::class, 'store']);
Route::get('/show/{time_id}', [\App\Http\Controllers\Admin\API\TimetableController::class, 'show']);
Route::get('/edit/{time_id}', [\App\Http\Controllers\Admin\API\TimetableController::class, 'edit']);
Route::post('/edit/{time_id}', [\App\Http\Controllers\Admin\API\TimetableController::class, 'update']);
Route::get('/delete/{time_id}', [\App\Http\Controllers\Admin\API\TimetableController::class, 'destroy']);

