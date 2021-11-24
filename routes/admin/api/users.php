<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\UsersController::class, 'index']);
Route::get('/create', [\App\Http\Controllers\Admin\API\UsersController::class, 'create']);
Route::post('/create', [\App\Http\Controllers\Admin\API\UsersController::class, 'store']);
Route::get('/edit/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'edit']);
Route::post('/edit/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'update']);
Route::get('/filter/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'filter_user_permissions']);
Route::post('/filter/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'filter_user_permissions_post']);
Route::get('/delete/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'delete']);
Route::get('/regions/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'select_user_regions']);
Route::get('/area/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'area']);
Route::post('/area/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'save_area']);
Route::get('/transfer_adds/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'transfer_adds']);
Route::post('/transfer_adds/{user_id}', [\App\Http\Controllers\Admin\API\UsersController::class, 'transfer_adds_post']);
