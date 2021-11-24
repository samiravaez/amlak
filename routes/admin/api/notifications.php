<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\NotificationController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\NotificationController::class, 'store']);
Route::get('/edit/{notification_id}', [\App\Http\Controllers\Admin\API\NotificationController::class, 'edit']);
Route::post('/edit/{notification_id}', [\App\Http\Controllers\Admin\API\NotificationController::class, 'update']);
Route::get('/delete/{notification_id}', [\App\Http\Controllers\Admin\API\NotificationController::class, 'delete']);
Route::get('/getUnpopped', [\App\Http\Controllers\Admin\API\NotificationController::class, 'get_unpopped']);
Route::get('/getUnseen', [\App\Http\Controllers\Admin\API\NotificationController::class, 'get_unseen']);

