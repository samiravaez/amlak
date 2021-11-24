<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\PostsController::class, 'index']);//*
Route::get('/create', [\App\Http\Controllers\Admin\API\PostsController::class, 'create']);//*
Route::post('/create', [\App\Http\Controllers\Admin\API\PostsController::class, 'store'])->name('admin.posts.store');//*
Route::get('/edit/{post_id}', [\App\Http\Controllers\Admin\API\PostsController::class, 'edit'])->name('admin.post.edit');//*
Route::post('/edit/{post_id}', [\App\Http\Controllers\Admin\API\PostsController::class, 'update'])->name('admin.post.update');//*
Route::get('/delete/{post_id}', [\App\Http\Controllers\Admin\API\PostsController::class, 'delete'])->name('admin.post.delete');//*
Route::get('/get_adds_info',[\App\Http\Controllers\Admin\API\PostsController::class,'getAddsTermAndMeta']);
Route::get('/get_add_info/{add_id}', [\App\Http\Controllers\Admin\API\PostsController::class, 'getAddInfo']);
Route::get('/get_adds_info',[\App\Http\Controllers\Admin\API\AddsController::class,'getAddsTermAndMeta']);
