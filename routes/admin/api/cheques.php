<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\ChequeController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\ChequeController::class, 'store']);
Route::post('/show/{cheque_id}', [\App\Http\Controllers\Admin\API\ChequeController::class, 'show']);
Route::get('/edit/{cheque_id}', [\App\Http\Controllers\Admin\API\ChequeController::class, 'edit']);
Route::post('/edit/{cheque_id}', [\App\Http\Controllers\Admin\API\ChequeController::class, 'update']);
Route::get('/delete/{cheque_id}', [\App\Http\Controllers\Admin\API\ChequeController::class, 'destroy']);

