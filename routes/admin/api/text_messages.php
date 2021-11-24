<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\TextMessageController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\TextMessageController::class, 'store']);
Route::get('/show/{message_id}', [\App\Http\Controllers\Admin\API\TextMessageController::class, 'show']);
Route::get('/edit/{message_id}', [\App\Http\Controllers\Admin\API\TextMessageController::class, 'edit']);
Route::post('/edit/{message_id}', [\App\Http\Controllers\Admin\API\TextMessageController::class, 'update']);
Route::get('/delete/{message_id}', [\App\Http\Controllers\Admin\API\TextMessageController::class, 'destroy']);

