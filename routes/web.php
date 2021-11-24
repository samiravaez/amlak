<?php
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/tbt-panel/{path?}',function(){
    return view('welcome');
})->where('path','.*');
Route::get('/tbt-login/{path?}',function(){
    return view('welcome');
})->where('path','.*');

Route::get('/panel', [\App\Http\Controllers\Admin\AuthController::class, 'showLoginWithUserNameAndPass']);
Route::post('/panel', [\App\Http\Controllers\Admin\AuthController::class, 'doLoginWithUserNameAndPass'])->name('login');

Route::get('/login-phone', [\App\Http\Controllers\Admin\AuthController::class, 'sendLoginRequest'])->name('login.phone');
Route::post('/login-phone', [\App\Http\Controllers\Admin\AuthController::class, 'checkLoginPhone'])->name('checkLoginPhone');
//Route::post('/login-phone', [\App\Http\Controllers\Admin\AuthController::class, 'loginWithPhone'])->name('loginWithPhoneShow');
Route::get('/login-phone/{phone}', [\App\Http\Controllers\Admin\AuthController::class, 'checkLoginPhoneShow'])->name('checkLoginPhoneShow');
Route::get('/sendLoginCodeBySms',[\App\Http\Controllers\Admin\AjaxController::class,'sendLoginCodeBySms'])->name('sendLoginCodeBySms');


Route::get('/register', [\App\Http\Controllers\Admin\AuthController::class, 'showRegisterWithUserNameAndPass']);
Route::post('/register', [\App\Http\Controllers\Admin\AuthController::class, 'doRegisterWithUserNameAndPass'])->name('register');


Route::get('/logout', [\App\Http\Controllers\Admin\AuthController::class, 'logout'])->name('logout');

//Route::get('/{post_slug}', [\App\Http\Controllers\Frontend\singleController::class, 'show']);

Route::group(['prefix' => 'panel', 'middleware' => 'admin'], function () {
    //    users route
    Route::group(['prefix' => 'users','middleware' => 'permission:users_management'],function (){
        Route::get('/', [\App\Http\Controllers\Admin\UsersController::class, 'index'])->name('admin.users.list');
        Route::get('/create', [\App\Http\Controllers\Admin\UsersController::class, 'create'])->name('admin.users.create');
        Route::post('/create', [\App\Http\Controllers\Admin\UsersController::class, 'store']);
        Route::get('/{user_id}', [\App\Http\Controllers\Admin\UsersController::class, 'edit'])->name('admin.users.edit');
        Route::post('/{user_id}', [\App\Http\Controllers\Admin\UsersController::class, 'update'])->name('admin.users.update');
        Route::get('/filter/{user_id}', [\App\Http\Controllers\Admin\UsersController::class, 'filter_user_permissions'])->name('admin.users.filter');
        Route::post('/filter/{user_id}', [\App\Http\Controllers\Admin\UsersController::class, 'filter_user_permissions_post']);
        Route::get('/delete/{user_id}', [\App\Http\Controllers\Admin\UsersController::class, 'delete'])->name('admin.users.delete');
        Route::get('/regions/{user_id}', [\App\Http\Controllers\Admin\UsersController::class, 'select_user_regions'])->name('admin.users.regions');
        Route::get('/area/{user_id}', [\App\Http\Controllers\Admin\UsersController::class, 'area'])->name('admin.users.area');
        Route::post('/area/{user_id}', [\App\Http\Controllers\Admin\UsersController::class, 'save_area'])->name('admin.users.save_area');
        Route::get('/transfer_adds/{user_id}',[\App\Http\Controllers\Admin\UsersController::class,'transfer_adds'])->name('admin.users.transfer_adds');
        Route::post('/transfer_adds/{user_id}',[\App\Http\Controllers\Admin\UsersController::class,'transfer_adds_post']);
    });

    //    roles route
    Route::group(['prefix' => 'roles','middleware' => 'role:super-admin'],function (){
        Route::get('/', [\App\Http\Controllers\Admin\RolesController::class, 'index'])->name('admin.roles.list');
        Route::get('/create', [\App\Http\Controllers\Admin\RolesController::class, 'create'])->name('admin.roles.create');
        Route::post('/create', [\App\Http\Controllers\Admin\RolesController::class, 'store'])->name('admin.roles.store');
        Route::get('/{role_id}', [\App\Http\Controllers\Admin\RolesController::class, 'edit'])->name('admin.roles.edit');
        Route::post('/{role_id}', [\App\Http\Controllers\Admin\RolesController::class, 'update'])->name('admin.roles.update');
        Route::get('/delete/{role_id}', [\App\Http\Controllers\Admin\RolesController::class, 'delete'])->name('admin.roles.delete');
    });

    //    permissions route
    Route::group(['prefix' => 'permissions','middleware' => 'role:super-admin'],function () {
        Route::get('/', [\App\Http\Controllers\Admin\PermissionsController::class, 'index'])->name('admin.permissions.list');
        Route::get('/create', [\App\Http\Controllers\Admin\PermissionsController::class, 'create'])->name('admin.permissions.create');
        Route::post('/create', [\App\Http\Controllers\Admin\PermissionsController::class, 'store'])->name('admin.permissions.store');
        Route::get('/{permission_id}', [\App\Http\Controllers\Admin\PermissionsController::class, 'edit'])->name('admin.permissions.edit');
        Route::post('/{permission_id}', [\App\Http\Controllers\Admin\PermissionsController::class, 'update'])->name('admin.permissions.update');
        Route::get('/delete/{permission_id}', [\App\Http\Controllers\Admin\PermissionsController::class, 'delete'])->name('admin.permissions.delete');
    });

    //    regions route
    Route::group(['prefix'=>'regions','middleware'=>'permission:regions_management'],function (){
        //ostans route
        Route::get('/ostans', [\App\Http\Controllers\Admin\OstansController::class, 'index'])->name('admin.ostans.index');
        Route::post('/ostans', [\App\Http\Controllers\Admin\OstansController::class, 'store'])->name('admin.ostans.create');
        Route::get('/ostans/{ostan_id}', [\App\Http\Controllers\Admin\OstansController::class, 'edit'])->name('admin.ostan.edit');
        Route::post('/ostans/{ostan_id}', [\App\Http\Controllers\Admin\OstansController::class, 'update'])->name('admin.ostan.update');
        Route::get('/ostans/delete/{ostan_id}', [\App\Http\Controllers\Admin\OstansController::class, 'delete'])->name('admin.ostan.delete');

        //ostans route
        Route::get('/shahrestans', [\App\Http\Controllers\Admin\ShahrestansController::class, 'index'])->name('admin.shahrestans.index');
        Route::post('/shahrestans', [\App\Http\Controllers\Admin\ShahrestansController::class, 'store'])->name('admin.shahrestans.create');
        Route::get('/shahrestans/{ostan_id}', [\App\Http\Controllers\Admin\ShahrestansController::class, 'edit'])->name('admin.shahrestan.edit');
        Route::post('/shahrestans/{ostan_id}', [\App\Http\Controllers\Admin\ShahrestansController::class, 'update'])->name('admin.shahrestan.update');
        Route::get('/shahrestans/delete/{ostan_id}', [\App\Http\Controllers\Admin\ShahrestansController::class, 'delete'])->name('admin.shahrestan.delete');

        //    manategh route
        Route::get('/manategh', [\App\Http\Controllers\Admin\ManteghController::class, 'index'])->name('admin.manategh.index');
        Route::post('/manategh', [\App\Http\Controllers\Admin\ManteghController::class, 'store'])->name('admin.manategh.store');
        Route::get('/mantaghe/{manategh_id}', [\App\Http\Controllers\Admin\ManteghController::class, 'edit'])->name('admin.manategh.edit');
        Route::post('/mantaghe/{manategh_id}', [\App\Http\Controllers\Admin\ManteghController::class, 'update'])->name('admin.manategh.update');
        Route::get('/mantaghe/delete/{manategh_id}', [\App\Http\Controllers\Admin\ManteghController::class, 'delete'])->name('admin.manategh.delete');

        //    bakhshs route
        Route::get('/bakhshs', [\App\Http\Controllers\Admin\BakhshsController::class, 'index'])->name('admin.bakhshs.index');
        Route::post('/bakhshs', [\App\Http\Controllers\Admin\BakhshsController::class, 'store'])->name('admin.bakhsh.store');
        Route::get('/bakhshs/{bakhsh_id}', [\App\Http\Controllers\Admin\BakhshsController::class, 'edit'])->name('admin.bakhsh.edit');
        Route::post('/bakhshs/{bakhsh_id}', [\App\Http\Controllers\Admin\BakhshsController::class, 'update'])->name('admin.bakhsh.update');
        Route::get('/bakhshs/delete/{bakhsh_id}', [\App\Http\Controllers\Admin\BakhshsController::class, 'delete'])->name('admin.bakhsh.delete');
    });

    //    adds more settings route
    Route::group(['middleware'=>'permission:adds_management'],function (){
        //    transactions route
        Route::get('/transactions', [\App\Http\Controllers\Admin\TransactionController::class, 'index'])->name('admin.transactions.list');
        Route::post('/transactions', [\App\Http\Controllers\Admin\TransactionController::class, 'store'])->name('admin.transactions.create');
        Route::get('/transactions/{term_id}', [\App\Http\Controllers\Admin\TransactionController::class, 'edit'])->name('admin.transaction.edit');
        Route::post('/transactions/{term_id}', [\App\Http\Controllers\Admin\TransactionController::class, 'update'])->name('admin.transaction.update');
        Route::get('/transactions/delete/{term_id}', [\App\Http\Controllers\Admin\TransactionController::class, 'delete'])->name('admin.transaction.delete');

        //    land_types route
        Route::get('/land_types', [\App\Http\Controllers\Admin\LandTypeController::class, 'index'])->name('admin.land_types.list');
        Route::post('/land_types', [\App\Http\Controllers\Admin\LandTypeController::class, 'store'])->name('admin.land_types.create');
        Route::get('/land_types/{term_id}', [\App\Http\Controllers\Admin\LandTypeController::class, 'edit'])->name('admin.land_type.edit');
        Route::post('/land_types/{term_id}', [\App\Http\Controllers\Admin\LandTypeController::class, 'update'])->name('admin.land_type.update');
        Route::get('/land_types/delete/{term_id}', [\App\Http\Controllers\Admin\LandTypeController::class, 'delete'])->name('admin.land_type.delete');

        //    adds_features route
        Route::get('/adds_features', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'index'])->name('admin.adds_features.list');
        Route::post('/adds_features', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'store'])->name('admin.adds_features.create');
        Route::get('/adds_features/{adds_feature_id}', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'edit'])->name('admin.adds_feature.edit');
        Route::post('/adds_features/{adds_feature_id}', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'update'])->name('admin.adds_feature.update');
        Route::get('/adds_features/delete/{adds_feature_id}', [\App\Http\Controllers\Admin\AddsFeatureController::class, 'delete'])->name('admin.adds_feature.delete');

        //    facilities route
        Route::get('/facilities', [\App\Http\Controllers\Admin\FacilitiesController::class, 'index'])->name('admin.facilities.list');
        Route::post('/facilities', [\App\Http\Controllers\Admin\FacilitiesController::class, 'store'])->name('admin.facilities.create');
        Route::get('/facilities/{facility_id}', [\App\Http\Controllers\Admin\FacilitiesController::class, 'edit'])->name('admin.facility.edit');
        Route::post('/facilities/{facility_id}', [\App\Http\Controllers\Admin\FacilitiesController::class, 'update'])->name('admin.facility.update');
        Route::get('/facilities/delete/{facility_id}', [\App\Http\Controllers\Admin\FacilitiesController::class, 'delete'])->name('admin.facility.delete');
    });

    //    adds route
    Route::group(['middleware'=>'permission:adds_management|local_adds_management'],function (){
        Route::group(['prefix'=>'adds'],function (){
            Route::get('/', [\App\Http\Controllers\Admin\AddsController::class, 'index'])->name('admin.adds.list');
            Route::post('/', [\App\Http\Controllers\Admin\AddsController::class, 'filter_all_adds'])->name('admin.adds.filter_all_adds');
            Route::get('/my_adds', [\App\Http\Controllers\Admin\AddsController::class, 'my_adds'])->name('admin.adds.my_adds');
            Route::post('/my_adds', [\App\Http\Controllers\Admin\AddsController::class, 'filter_my_adds'])->name('admin.adds.filter_my_adds');
            Route::get('/waiting_adds', [\App\Http\Controllers\Admin\AddsController::class, 'waiting_adds'])->name('admin.adds.waiting_adds');
            Route::get('/show_archive_adds', [\App\Http\Controllers\Admin\AddsController::class, 'show_archive_adds'])->name('admin.adds.show_archive_adds');
            Route::get('/show_trash_adds', [\App\Http\Controllers\Admin\AddsController::class, 'show_trash_adds'])->name('admin.adds.show_trash_adds');
            Route::get('/create', [\App\Http\Controllers\Admin\AddsController::class, 'create'])->name('admin.adds.create');
            Route::post('/create', [\App\Http\Controllers\Admin\AddsController::class, 'store'])->name('admin.adds.store');
            Route::get('/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'edit'])->name('admin.add.edit');
            Route::post('/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'update'])->name('admin.add.update');
            Route::get('/delete/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'delete'])->name('admin.add.delete');
            Route::get('/archive/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'archive_adds'])->name('admin.add.archive');
            Route::get('/trash/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'trash_adds'])->name('admin.add.trash');
            Route::get('/recursion/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'recursion_adds'])->name('admin.add.recursion');
            Route::get('/touch/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'touch'])->name('admin.add.touch');
            Route::get('/reject/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'reject_adds'])->name('admin.add.reject_adds');
            Route::get('/confirm/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'confirm_adds'])->name('admin.add.confirm_adds');
            Route::get('/reset_confirm/{post_id}', [\App\Http\Controllers\Admin\AddsController::class, 'reset_confirm_adds'])->name('admin.add.reset_confirm_adds');
        });
        Route::get('/dashboard',[\App\Http\Controllers\Admin\AddsController::class,'show_dashboard'])->name('admin.dashboard');
        Route::get('/get_statistics',[\App\Http\Controllers\Admin\AddsController::class,'get_statistics'])->name('get_statistics');
        Route::get('/get_my_statistics',[\App\Http\Controllers\Admin\AddsController::class,'get_my_statistics'])->name('get_my_statistics');
        Route::get('/get_new_adds_statistics',[\App\Http\Controllers\Admin\AddsController::class,'get_new_adds_statistics'])->name('get_new_adds_statistics');
    });

    //    CRM route
    Route::group(['middleware'=>'permission:adds_management|local_adds_management','prefix'=>'crm'],function (){
        Route::get('/add_crm_customer',[\App\Http\Controllers\Admin\CRMcontroller::class,'add_customer'])->name('crm.add_customer');
        Route::post('/check_crm_customer',[\App\Http\Controllers\Admin\CRMcontroller::class,'check_customer'])->name('crm.check_customer');
        Route::get('/crm_request/{user_id}',[\App\Http\Controllers\Admin\CRMcontroller::class,'crm_request'])->name('crm.crm_request');
        Route::post('/crm_request/{user_id}',[\App\Http\Controllers\Admin\CRMcontroller::class,'crm_request_create'])->name('crm.crm_request_create');
        Route::get('/add_new_customer/phone/{phone}',[\App\Http\Controllers\Admin\CRMcontroller::class,'add_new_customer'])->name('crm.add_new_customer');
        Route::post('/add_new_customer/phone/{phone}',[\App\Http\Controllers\Admin\CRMcontroller::class,'save_new_customer'])->name('crm.save_new_customer');
        Route::get('/all_customers',[\App\Http\Controllers\Admin\CRMcontroller::class,'show_all_customers'])->name('crm.show_all_customers');
        Route::get('/all_region_customers',[\App\Http\Controllers\Admin\CRMcontroller::class,'show_all_region_customers'])->name('crm.show_all_region_customers');
        Route::get('/my_customers',[\App\Http\Controllers\Admin\CRMcontroller::class,'show_my_customers'])->name('crm.show_my_customers');
        Route::get('/crm_request_edit/{crm_id}', [\App\Http\Controllers\Admin\CRMcontroller::class, 'crm_request_edit'])->name('admin.crm_request_edit');
        Route::post('/crm_request_edit/{crm_id}', [\App\Http\Controllers\Admin\CRMcontroller::class, 'crm_request_update'])->name('admin.crm_request_update');
        Route::get('/crm_suggested_adds/{crm_id}', [\App\Http\Controllers\Admin\CRMcontroller::class, 'showSuggestedAdds'])->name('admin.showSuggestedAdds');
        Route::get('/crm_request_view/{crm_id}',[\App\Http\Controllers\Admin\CRMcontroller::class,'crm_request_view'])->name('crm_request_view');
    });


    Route::get('/profile', [\App\Http\Controllers\Admin\AuthController::class, 'showProfile'])->name('profile');
    Route::post('/profile/{user_id}', [\App\Http\Controllers\Admin\AuthController::class, 'updateProfile'])->name('update.profile');

    //    files route
    Route::group(['middleware'=>'role:super-admin'],function (){
        Route::get('/files', [\App\Http\Controllers\Admin\FilesController::class, 'index'])->name('admin.files.list');
        Route::get('/files/upload', [\App\Http\Controllers\Admin\FilesController::class, 'add'])->name('admin.files.upload');
        Route::get('/files/delete/{file_id}', [\App\Http\Controllers\Admin\FilesController::class, 'delete'])->name('admin.file.delete');
        Route::get('/ajaxGetFiles',[\App\Http\Controllers\Admin\FilesController::class,'ajaxGetFiles'])->name('admin.ajaxGetFiles');
    });

    Route::group(['middleware'=>'permission:adds_management|local_adds_management'],function (){
        Route::get('/ajaxGetLibFiles',[\App\Http\Controllers\Admin\FilesController::class,'ajaxGetLibFiles'])->name('admin.ajaxGetLibFiles');
    });

    //    comments route
    Route::group(['middleware' => 'role:super-admin'],function () {
        Route::get('/comments', [\App\Http\Controllers\Admin\CommentsController::class, 'index'])->name('admin.comments.list');
        Route::get('/comments/delete/{comment_id}', [\App\Http\Controllers\Admin\CommentsController::class, 'delete'])->name('admin.comment.delete');
    });

    //  posts route
    Route::group(['prefix' => 'posts','middleware' => 'role:super-admin'],function (){
        Route::get('/', [\App\Http\Controllers\Admin\PostsController::class, 'index'])->name('admin.posts.list');
        Route::get('/create', [\App\Http\Controllers\Admin\PostsController::class, 'create'])->name('admin.posts.create');
        Route::post('/create', [\App\Http\Controllers\Admin\PostsController::class, 'store'])->name('admin.posts.store');
        Route::get('/{post_id}', [\App\Http\Controllers\Admin\PostsController::class, 'edit'])->name('admin.post.edit');
        Route::post('/{post_id}', [\App\Http\Controllers\Admin\PostsController::class, 'update'])->name('admin.post.update');
        Route::get('/delete/{post_id}', [\App\Http\Controllers\Admin\PostsController::class, 'delete'])->name('admin.post.delete');
    });

    //  pages route
    Route::group(['prefix' => 'pages','middleware' => 'role:super-admin'],function (){
        Route::get('/', [\App\Http\Controllers\Admin\PagesController::class, 'index'])->name('admin.pages.list');
        Route::get('/create', [\App\Http\Controllers\Admin\PagesController::class, 'create'])->name('admin.pages.create');
        Route::post('/create', [\App\Http\Controllers\Admin\PagesController::class, 'store'])->name('admin.pages.store');
        Route::get('/{post_id}', [\App\Http\Controllers\Admin\PagesController::class, 'edit'])->name('admin.page.edit');
        Route::post('/{post_id}', [\App\Http\Controllers\Admin\PagesController::class, 'update'])->name('admin.page.update');
        Route::get('/delete/{post_id}', [\App\Http\Controllers\Admin\PagesController::class, 'delete'])->name('admin.page.delete');
    });


    //    categories route
    Route::group(['prefix' => 'categories','middleware' => 'role:super-admin'],function () {
        Route::get('/', [\App\Http\Controllers\Admin\CategoriesController::class, 'index'])->name('admin.categories.list');
        Route::post('/', [\App\Http\Controllers\Admin\CategoriesController::class, 'store'])->name('admin.categories.create');
        Route::get('/{term_id}', [\App\Http\Controllers\Admin\CategoriesController::class, 'edit'])->name('admin.category.edit');
        Route::post('/{term_id}', [\App\Http\Controllers\Admin\CategoriesController::class, 'update'])->name('admin.category.update');
        Route::get('/delete/{term_id}', [\App\Http\Controllers\Admin\CategoriesController::class, 'delete'])->name('admin.category.delete');
    });

    //    tags route
    Route::group(['prefix' => 'tags','middleware' => 'role:super-admin'],function () {
        Route::get('/', [\App\Http\Controllers\Admin\TagsController::class, 'index'])->name('admin.tags.list');
        Route::post('/', [\App\Http\Controllers\Admin\TagsController::class, 'store'])->name('admin.tags.create');
        Route::get('/{term_id}', [\App\Http\Controllers\Admin\TagsController::class, 'edit'])->name('admin.tag.edit');
        Route::post('/{term_id}', [\App\Http\Controllers\Admin\TagsController::class, 'update'])->name('admin.tag.update');
        Route::get('/delete/{term_id}', [\App\Http\Controllers\Admin\TagsController::class, 'delete'])->name('admin.tag.delete');
    });
    //    ajax requests
    Route::post('/ajaxSearchCat', [\App\Http\Controllers\Admin\AjaxController::class, 'findCat'])->name('ajax.search.cat');
    Route::post('/ajaxSearchProductCat', [\App\Http\Controllers\Admin\AjaxController::class, 'findProductCat'])->name('ajax.search.productCat');
    Route::post('/ajaxCheckTagEnd', [\App\Http\Controllers\Admin\AjaxController::class, 'checkTagEnd'])->name('ajax.check.tag.end');
    Route::post('/ajaxAddPostsToMenu', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxAddPostsToMenu'])->name('ajax.addPostsToMenu');
    Route::post('/ajaxAddTermsToMenu', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxAddTermsToMenu'])->name('ajax.addTermsToMenu');
    Route::post('/ajaxUpload', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxUpload'])->name('ajax.upload');
    Route::post('/getImagesList', [\App\Http\Controllers\Admin\AjaxController::class, 'getImagesList'])->name('ajax.getImagesList');
    Route::post('/ajaxUploadImage', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxUploadImage'])->name('ajax.upload.image');
    Route::post('/ajaxAddListItemOption', [\App\Http\Controllers\Admin\AjaxController::class, 'addItemList'])->name('ajax.add.listItemOption');
    Route::post('/ajaxAddListItemOptionToPostMeta', [\App\Http\Controllers\Admin\AjaxController::class, 'addItemListToPostMeta'])->name('ajax.add.listItemOptionToPostMeta');
    Route::get('/ajaxGetCommentById', [\App\Http\Controllers\Admin\AjaxController::class, 'getCommentById'])->name('admin.comment.get');
    Route::get('/ajaxEditComment', [\App\Http\Controllers\Admin\AjaxController::class, 'editComment'])->name('admin.comment.edit');
    Route::get('/ajaxReplyComment/', [\App\Http\Controllers\Admin\AjaxController::class, 'reply'])->name('admin.comment.reply');
    Route::get('/ajaxAddUserJob', [\App\Http\Controllers\Admin\AjaxController::class, 'add_user_job'])->name('admin.add_user_job');
    Route::get('/getOstans', [\App\Http\Controllers\Admin\AjaxController::class, 'getOstans'])->name('admin.ajax_getOstans');
    Route::get('/getShahrestans', [\App\Http\Controllers\Admin\AjaxController::class, 'getShahrestans'])->name('admin.ajax_get_shahrestans');
    Route::get('/getManategh', [\App\Http\Controllers\Admin\AjaxController::class, 'getManategh'])->name('admin.ajax_get_manategh');
    Route::get('/getBakhshs', [\App\Http\Controllers\Admin\AjaxController::class, 'getBakhshs'])->name('admin.ajax_get_bakhshs');
    Route::post('/getRelatedTerms', [\App\Http\Controllers\Admin\AjaxController::class, 'getRelatedTerms'])->name('admin.getRelatedTerms');
    Route::post('/getRelatedCrmTerms', [\App\Http\Controllers\Admin\AjaxController::class, 'getRelatedCrmTerms'])->name('admin.getRelatedCrmTerms');
    Route::post('/filterPanelAdds', [\App\Http\Controllers\Admin\AjaxController::class, 'filterPanelAdds'])->name('admin.filterPanelAdds');
    Route::post('/ajaxArchiveAdds', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxArchiveAdds'])->name('admin.ajaxArchiveAdds');
    Route::post('/ajaxTrashAdds', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxTrashAdds'])->name('admin.ajaxTrashAdds');
    Route::post('/ajaxRecursionAdds', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxRecursionAdds'])->name('admin.ajaxRecursionAdds');
    Route::post('/ajaxDeleteAdds', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxDeleteAdds'])->name('admin.ajaxDeleteAdds');
    Route::post('/ajaxDeleteCrmCustomer', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxDeleteCrmCustomer'])->name('admin.ajaxDeleteCrmCustomer');

    Route::post('/ajaxRejectAdds', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxRejectAdds'])->name('admin.ajaxRejectAdds');
    Route::post('/ajaxConfirmAdds', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxConfirmAdds'])->name('admin.ajaxConfirmAdds');
    Route::post('/ajaxResetConfirmAdds', [\App\Http\Controllers\Admin\AjaxController::class, 'ajaxResetConfirmAdds'])->name('admin.ajaxResetConfirmAdds');

    //    menus route
    Route::group(['middleware' => 'role:super-admin'],function () {
        Route::get('/menus', [\App\Http\Controllers\Admin\MenusController::class, 'index'])->name('admin.menus.index');
        Route::get('/ajaxEditMenu/{menu_id}', [\App\Http\Controllers\Admin\AjaxController::class, 'editMenu'])->name('admin.menus.edit');
        Route::post('/ajaxAddMenu', [\App\Http\Controllers\Admin\AjaxController::class, 'storeMenu'])->name('admin.menus.storeMenu');
        Route::post('/ajaxUpdateMenu', [\App\Http\Controllers\Admin\AjaxController::class, 'updateMenu'])->name('admin.menus.updateMenu');
        Route::post('/deleteMenu', [\App\Http\Controllers\Admin\AjaxController::class, 'deleteMenu'])->name('admin.menus.deleteMenu');
    });

    //    theme settings
    Route::group(['middleware' => 'role:super-admin'],function () {
        Route::get('/theme-settings', [\App\Http\Controllers\Admin\ThemeSettingsController::class, 'index'])->name('admin.theme.settings');
        Route::post('/theme-settings', [\App\Http\Controllers\Admin\ThemeSettingsController::class, 'store'])->name('admin.theme.settings.store');
    });

    //ajax reload datas
    Route::post('/change-page',[\App\Http\Controllers\Admin\AddsController::class,'reload_table_datas'])->name('admin.reload_table_datas');
    //ajax reload users list
    Route::post('/change-page-users',[\App\Http\Controllers\Admin\UsersController::class,'reload_table_users'])->name('admin.reload_table_users');
    //ajax reload customers list
    Route::post('/change-page-customers',[\App\Http\Controllers\Admin\CRMcontroller::class,'reload_customers_table'])->name('admin.reload_customers_table');

    Route::post('/adds-details',[\App\Http\Controllers\Admin\AddsController::class,'get_adds_details'])->name('admin.get_adds_details');
});

Route::get('/land_types_list/',[\App\Http\Controllers\Admin\TransactionController::class,'land_types_list'])->name('land_types_list');

Route::view('{path?}', 'index')->where('path', '.*')->name('react');
