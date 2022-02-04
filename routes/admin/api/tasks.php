<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\TaskController::class, 'index']);
Route::post('/create', [\App\Http\Controllers\Admin\API\TaskController::class, 'store']);
Route::post('/show/{task_id}', [\App\Http\Controllers\Admin\API\TaskController::class, 'store']);
Route::get('/edit/{task_id}', [\App\Http\Controllers\Admin\API\TaskController::class, 'edit']);
Route::post('/edit/{task_id}', [\App\Http\Controllers\Admin\API\TaskController::class, 'update']);
Route::get('/delete/{task_id}', [\App\Http\Controllers\Admin\API\TaskController::class, 'destroy']);

