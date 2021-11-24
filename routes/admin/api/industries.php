<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\IndustryController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\IndustryController::class, 'store']);
Route::get('/edit/{industry_id}', [\App\Http\Controllers\Admin\API\IndustryController::class, 'edit']);
Route::post('/edit/{industry_id}', [\App\Http\Controllers\Admin\API\IndustryController::class, 'update']);
Route::get('/delete/{industry_id}', [\App\Http\Controllers\Admin\API\IndustryController::class, 'destroy']);

