<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\PurchaseStageController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\PurchaseStageController::class, 'store']);
Route::get('/edit/{stage_id}', [\App\Http\Controllers\Admin\API\PurchaseStageController::class, 'edit']);
Route::post('/edit/{stage_id}', [\App\Http\Controllers\Admin\API\PurchaseStageController::class, 'update']);
Route::get('/delete/{stage_id}', [\App\Http\Controllers\Admin\API\PurchaseStageController::class, 'destroy']);

