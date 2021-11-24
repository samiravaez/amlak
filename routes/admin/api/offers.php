<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\OfferController::class, 'index']);
Route::post('/', [\App\Http\Controllers\Admin\API\OfferController::class, 'store']);
Route::post('/show/{offer_id}', [\App\Http\Controllers\Admin\API\OfferController::class, 'show']);
Route::get('/edit/{offer_id}', [\App\Http\Controllers\Admin\API\OfferController::class, 'edit']);
Route::post('/edit/{offer_id}', [\App\Http\Controllers\Admin\API\OfferController::class, 'update']);
Route::get('/delete/{offer_id}', [\App\Http\Controllers\Admin\API\OfferController::class, 'destroy']);

