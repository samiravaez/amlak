<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\MeetingController::class, 'index']);
Route::post('/create', [\App\Http\Controllers\Admin\API\MeetingController::class, 'store']);
Route::get('/show/{meeting_id}', [\App\Http\Controllers\Admin\API\MeetingController::class, 'show']);
Route::get('/edit/{meeting_id}', [\App\Http\Controllers\Admin\API\MeetingController::class, 'edit']);
Route::post('/edit/{meeting_id}', [\App\Http\Controllers\Admin\API\MeetingController::class, 'update']);
Route::get('/delete/{meeting_id}', [\App\Http\Controllers\Admin\API\MeetingController::class, 'destroy']);

