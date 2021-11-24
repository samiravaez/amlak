<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\TransactionController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\TransactionController::class, 'store']);
Route::get('/edit/{term_id}', [\App\Http\Controllers\Admin\API\TransactionController::class, 'edit']);
Route::post('/edit/{term_id}', [\App\Http\Controllers\Admin\API\TransactionController::class, 'update']);
Route::get('/delete/{term_id}', [\App\Http\Controllers\Admin\API\TransactionController::class, 'delete']);

