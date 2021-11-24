<?php

use Illuminate\Support\Facades\Route;

//Route::get('/add_crm_customer', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'add_customer'])->name('crm.add_customer');
//Route::post('/check_crm_customer', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'check_customer'])->name('crm.check_customer');
//Route::get('/crm_request/{user_id}', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'crm_request'])->name('crm.crm_request');
//Route::post('/crm_request/{user_id}', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'crm_request_create'])->name('crm.crm_request_create');
//Route::get('/add_new_customer/phone/{phone}', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'add_new_customer'])->name('crm.add_new_customer');
//Route::post('/add_new_customer/phone/{phone}', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'save_new_customer'])->name('crm.save_new_customer');
//Route::get('/all_customers', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'show_all_customers'])->name('crm.show_all_customers');
//Route::get('/all_region_customers', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'show_all_region_customers'])->name('crm.show_all_region_customers');
//Route::get('/my_customers', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'show_my_customers'])->name('crm.show_my_customers');
//Route::get('/crm_request_edit/{crm_id}', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'crm_request_edit'])->name('admin.crm_request_edit');
//Route::post('/crm_request_edit/{crm_id}', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'crm_request_update'])->name('admin.crm_request_update');
//Route::get('/crm_suggested_adds/{crm_id}', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'showSuggestedAdds'])->name('admin.showSuggestedAdds');
//Route::get('/crm_request_view/{crm_id}', [\App\Http\Controllers\Admin\API\CRMcontroller::class, 'crm_request_view'])->name('crm_request_view');

Route::get('/customers', [\App\Http\Controllers\Admin\API\CustomerController::class, 'customer_index'])->name('admin.customer.index');
Route::get('/customer/show/{customer_id}', [\App\Http\Controllers\Admin\API\CustomerController::class, 'customer_show'])->name('admin.customer.show');
Route::get('/customer/create', [\App\Http\Controllers\Admin\API\CustomerController::class, 'customer_create'])->name('admin.customer.create');
Route::post('/customer/store', [\App\Http\Controllers\Admin\API\CustomerController::class, 'customer_store'])->name('admin.customer.store');
Route::get('/customer/edit/{customer_id}', [\App\Http\Controllers\Admin\API\CustomerController::class, 'customer_edit'])->name('admin.customer.edit');
Route::post('/customer/update/{customer_id}', [\App\Http\Controllers\Admin\API\CustomerController::class, 'customer_update'])->name('admin.customer.update');
Route::get('/customer/destroy/{customer_id}', [\App\Http\Controllers\Admin\API\CustomerController::class, 'customer_destroy'])->name('admin.customer.destroy');
Route::post('/customer/inquiry', [\App\Http\Controllers\Admin\API\CustomerController::class, 'customer_inquiry'])->name('admin.customer.inquiry');
Route::get('/my_customers', [\App\Http\Controllers\Admin\API\CustomerController::class, 'my_customers']);
Route::get('/user_region_customers', [\App\Http\Controllers\Admin\API\CustomerController::class, 'user_region_customers']);

//entity
Route::get('/entities', [\App\Http\Controllers\Admin\API\CustomerController::class, 'entity_index'])->name('admin.entity.index');
Route::get('/entity/show/{entity_id}', [\App\Http\Controllers\Admin\API\CustomerController::class, 'entity_show'])->name('admin.entity.show');
Route::get('/entity/create', [\App\Http\Controllers\Admin\API\CustomerController::class, 'entity_create'])->name('admin.entity.create');
Route::post('/entity/store', [\App\Http\Controllers\Admin\API\CustomerController::class, 'entity_store'])->name('admin.entity.store');
Route::get('/entity/edit/{entity_id}', [\App\Http\Controllers\Admin\API\CustomerController::class, 'entity_edit'])->name('admin.entity.edit');
Route::post('/entity/update/{entity_id}', [\App\Http\Controllers\Admin\API\CustomerController::class, 'entity_update'])->name('admin.entity.update');
Route::get('/entity/destroy/{entity_id}', [\App\Http\Controllers\Admin\API\CustomerController::class, 'entity_destroy'])->name('admin.entity.destroy');
Route::post('/entity/inquiry', [\App\Http\Controllers\Admin\API\CustomerController::class, 'entity_inquiry'])->name('admin.entity.inquiry');
