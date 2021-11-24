<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

if (version_compare(PHP_VERSION, '7.2.0', '>=')) {
    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
}

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [\App\Http\Controllers\Frontend\UsersController::class, 'register']);
Route::post('/dologin', [\App\Http\Controllers\Frontend\UsersController::class, 'dologin']);
Route::middleware('auth:api')->get('/logout', [\App\Http\Controllers\Frontend\UsersController::class, 'logout']);
Route::middleware('auth:api')->get('/get_my_info', [\App\Http\Controllers\Frontend\UsersController::class, 'get_my_info']);
Route::get('/special_adds/{count?}', [\App\Http\Controllers\Frontend\AddsController::class, 'getSpeciallAdds']);
Route::get('/get_last_adds/{page?}/{posts_per_page?}', [\App\Http\Controllers\Frontend\AddsController::class, 'getLastAdds']);
Route::get('/get_add_info/{add_id}', [\App\Http\Controllers\Frontend\AddsController::class, 'getAddInfo']);
Route::post('/get_custom_adds/{page?}/{posts_per_page?}', [\App\Http\Controllers\Frontend\AddsController::class, 'getCustomAdds']);
Route::get('/get_options', [\App\Http\Controllers\Frontend\AddsController::class, 'getOptions']);
Route::middleware('auth:api')->get('/favorite_adds/{page?}/{posts_per_page?}', [\App\Http\Controllers\Frontend\AddsController::class, 'getFavoriteAdds']);
Route::middleware('auth:api')->post('/add_to_favorites', [\App\Http\Controllers\Frontend\AddsController::class, 'add_to_favorites']);

Route::middleware('auth:api')->post('/update_profile', [\App\Http\Controllers\Frontend\UsersController::class, 'updateProfile']);
Route::middleware('auth:api')->post('/change_password', [\App\Http\Controllers\Frontend\UsersController::class, 'change_password']);

Route::get('/get_ostans', [\App\Http\Controllers\Frontend\AddsController::class, 'getOstans']);
Route::get('/get_shahrestans', [\App\Http\Controllers\Frontend\AddsController::class, 'getShahrestans']);
Route::get('/get_manategh', [\App\Http\Controllers\Frontend\AddsController::class, 'getManategh']);
Route::get('/get_bakhshs', [\App\Http\Controllers\Frontend\AddsController::class, 'getBakhshs']);
Route::get('/search_mantaghe', [\App\Http\Controllers\Frontend\AddsController::class, 'getManateghLike']);

Route::get('/get_adds_info', [\App\Http\Controllers\Frontend\AddsController::class, 'getAddsTermAndMeta']);

Route::middleware('auth:api')->post('/add_addss', [\App\Http\Controllers\Frontend\AddsController::class, 'register_adds']);

Route::middleware('auth:api')->get('/my_adds', [\App\Http\Controllers\Frontend\AddsController::class, 'show_user_adds']);

Route::middleware('auth:api')->get('/get_my_add_info/{add_id}', [\App\Http\Controllers\Frontend\AddsController::class, 'get_add_info']);
//Route::middleware('auth:api')->post('/upload_image', [\App\Http\Controllers\Admin\FilesController::class, 'upload_images']);
Route::group(['prefix' => 'admin'], function () {
    require_once('admin/api/routes.php');

});
