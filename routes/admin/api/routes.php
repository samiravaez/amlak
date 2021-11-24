<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/panel', [\App\Http\Controllers\Admin\API\AuthController::class, 'showLoginWithUserNameAndPass']);
Route::post('/panel', [\App\Http\Controllers\Admin\API\AuthController::class, 'doLoginWithUserNameAndPass']);//*

Route::get('/login-phone', [\App\Http\Controllers\Admin\API\AuthController::class, 'sendLoginRequest'])->name('login.phone');
Route::post('/login-phone', [\App\Http\Controllers\Admin\API\AuthController::class, 'checkLoginPhone'])->name('checkLoginPhone');
//Route::post('/login-phone', [\App\Http\Controllers\Admin\API\AuthController::class, 'loginWithPhone'])->name('loginWithPhoneShow');
Route::get('/login-phone/{phone}', [\App\Http\Controllers\Admin\API\AuthController::class, 'checkLoginPhoneShow'])->name('checkLoginPhoneShow');
Route::get('/sendLoginCodeBySms', [\App\Http\Controllers\Admin\API\AjaxController::class, 'sendLoginCodeBySms'])->name('sendLoginCodeBySms');

Route::get('/register', [\App\Http\Controllers\Admin\API\AuthController::class, 'showRegisterWithUserNameAndPass']);
Route::post('/register', [\App\Http\Controllers\Admin\API\AuthController::class, 'doRegisterWithUserNameAndPass'])->name('register');


Route::get('/logout', [\App\Http\Controllers\Admin\API\AuthController::class, 'logout'])->name('logout');
Route::get('/get_options', [\App\Http\Controllers\Admin\API\PostsController::class, 'getOptions']);
Route::get('/special_adds/{count?}', [\App\Http\Controllers\Admin\API\PostsController::class, 'getSpeciallAdds']);
Route::get('/get_adds_types', [\App\Http\Controllers\Admin\API\PostsController::class, 'getAddsTypes']);
//Route::get('/{post_slug}', [\App\Http\Controllers\Frontend\singleController::class, 'show']);

Route::group(['middleware' => []], function () {

    // users
    Route::group(['prefix' => 'users', 'middleware' => 'permission:users_management'], function () {
        require_once('users.php');
    });

    // roles
    Route::group(['prefix' => 'roles', 'middleware' => 'role:super-admin'], function () {
        require_once('roles.php');
    });

    // permissions
    Route::group(['prefix' => 'permissions', 'middleware' => 'role:super-admin'], function () {
        require_once('permissions.php');
    });

    // regions
    Route::group(['prefix' => 'regions'], function () {
        require_once('regions.php');
    });

    Route::group(['prefix' => 'attendants'], function () {
        require_once('attendants.php');
    });

    Route::group(['prefix' => 'customer_states'], function () {
        require_once('customer_states.php');
    });

    Route::group(['prefix' => 'customer_types'], function () {
        require_once('customer_types.php');
    });


    Route::group(['prefix' => 'eye_colors'], function () {
        require_once('eye_colors.php');
    });

    Route::group(['prefix' => 'education_levels', 'middleware' => 'permission:regions_management'], function () {
        require_once('education_levels.php');
    });
    Route::group(['prefix' => 'addresses'], function () {
        require_once('addresses.php');
    });

    //adds more settings route
    Route::group(['middleware' => 'permission:adds_management'], function () {

        // transactions
        Route::group(['prefix' => 'transactions'], function () {
            require_once('transactions.php');
        });

        // land_types
        Route::group(['prefix' => 'land_types'], function () {
            require_once('land_types.php');
        });

        // adds_features
        Route::group(['prefix' => 'adds_features'], function () {
            require_once('adds_features.php');
        });

        // facilities
        Route::group(['prefix' => 'facilities'], function () {
            require_once('facilities.php');
        });
    });

    // adds
    Route::group(['middleware' => 'permission:adds_management|local_adds_management'], function () {
        Route::group(['prefix' => 'adds'], function () {
            require_once('adds.php');
        });
        Route::get('/dashboard', [\App\Http\Controllers\Admin\API\AddsController::class, 'show_dashboard'])->name('admin.dashboard');
        Route::get('/get_statistics', [\App\Http\Controllers\Admin\API\AddsController::class, 'get_statistics'])->name('get_statistics');
        Route::get('/get_my_statistics', [\App\Http\Controllers\Admin\API\AddsController::class, 'get_my_statistics'])->name('get_my_statistics');
        Route::get('/get_new_adds_statistics', [\App\Http\Controllers\Admin\API\AddsController::class, 'get_new_adds_statistics'])->name('get_new_adds_statistics');
    });


    // CRM
    Route::group(['prefix' => 'crm'], function () {
        require_once('crm.php');
    });

    // careers
    Route::group(['prefix' => 'careers'], function () {
        require_once('careers.php');
    });

    // visits
    Route::group(['prefix' => 'visits'], function () {
        require_once('visits.php');
    });

    Route::group(['prefix' => 'industries'], function () {
        require_once('industries.php');
    });

    Route::group(['prefix' => 'timetables'], function () {
        require_once('timetables.php');
    });

    // remind_methods
    Route::group(['prefix' => 'remind_methods'], function () {
        require_once('remind_methods.php');
    });

    Route::group(['prefix' => 'offers'], function () {
        require_once('offers.php');
    });

    Route::group(['prefix' => 'messages'], function () {
        require_once('text_messages.php');
    });

    Route::group(['prefix' => 'tasks'], function () {
        require_once('tasks.php');
    });

    Route::group(['prefix' => 'purchase_stages'], function () {
        require_once('purchase_stages.php');
    });

    Route::group(['prefix' => 'meetings'], function () {
        require_once('meetings.php');
    });

    Route::group(['prefix' => 'cheques'], function () {
        require_once('cheques.php');
    });

    Route::group(['prefix' => 'emails'], function () {
        require_once('emails.php');
    });

    Route::group(['prefix' => 'activities'], function () {
        require_once('activities.php');
    });

    Route::group(['prefix' => 'calls'], function () {
        require_once('calls.php');
    });

    Route::group(['prefix' => 'deals'], function () {
        require_once('deals.php');
    });

    Route::get('/profile', [\App\Http\Controllers\Admin\API\AuthController::class, 'showProfile'])->name('profile');
    Route::post('/profile/{user_id}', [\App\Http\Controllers\Admin\API\AuthController::class, 'updateProfile'])->name('update.profile');

    // files
    Route::group(['middleware' => 'role:super-admin'], function () {
        Route::get('/files', [\App\Http\Controllers\Admin\API\FilesController::class, 'index'])->name('admin.files.list');
        Route::get('/files/upload', [\App\Http\Controllers\Admin\API\FilesController::class, 'add'])->name('admin.files.upload');
        Route::get('/files/delete/{file_id}', [\App\Http\Controllers\Admin\API\FilesController::class, 'delete'])->name('admin.file.delete');
        Route::get('/ajaxGetFiles', [\App\Http\Controllers\Admin\API\FilesController::class, 'ajaxGetFiles'])->name('admin.ajaxGetFiles');
    });

    Route::group(['middleware' => 'permission:adds_management|local_adds_management'], function () {
        Route::get('/ajaxGetLibFiles', [\App\Http\Controllers\Admin\API\FilesController::class, 'ajaxGetLibFiles'])->name('admin.ajaxGetLibFiles');
    });

    // comments
    Route::group(['middleware' => 'role:super-admin'], function () {
        Route::get('/comments', [\App\Http\Controllers\Admin\API\CommentsController::class, 'index'])->name('admin.comments.list');
        Route::get('/comments/delete/{comment_id}', [\App\Http\Controllers\Admin\API\CommentsController::class, 'delete'])->name('admin.comment.delete');
    });

    // posts
    Route::group(['prefix' => 'posts', 'middleware' => 'role:super-admin'], function () {
        require_once('posts.php');
    });

    // pages
    Route::group(['prefix' => 'pages', 'middleware' => 'role:super-admin'], function () {
        require_once('pages.php');
    });

    // categories
    Route::group(['prefix' => 'categories', 'middleware' => 'role:super-admin'], function () {
        require_once('categories.php');
    });

    // tags
    Route::group(['prefix' => 'tags', 'middleware' => 'role:super-admin'], function () {
        require_once('tags.php');
    });

    // ajax requests
    Route::post('/ajaxSearchCat', [\App\Http\Controllers\Admin\API\AjaxController::class, 'findCat'])->name('ajax.search.cat');
    Route::post('/ajaxSearchProductCat', [\App\Http\Controllers\Admin\API\AjaxController::class, 'findProductCat'])->name('ajax.search.productCat');
    Route::post('/ajaxCheckTagEnd', [\App\Http\Controllers\Admin\API\AjaxController::class, 'checkTagEnd'])->name('ajax.check.tag.end');
    Route::post('/ajaxAddPostsToMenu', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxAddPostsToMenu'])->name('ajax.addPostsToMenu');
    Route::post('/ajaxAddTermsToMenu', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxAddTermsToMenu'])->name('ajax.addTermsToMenu');
    Route::post('/ajaxUpload', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxUpload'])->name('ajax.upload');
    Route::post('/getImagesList', [\App\Http\Controllers\Admin\API\AjaxController::class, 'getImagesList'])->name('ajax.getImagesList');
    Route::post('/ajaxUploadImage', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxUploadImage'])->name('ajax.upload.image');
    Route::post('/ajaxAddListItemOption', [\App\Http\Controllers\Admin\API\AjaxController::class, 'addItemList'])->name('ajax.add.listItemOption');
    Route::post('/ajaxAddListItemOptionToPostMeta', [\App\Http\Controllers\Admin\API\AjaxController::class, 'addItemListToPostMeta'])->name('ajax.add.listItemOptionToPostMeta');
    Route::get('/ajaxGetCommentById', [\App\Http\Controllers\Admin\API\AjaxController::class, 'getCommentById'])->name('admin.comment.get');
    Route::get('/ajaxEditComment', [\App\Http\Controllers\Admin\API\AjaxController::class, 'editComment'])->name('admin.comment.edit');
    Route::get('/ajaxReplyComment/', [\App\Http\Controllers\Admin\API\AjaxController::class, 'reply'])->name('admin.comment.reply');
    Route::get('/ajaxAddUserJob', [\App\Http\Controllers\Admin\API\AjaxController::class, 'add_user_job'])->name('admin.add_user_job');
    Route::get('/getOstans', [\App\Http\Controllers\Admin\API\AjaxController::class, 'getOstans'])->name('admin.ajax_getOstans');
    Route::get('/getShahrestans', [\App\Http\Controllers\Admin\API\AjaxController::class, 'getShahrestans'])->name('admin.ajax_get_shahrestans');
    Route::get('/getManategh', [\App\Http\Controllers\Admin\API\AjaxController::class, 'getManategh'])->name('admin.ajax_get_manategh');
    Route::get('/getBakhshs', [\App\Http\Controllers\Admin\API\AjaxController::class, 'getBakhshs'])->name('admin.ajax_get_bakhshs');
    Route::post('/getRelatedTerms', [\App\Http\Controllers\Admin\API\AjaxController::class, 'getRelatedTerms'])->name('admin.getRelatedTerms');
    Route::post('/getRelatedCrmTerms', [\App\Http\Controllers\Admin\API\AjaxController::class, 'getRelatedCrmTerms'])->name('admin.getRelatedCrmTerms');
    Route::post('/filterPanelAdds', [\App\Http\Controllers\Admin\API\AjaxController::class, 'filterPanelAdds'])->name('admin.filterPanelAdds');
    Route::post('/ajaxArchiveAdds', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxArchiveAdds'])->name('admin.ajaxArchiveAdds');
    Route::post('/ajaxTrashAdds', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxTrashAdds'])->name('admin.ajaxTrashAdds');
    Route::post('/ajaxRecursionAdds', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxRecursionAdds'])->name('admin.ajaxRecursionAdds');
    Route::post('/ajaxDeleteAdds', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxDeleteAdds'])->name('admin.ajaxDeleteAdds');
    Route::post('/ajaxDeleteCrmCustomer', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxDeleteCrmCustomer'])->name('admin.ajaxDeleteCrmCustomer');

    Route::post('/ajaxRejectAdds', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxRejectAdds'])->name('admin.ajaxRejectAdds');
    Route::post('/ajaxConfirmAdds', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxConfirmAdds'])->name('admin.ajaxConfirmAdds');
    Route::post('/ajaxResetConfirmAdds', [\App\Http\Controllers\Admin\API\AjaxController::class, 'ajaxResetConfirmAdds'])->name('admin.ajaxResetConfirmAdds');

    // menus
    Route::group(['middleware' => 'role:super-admin'], function () {
        Route::get('/menus', [\App\Http\Controllers\Admin\API\MenusController::class, 'index'])->name('admin.menus.index');
        Route::get('/menus/create', [\App\Http\Controllers\Admin\API\MenusController::class, 'create'])->name('admin.menus.create');
        Route::get('/ajaxEditMenu/{menu_id}', [\App\Http\Controllers\Admin\API\AjaxController::class, 'editMenu'])->name('admin.menus.edit');
        Route::post('/ajaxAddMenu', [\App\Http\Controllers\Admin\API\AjaxController::class, 'storeMenu'])->name('admin.menus.storeMenu');
        Route::post('/ajaxUpdateMenu', [\App\Http\Controllers\Admin\API\AjaxController::class, 'updateMenu'])->name('admin.menus.updateMenu');
        Route::post('/deleteMenu', [\App\Http\Controllers\Admin\API\AjaxController::class, 'deleteMenu'])->name('admin.menus.deleteMenu');
    });

    // themes
    Route::group(['middleware' => 'role:super-admin'], function () {
        Route::get('/theme-settings', [\App\Http\Controllers\Admin\API\ThemeSettingsController::class, 'index'])->name('admin.theme.settings');
        Route::post('/theme-settings', [\App\Http\Controllers\Admin\API\ThemeSettingsController::class, 'store'])->name('admin.theme.settings.store');
    });

    //ajax reload datas
//    Route::post('/change-page', [\App\Http\Controllers\Admin\AddsController::class, 'reload_table_datas'])->name('admin.reload_table_datas');
    //ajax reload users list
//    Route::post('/change-page-users', [\App\Http\Controllers\Admin\UsersController::class, 'reload_table_users'])->name('admin.reload_table_users');
    //ajax reload customers list
//    Route::post('/change-page-customers', [\App\Http\Controllers\Admin\CRMcontroller::class, 'reload_customers_table'])->name('admin.reload_customers_table');

    Route::post('/adds-details', [\App\Http\Controllers\Admin\API\AddsController::class, 'get_adds_details'])->name('admin.get_adds_details');
});

Route::get('/land_types_list/', [\App\Http\Controllers\Admin\API\TransactionController::class, 'land_types_list'])->name('land_types_list');

//Route::view('{path?}', 'index')->where('path', '.*')->name('react');
