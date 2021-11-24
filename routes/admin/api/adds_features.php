<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'store']);
Route::get('/edit/{adds_feature_id}', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'edit']);
Route::post('/edit/{adds_feature_id}', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'update']);
Route::get('/delete/{adds_feature_id}', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'delete']);

