@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>آگهی های پیشنهادی</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">آگهی های پیشنهادی</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        @include('layouts.messages')

        <div class="row">
            <div class="col-md-12">
                <div class="card" id="adds-box">
                    <div class="card-body">
                        <table id="example1" class="table table-bordered table-hover" width="100%">
                            <thead>
                            <tr>
                                <th>شناسه</th>
                                <th>عنوان آگهی</th>
                                <th>نویسنده</th>
                                <th>شرایط معامله</th>
                                <th>گزینه ها</th>
                            </tr>
                            </thead>
                            <tbody>
                            @if(isset($adds) && count($adds)>0)
                                @foreach($adds as $add)
                                    <tr>
                                        <td>{{$add->postId}}</td>
                                        <td>{{$add->name}}</td>
                                        <td>{{$add->user->name}}</td>
                                        <td>{!! $add->transactionField !!}</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="#" class="btn btn-sm"
                                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    @if($add->getExpertsAttribute()!==null)
                                                        <a href="experts{{$add->postId}}" class="dropdown-item" type="button" data-toggle="modal" data-target="#experts{{$add->postId}}">مشاهده کارشناسان</a>
                                                    @endif
                                                </div>
                                            </div>
                                            @if($add->getExpertsAttribute()!==null)
                                                <div class="modal fade" id="experts{{$add->postId}}" tabindex="-1" role="dialog" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">{{$add->name}}</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <table class="table">
                                                                    <tr>
                                                                        <th>نام کارشناس</th>
                                                                        <th>شماره تماس</th>
                                                                    </tr>
                                                                    @foreach($add->getExpertsAttribute() as $expert)
                                                                        <tr>
                                                                            <td>{{$expert->name}}</td>
                                                                            <td>{{$expert->phone}}</td>
                                                                        </tr>
                                                                    @endforeach
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            @endif

                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>شناسه</th>
                                <th>عنوان آگهی</th>
                                <th>نویسنده</th>
                                <th>شرایط معامله</th>
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
