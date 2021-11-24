@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>تنظیمات قالب</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">تنظیمات قالب</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">تنطیمات قالب</h6>
                        <form action="" enctype="multipart/form-data" method="post" id="settings-form">
                            {{csrf_field()}}
                            @include('layouts.messages')
                            {!! $settings !!}
                            <input type="submit" class="btn btn-info" name="theme-settings" value="ذخیره تغییرات">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
