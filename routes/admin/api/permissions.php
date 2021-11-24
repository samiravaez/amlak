<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\PermissionsController::class, 'index']);
Route::get('/create', [\App\Http\Controllers\Admin\API\PermissionsController::class, 'create']);
Route::post('/create', [\App\Http\Controllers\Admin\API\PermissionsController::class, 'store']);
Route::get('/edit/{permission_id}', [\App\Http\Controllers\Admin\API\PermissionsController::class, 'edit']);
Route::post('/edit/{permission_id}', [\App\Http\Controllers\Admin\API\PermissionsController::class, 'update']);
Route::get('/delete/{permission_id}', [\App\Http\Controllers\Admin\API\PermissionsController::class, 'delete']);

