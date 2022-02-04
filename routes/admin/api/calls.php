<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\CallController::class, 'index']);
Route::post('/create', [\App\Http\Controllers\Admin\API\CallController::class, 'store']);
Route::post('/show/{call_id}', [\App\Http\Controllers\Admin\API\CallController::class, 'show']);
Route::get('/edit/{call_id}', [\App\Http\Controllers\Admin\API\CallController::class, 'edit']);
Route::post('/edit/{call_id}', [\App\Http\Controllers\Admin\API\CallController::class, 'update']);
Route::get('/delete/{call_id}', [\App\Http\Controllers\Admin\API\CallController::class, 'destroy']);

