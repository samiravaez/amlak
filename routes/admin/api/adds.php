<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\AddsController::class, 'index'])->name('admin.adds.list');
Route::post('/', [\App\Http\Controllers\Admin\API\AddsController::class, 'filter_all_adds'])->name('admin.adds.filter_all_adds');
Route::get('/my_adds', [\App\Http\Controllers\Admin\API\AddsController::class, 'my_adds'])->name('admin.adds.my_adds');
Route::post('/my_adds', [\App\Http\Controllers\Admin\API\AddsController::class, 'filter_my_adds'])->name('admin.adds.filter_my_adds');
Route::get('/waiting_adds', [\App\Http\Controllers\Admin\API\AddsController::class, 'waiting_adds'])->name('admin.adds.waiting_adds');
Route::get('/show_archive_adds', [\App\Http\Controllers\Admin\API\AddsController::class, 'show_archive_adds'])->name('admin.adds.show_archive_adds');
Route::get('/show_trash_adds', [\App\Http\Controllers\Admin\API\AddsController::class, 'show_trash_adds'])->name('admin.adds.show_trash_adds');
Route::get('/create', [\App\Http\Controllers\Admin\API\AddsController::class, 'create'])->name('admin.adds.create');
Route::post('/create', [\App\Http\Controllers\Admin\API\AddsController::class, 'store'])->name('admin.adds.store');
Route::get('/edit/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'edit'])->name('admin.add.edit');
Route::post('/edit/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'update'])->name('admin.add.update');
Route::get('/delete/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'delete'])->name('admin.add.delete');
Route::get('/archive/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'archive_adds'])->name('admin.add.archive');
Route::get('/trash/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'trash_adds'])->name('admin.add.trash');
Route::get('/recursion/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'recursion_adds'])->name('admin.add.recursion');
Route::get('/touch/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'touch'])->name('admin.add.touch');
Route::get('/reject/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'reject_adds'])->name('admin.add.reject_adds');
Route::get('/confirm/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'confirm_adds'])->name('admin.add.confirm_adds');
Route::get('/reset_confirm/{post_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'reset_confirm_adds'])->name('admin.add.reset_confirm_adds');
Route::get('/get_add_info/{add_id}', [\App\Http\Controllers\Admin\API\AddsController::class, 'getAddInfo']);
Route::get('/get_adds_info',[\App\Http\Controllers\Admin\API\AddsController::class,'getAddsTermAndMeta']);

