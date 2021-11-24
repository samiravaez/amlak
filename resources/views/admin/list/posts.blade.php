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
        @include('layouts.messages')

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <table id="example1" class="table table-striped table-bordered table-hover" width="100%">
                            <thead>
                            <tr>
                                <th>عنوان</th>
                                <th>نامک</th>
                                <th>نویسنده</th>
                                <th>وضعیت</th>
                                <th>تاریخ انتشار</th>
                                <th>آخرین به روز رسانی</th>
                                <th>گزینه ها</th>
                            </tr>
                            </thead>
                            <tbody>
                            @if($posts && count($posts)>0)
                                @foreach($posts as $post)
                                    <tr>
                                        <td>{{$post->name}}</td>
                                        <td>{{$post->slug}}</td>
                                        <td>{{$post->user->name}}</td>
                                        <td>{!! $post->statusShow !!}</td>
                                        <td>{{jdate($post->created_at)}}</td>
                                        <td>{{jdate($post->updated_at)}}</td>
                                        <td class="text-center" style="justify-content: center;">
                                            <div class="btn-group">
                                                <a href="{{route($expressions['posts_edit_route'],$post->postId)}}"
                                                   class="btn btn-outline-secondary" type="button"><i
                                                        class="fa fa-edit"></i></a>
                                                <a href="{{route($expressions['posts_delete_route'],$post->postId)}}"
                                                   class="btn btn-outline-danger delete-item" type="button"><i
                                                        class="fa fa-trash"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>عنوان</th>
                                <th>نامک</th>
                                <th>نویسنده</th>
                                <th>محتوا</th>
                                <th>تاریخ انتشار</th>
                                <th>آخرین به روز رسانی</th>
                                <th>گزینه ها</th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
