<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\RolesController::class, 'index']);
Route::get('/create', [\App\Http\Controllers\Admin\API\RolesController::class, 'create']);
Route::post('/create', [\App\Http\Controllers\Admin\API\RolesController::class, 'store']);
Route::get('/edit/{role_id}', [\App\Http\Controllers\Admin\API\RolesController::class, 'edit']);
Route::post('/edit/{role_id}', [\App\Http\Controllers\Admin\API\RolesController::class, 'update']);
Route::get('/delete/{role_id}', [\App\Http\Controllers\Admin\API\RolesController::class, 'delete']);

