<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\EducationLevelController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\EducationLevelController::class, 'store']);
Route::get('/edit/{level_id}', [\App\Http\Controllers\Admin\API\EducationLevelController::class, 'edit']);
Route::post('/edit/{level_id}', [\App\Http\Controllers\Admin\API\EducationLevelController::class, 'update']);
Route::get('/delete/{level_id}', [\App\Http\Controllers\Admin\API\EducationLevelController::class, 'destroy']);

