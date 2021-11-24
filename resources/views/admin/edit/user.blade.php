@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>{{isset($edit_user)?'ویرایش کاربر':'افزودن کاربر'}}</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{isset($edit_user)?'ویرایش کاربر':'افزودن کاربر'}}</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">{{isset($edit_user)?'ویرایش کاربر':'افزودن کاربر'}}</h6>
                        <form class="needs-validation" action="" method="post" enctype="multipart/form-data">
                            {{csrf_field()}}
                            @include('layouts.messages')
                            @include('layouts.validate_errors')
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom01">نام</label>
                                    <input type="text" name="name" class="form-control" id="name"
                                           placeholder="نام" value="{{isset($edit_user)?$edit_user->name:''}}"
                                           required="">
                                    <div class="valid-feedback">
                                        صحیح است!
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="email">ایمیل</label>
                                    <input type="email" name="email" class="form-control" id="email"
                                           placeholder="ایمیل" value="{{isset($edit_user)?$edit_user->email:''}}">
                                    <div class="valid-feedback">
                                        صحیح است!
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="phone">شماره تماس</label>
                                    <input type="text" name="phone" class="form-control" id="phone"
                                           placeholder="شماره تماس" value="{{(isset($edit_usermetas) && isset($edit_usermetas['phone']))?$edit_usermetas['phone']:''}}">
                                    <div class="valid-feedback">
                                        صحیح است!
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="password">رمز عبور</label>
                                    <input type="password" name="password" class="form-control" id="password" placeholder="رمز عبور" autocomplete="new-password">
                                    <div class="valid-feedback">
                                        صحیح است!
                                    </div>
                                </div>
                                @if(isset($roles) && !empty($roles))
                                    <div class="col-md-6 mb-3">
                                        <label for="password">نقش کاربری</label>
                                        <select name="role[]" class="select2" id="role" multiple>
                                            @foreach($roles as $role)
                                                <option {{(isset($edit_user) && $edit_user->roles->contains($role))?'selected':''}} value="{{$role->name}}">{{$role->title}}</option>
                                            @endforeach
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                @endif
                                <div class="col-md-12 mb-3">
                                    <div class="card">
                                        <div class="card-header">
                                            تصویر خود را وارد کنید
                                            <a type="button" data-toggle="modal" data-target="#tabtarh-lib">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                            </a>
                                            <input type="hidden" class="tbt-hide single-file" name="user_photo" value="{{(isset($user_profile) && $user_profile)?$user_profile->file_id:''}}">
                                        </div>
                                        <div class="card-body d-flex flex-wrap">
                                            @if (isset($user_profile) && ($user_profile))
                                                <div class="download-item col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                                    <div class="card app-file-list">
                                                        <div class="app-file-icon">
                                                            {!! $user_profile->preview !!}
                                                        </div>
                                                    </div>
                                                    <i class="fas fa-times"></i>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                @if(isset($edit_user) && isset($permissions))
                                    <div class="row w-100 mb-3">
                                        <label class="col-12 mb-3">دسترسی های کاربر</label>
                                    @foreach($permissions as $permission)
                                        <div class="col-6 col-md-3">
                                            <span>{{$permission->title}}</span>
                                            <sapn><span class="{{($edit_user->can($permission->name))?'fa fa-check-circle text-success':'fa fa-times-circle text-danger'}}"></span></sapn>
                                        </div>
                                    @endforeach
                                    </div>
                                @endif

                                <div class="col-12 mb-3">
                                    <button class="btn btn-primary" name="updatePostData" id="submit-all" type="submit">
                                        بروزرسانی اطلاعات
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
