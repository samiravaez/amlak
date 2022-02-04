<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\ActivityController::class, 'index']);
Route::get('/show/{activity_id}', [\App\Http\Controllers\Admin\API\ActivityController::class, 'show']);
Route::get('/store', [\App\Http\Controllers\Admin\API\ActivityController::class, 'store']);
Route::get('/delete/{activity_id}', [\App\Http\Controllers\Admin\API\ActivityController::class, 'destroy']);



