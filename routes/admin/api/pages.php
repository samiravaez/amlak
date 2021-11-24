<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Admin\API\PagesController::class, 'index'])->name('admin.pages.list');
Route::get('/create', [\App\Http\Controllers\Admin\API\PagesController::class, 'create'])->name('admin.pages.create');
Route::post('/create', [\App\Http\Controllers\Admin\API\PagesController::class, 'store'])->name('admin.pages.store');
Route::get('/edit/{post_id}', [\App\Http\Controllers\Admin\API\PagesController::class, 'edit'])->name('admin.page.edit');
Route::post('/edit/{post_id}', [\App\Http\Controllers\Admin\API\PagesController::class, 'update'])->name('admin.page.update');
Route::get('/delete/{post_id}', [\App\Http\Controllers\Admin\API\PagesController::class, 'delete'])->name('admin.page.delete');
