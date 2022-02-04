<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\EmailController::class, 'index']);
Route::post('/create', [\App\Http\Controllers\Admin\API\EmailController::class, 'store']);
Route::get('/edit/{email_id}', [\App\Http\Controllers\Admin\API\EmailController::class, 'edit']);
Route::post('/edit/{email_id}', [\App\Http\Controllers\Admin\API\EmailController::class, 'update']);
Route::get('/delete/{email_id}', [\App\Http\Controllers\Admin\API\EmailController::class, 'delete']);

