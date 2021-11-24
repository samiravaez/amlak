<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\CategoriesController::class, 'index'])->name('admin.categories.list');
Route::post('/', [\App\Http\Controllers\Admin\API\CategoriesController::class, 'store'])->name('admin.categories.create');
Route::get('/edit/{term_id}', [\App\Http\Controllers\Admin\API\CategoriesController::class, 'edit'])->name('admin.category.edit');
Route::post('/edit/{term_id}', [\App\Http\Controllers\Admin\API\CategoriesController::class, 'update'])->name('admin.category.update');
Route::get('/delete/{term_id}', [\App\Http\Controllers\Admin\API\CategoriesController::class, 'delete'])->name('admin.category.delete');
