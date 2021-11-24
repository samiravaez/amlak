<?php

use Illuminate\Support\Facades\Route;

//ostans
Route::get('/ostans', [\App\Http\Controllers\Admin\API\OstansController::class, 'index']);//*
Route::post('/ostans', [\App\Http\Controllers\Admin\API\OstansController::class, 'store']);//*
Route::get('/ostans/edit/{ostan_id}', [\App\Http\Controllers\Admin\API\OstansController::class, 'edit']);//*
Route::post('/ostans/edit/{ostan_id}', [\App\Http\Controllers\Admin\API\OstansController::class, 'update']);//*
Route::get('/ostans/delete/{ostan_id}', [\App\Http\Controllers\Admin\API\OstansController::class, 'delete']);//*

//shahrestans
Route::get('/shahrestans/{ostan_id}', [\App\Http\Controllers\Admin\API\ShahrestansController::class, 'index']);//*
Route::post('/shahrestans', [\App\Http\Controllers\Admin\API\ShahrestansController::class, 'store']);//*
Route::get('/shahrestans/edit/{ostan_id}', [\App\Http\Controllers\Admin\API\ShahrestansController::class, 'edit']);//*
Route::post('/shahrestans/edit/{ostan_id}', [\App\Http\Controllers\Admin\API\ShahrestansController::class, 'update']);//*
Route::get('/shahrestans/delete/{ostan_id}', [\App\Http\Controllers\Admin\API\ShahrestansController::class, 'delete']);//*

//manategh
Route::get('/manategh/{shahrestan_id}', [\App\Http\Controllers\Admin\API\ManteghController::class, 'index']);//*
Route::post('/manategh', [\App\Http\Controllers\Admin\API\ManteghController::class, 'store']);//*
Route::get('/mantaghe/edit/{manategh_id}', [\App\Http\Controllers\Admin\API\ManteghController::class, 'edit']);//*
Route::post('/mantaghe/edit/{manategh_id}', [\App\Http\Controllers\Admin\API\ManteghController::class, 'update']);//*
Route::get('/mantaghe/delete/{manategh_id}', [\App\Http\Controllers\Admin\API\ManteghController::class, 'delete']);//*

//bakhshs
Route::get('/bakhshs/{mantaghe_id}', [\App\Http\Controllers\Admin\API\BakhshsController::class, 'index']);//*
Route::post('/bakhshs', [\App\Http\Controllers\Admin\API\BakhshsController::class, 'store']);//*
Route::get('/bakhshs/edit/{bakhsh_id}', [\App\Http\Controllers\Admin\API\BakhshsController::class, 'edit']);//*
Route::post('/bakhshs/edit/{bakhsh_id}', [\App\Http\Controllers\Admin\API\BakhshsController::class, 'update']);//*
Route::get('/bakhshs/delete/{bakhsh_id}', [\App\Http\Controllers\Admin\API\BakhshsController::class, 'delete']);//*
