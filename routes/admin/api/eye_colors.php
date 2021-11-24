<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\EyeColorController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\EyeColorController::class, 'store']);
Route::get('/edit/{color_id}', [\App\Http\Controllers\Admin\API\EyeColorController::class, 'edit']);
Route::post('/edit/{color_id}', [\App\Http\Controllers\Admin\API\EyeColorController::class, 'update']);
Route::get('/delete/{color_id}', [\App\Http\Controllers\Admin\API\EyeColorController::class, 'delete']);

