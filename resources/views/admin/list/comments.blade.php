@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>دیدگاه ها</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">دیدگاه ها</li>
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
                                <th>نویسنده</th>
                                <th>دیدگاه</th>
                                <th>در پاسخ به</th>
                                <th>وضعیت</th>
                                <th>تاریخ ارسال</th>
                                <th>گزینه ها</th>
                            </tr>
                            </thead>
                            <tbody>
                            @if($comments && count($comments)>0)
                                @foreach($comments as $comment)
                                    <tr>
                                        <td>{{$comment->user->name}}</td>
                                        <td>{!! $comment->comment_text !!}</td>
                                        <td>{{$comment->post->name}}</td>
                                        <td>{!! $comment->statusShow !!}</td>
                                        <td>{{jdate($comment->created_at)}}</td>
                                        <td class="text-center">
                                            <div class="dropdown">
                                                <a href="#" class="btn btn-sm"
                                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="" data-comment="{{$comment->comment_id}}" class="dropdown-item edit_comment" type="button">ویرایش</a>
                                                    <a href="" data-comment="{{$comment->comment_id}}" class="dropdown-item reply_to_comment" type="button">پاسخ دادن</a>
                                                    <a href="{{route($expressions['posts_delete_route'],$comment->comment_id)}}" class="dropdown-item delete-item" type="button">حذف</a>
                                                </div>
                                            </div>
{{--                                            <div class="btn-group">--}}
{{--                                                <a href="{{route($expressions['posts_edit_route'],$post->postId)}}"--}}
{{--                                                   class="btn btn-outline-secondary" type="button"><i--}}
{{--                                                        class="fa fa-edit"></i></a>--}}
{{--                                                <a href="{{route($expressions['posts_delete_route'],$post->postId)}}"--}}
{{--                                                   class="btn btn-outline-danger delete-item" type="button"><i--}}
{{--                                                        class="fa fa-trash"></i></a>--}}
{{--                                            </div>--}}
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>نویسنده</th>
                                <th>دیدگاه</th>
                                <th>در پاسخ به</th>
                                <th>وضعیت</th>
                                <th>تاریخ ارسال</th>
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
