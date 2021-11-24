@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>سطوح دسترسی</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">سطوح دسترسی</li>
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
                                <th>نام</th>
                                <th>عنوان عمومی</th>
                                <th>گزینه ها</th>
                            </tr>
                            </thead>
                            <tbody>
                            @if($permissions && count($permissions)>0)
                                @foreach($permissions as $permission)
                                    <tr>
                                        <td>{{$permission->name}}</td>
                                        <td>{{$permission->title}}</td>
                                        <td class="text-center" style="justify-content: center;">
                                            <div class="btn-group">
                                                <a href="{{route('admin.permissions.edit',$permission->id)}}"
                                                   class="btn btn-outline-secondary" type="button"><i
                                                        class="fa fa-edit"></i></a>
                                                <a href="{{route('admin.permissions.delete',$permission->id)}}"
                                                   class="btn btn-outline-danger delete-item" type="button"><i
                                                        class="fas fa-trash"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>نام</th>
                                <th>عنوان عمومی</th>
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
