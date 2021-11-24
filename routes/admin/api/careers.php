<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\CareerController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\CareerController::class, 'store']);
Route::get('/edit/{career_id}', [\App\Http\Controllers\Admin\API\CareerController::class, 'edit']);
Route::post('/edit/{career_id}', [\App\Http\Controllers\Admin\API\CareerController::class, 'update']);
Route::get('/delete/{career_id}', [\App\Http\Controllers\Admin\API\CareerController::class, 'delete']);



