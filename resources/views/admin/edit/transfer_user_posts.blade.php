@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>انتقال نوشته های کاربر</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item">انتقال نوشته های کاربر</li>
                    <li class="breadcrumb-item active" aria-current="page">{{$edit_user->name}}</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <form class="needs-validation" action="" method="post" enctype="multipart/form-data">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">انتقال نوشته های کاربر</h6>
                            {{csrf_field()}}
                            @include('layouts.messages')
                            <div class="col-8 mb-3 float-left">
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <label for="validationCustom01">به کدام کارشناس منتقل شود؟</label>
                                        @if(isset($users) && count($users)>0)
                                        <select name="manager" class="select2">
                                            @foreach($users as $loop_user)
                                                <option value="{{$loop_user->id}}">{{$loop_user->name}}</option>
                                            @endforeach
                                        </select>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" name="updatePostData" id="submit-all" type="submit">
                                انتقال آگهی ها
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
