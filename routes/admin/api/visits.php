<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\VisitController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\VisitController::class, 'store']);
Route::get('/show/{visit_id}', [\App\Http\Controllers\Admin\API\VisitController::class, 'show']);
Route::get('/edit/{visit_id}', [\App\Http\Controllers\Admin\API\VisitController::class, 'edit']);
Route::post('/edit/{visit_id}', [\App\Http\Controllers\Admin\API\VisitController::class, 'update']);
Route::get('/delete/{visit_id}', [\App\Http\Controllers\Admin\API\VisitController::class, 'destroy']);
