@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>{{$expressions['breadcrumb_title']}}</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">نوشته ها</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <form class="needs-validation" action="" method="post" enctype="multipart/form-data">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">{{$expressions['form_title']}}</h6>
                            {{csrf_field()}}
                            @include('layouts.messages')
                            <div class="col-8 mb-3 float-left">
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <label for="validationCustom01">عنوان</label>
                                        <input type="text" name="name" class="form-control" id="name"
                                               placeholder="عنوان نوشته" value="{{old('name',isset($post)?$post->name:'')}}"
                                               required="">
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="slug">نامک</label>
                                        <input type="text" name="slug" class="form-control" id="validationCustom02"
                                               placeholder="نامک" value="{{old('slug',isset($post)?$post->slug:'')}}">
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-12 mb-3 editorLogo">
                                    <textarea id="edit"
                                              name="description">{{old('description',isset($post)?$post->description:'')}}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 float-right px-0">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">وضعیت نوشته</label>
                                    <select class="form-control" id="exampleFormControlSelect1" name="status">
                                        <option value="0" {{(isset($post) && intval($post->status)==0)?'selected':''}}>
                                            پیش نویس
                                        </option>
                                        <option value="1" {{(isset($post) && intval($post->status)==1)?'selected':''}}>
                                            انتشار
                                        </option>
                                    </select>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                            تصویر شاخص
                                            <a type="button" data-toggle="modal"
                                               data-target="#tabtarh-lib">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                            </a>
                                            <input type="hidden" class="tbt-hide single-file" name="mainImage"
                                                   value="{{(isset($post) && $post->image)?$post->image:''}}">
                                    </div>
                                    <div class="card-body d-flex flex-wrap main_image_wrapper">
                                        @if(isset($post_image) && ($post_image))
                                            <div class="download-item">
                                                <div class="card app-file-list">
                                                    <div class="app-file-icon">
                                                        {!! $post_image !!}
                                                    </div>
                                                </div>
                                                <i class="fa fa-remove"></i></div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" name="updatePostData" id="submit-all" type="submit">
                                بروزرسانی اطلاعات
                            </button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        {!! $meta_boxes !!}
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
@endsection
