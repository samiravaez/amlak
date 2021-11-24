@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>{{isset($ostan_select)?'ویرایش استان':'لیست استان ها'}}</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{isset($ostan_select)?'ویرایش استان':'لیست استان ها'}}</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->

        <div class="row">
            <div class="col-md-12">
                @include('layouts.messages')

                @if(!isset($ostan_select))
                    <div class="col-md-8 float-right">
                        <div class="card">
                            <div class="card-body">
                                <table id="example1" class="table table-striped table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th>نام</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if (isset($ostans) && !empty($ostans))
                                        @foreach($ostans as $ostan)
                                            <tr>
                                                <td>{{$ostan->Title}}</td>
                                                <td class="text-center" style="justify-content: center;">
                                                    <div class="btn-group">
                                                        <a href="{{route('admin.ostan.edit',$ostan->ID)}}"
                                                           class="btn btn-outline-secondary" type="button"><i
                                                                class="fa fa-edit"></i></a>
                                                        <a href="{{route('admin.ostan.delete',$ostan->ID)}}"
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
                                        <th>نام</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                @endif

                <div class="{{'col-md-4'}} float-left">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">{{isset($ostan_select)?'ویرایش استان':'افزودن استان'}}</h6>
                            <form class="needs-validation" method="post">
                                {{csrf_field()}}
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom01">نام</label>
                                        <input type="text" class="form-control" id="validationCustom01" name="ostan"
                                               placeholder="استان"
                                               value="{{isset($ostan_select)?$ostan_select->Title:''}}" required>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary" name="categoriesAddButton"
                                        type="submit">ذخیره
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                @if(isset($ostan_select))
                    <div class="col-md-8 float-left">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">لیست شهرهای استان</h6>
                                <div class="card-body">
                                    @if(count($ostan_select->shahrestans)>0)
                                        <ul class="list-group scroll-list">
                                            @foreach($ostan_select->shahrestans as $shahr)
                                                <li class="list-group-item">{{$shahr->Title}}</li>
                                            @endforeach
                                        </ul>
                                    @else
                                        <div class="alert alert-warning">شهری برای این استان ثبت نشده است</div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection
