@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>{{isset($role)?'ویرایش نقش کاربری':'افزودن نقش کاربری'}}</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{isset($role)?'ویرایش نقش کاربری':'افزودن نقش کاربری'}}</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">{{isset($role)?'ویرایش نقش کاربری':'افزودن نقش کاربری'}}</h6>
                        <form class="needs-validation" action="{{isset($role)?route('admin.roles.update',$role->id):''}}" method="post" enctype="multipart/form-data">
                            {{csrf_field()}}
                            @include('layouts.messages')
                            <div class="form-group">
                                <label for="role-title">نام</label>
                                <input class="form-control" id="role-name" name="role_name" type="text" value="{{isset($role)?$role->name:''}}">
                            </div>
                            <div class="form-group">
                                <label for="role-title">عنوان عمومی</label>
                                <input class="form-control" id="role-title" name="role_title" type="text" value="{{isset($role)?$role->title:''}}">
                            </div>
                            @if (isset($permissions) && !empty($permissions))
                                <div class="form-group">
                                @foreach($permissions as $permission)
                                    <div class="form-check-inline">
                                        <input name="permissions[]" type="checkbox" class="form-check-input" value="{{$permission->name}}"
                                               id="permissions-{{$permission->id}}" {{(isset($role) && $role->permissions->contains($permission))?'checked':''}}>
                                        <label class="form-check-label"
                                               for="permissions-{{$permission->id}}">{{$permission->title}}</label>
                                    </div>
                                @endforeach
                                </div>
                            @endif
                            <div class="form-group">
                                <button class="btn btn-primary" id="submit-all" type="submit">
                                    بروزرسانی اطلاعات
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

