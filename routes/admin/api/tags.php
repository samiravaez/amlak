<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\TagsController::class, 'index'])->name('admin.tags.list');
Route::post('/', [\App\Http\Controllers\Admin\API\TagsController::class, 'store'])->name('admin.tags.create');
Route::get('/edit/{term_id}', [\App\Http\Controllers\Admin\API\TagsController::class, 'edit'])->name('admin.tag.edit');
Route::post('/edit/{term_id}', [\App\Http\Controllers\Admin\API\TagsController::class, 'update'])->name('admin.tag.update');
Route::get('/delete/{term_id}', [\App\Http\Controllers\Admin\API\TagsController::class, 'delete'])->name('admin.tag.delete');

