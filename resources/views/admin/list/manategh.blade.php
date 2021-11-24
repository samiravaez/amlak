@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>{{isset($mantaghe_select)?'ویرایش منطقه':'لیست مناطق'}}</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active"
                        aria-current="page">{{isset($mantaghe_select)?'ویرایش منطقه':'لیست مناطق'}}</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->

        <div class="row">
            <div class="col-md-12">
                @include('layouts.messages')
                @if(!isset($mantaghe_select))
                    <div class="col-md-8 float-right">
                        <div class="card">
                            <div class="card-body">
                                <table id="example1" class="table table-striped table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th>نام</th>
                                        <th>استان</th>
                                        <th>شهر</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if (isset($manategh) && !empty($manategh))
                                        @foreach($manategh as $mantaghe)
                                            <tr>
                                                <td>{{$mantaghe->Title}}</td>
                                                <td>{{$mantaghe->shahrestan->Title}}</td>
                                                <td>{{$mantaghe->shahrestan->ostan->Title}}</td>
                                                <td class="text-center" style="justify-content: center;">
                                                    <div class="btn-group">
                                                        <a href="{{route('admin.manategh.edit',$mantaghe->ID)}}"
                                                           class="btn btn-outline-secondary" type="button"><i
                                                                class="fa fa-edit"></i></a>
                                                        <a href="{{route('admin.manategh.delete',$mantaghe->ID)}}"
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
                                        <th>استان</th>
                                        <th>شهر</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                @endif

                <div class="col-md-4 float-left">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">{{isset($mantaghe_select)?'ویرایش منطقه':'افزودن منطقه'}}</h6>
                            <form class="needs-validation" method="post">
                                {{csrf_field()}}
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom01">انتخاب استان</label>
                                        <select class="form-control select2 ostan-change" id="validationCustom01" name="ostan" data-num=""
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            @if(isset($ostans) && !empty($ostans))
                                                @foreach($ostans as $ostan)
                                                    <option
                                                        value="{{$ostan->ID}}" {{(isset($mantaghe_select) && $ostan->ID==$mantaghe_select->shahrestan->ostan->ID)?'selected':''}}>{{$ostan->Title}}</option>
                                                @endforeach
                                            @endif
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02">انتخاب شهر</label>
                                        <select class="form-control select2 shahrestan-select" id="validationCustom02" name="shahrestan" data-num=""
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            @if(isset($mantaghe_select))
                                                @foreach($mantaghe_select->shahrestan->ostan->shahrestans()->get() as $shahrestan)
                                                    <option value="{{$shahrestan->ID}}" {{($shahrestan->ID==$mantaghe_select->shahrestan->ID)?'selected':''}}>{{$shahrestan->Title}}</option>
                                                @endforeach
                                            @endif
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom03">نام</label>
                                        <input type="text" class="form-control" id="validationCustom03"
                                               name="mantaghe"
                                               placeholder="منطقه"
                                               value="{{isset($mantaghe_select)?$mantaghe_select->Title:''}}"
                                               required>
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

                @if(isset($mantaghe_select))
                    <div class="col-md-8 float-left">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">بخش های منطقه</h6>
                                <div class="card-body">
                                    @if(count($mantaghe_select->bakhshs)>0)
                                        <ul class="list-group scroll-list">
                                            @foreach($mantaghe_select->bakhshs as $bakhsh)
                                                <li class="list-group-item">{{$bakhsh->Title}}</li>
                                            @endforeach
                                        </ul>
                                    @else
                                        <div class="alert alert-warning">بخشی برای این منطقه ثبت نشده است</div>
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
