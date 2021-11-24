@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>دسترسی های مستقیم کاربر</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">دسترسی های مستقیم کاربر</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">دسترسی های مستقیم کاربر</h6>
                        <form class="needs-validation" action="" method="post">
                            {{csrf_field()}}
                            @include('layouts.messages')
                            @if(isset($permissions))
                                <div class="form-group mb-3">
                                    @foreach($permissions as $permission)
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" name="revokes[]" value="{{$permission->name}}" {{($edit_user->getDirectPermissions()->contains($permission)?'checked':'')}}>
                                                {{$permission->title}}
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            @endif
                            <div class="col-12 mb-3">
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
