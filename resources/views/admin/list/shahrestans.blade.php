@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>{{isset($shahrestan_select)?'ویرایش شهر':'لیست شهر ها'}}</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active"
                        aria-current="page">{{isset($shahrestan_select)?'ویرایش شهر':'لیست شهر ها'}}</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->

        <div class="row">
            <div class="col-md-12">
                @include('layouts.messages')
                @if(!isset($shahrestan_select))
                    <div class="col-md-8 float-right">
                        <div class="card">
                            <div class="card-body">
                                <table id="example1" class="table table-striped table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th>نام</th>
                                        <th>استان</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if (isset($shahrestans) && !empty($shahrestans))
                                        @foreach($shahrestans as $shahrestan)
                                            <tr>
                                                <td>{{$shahrestan->Title}}</td>
                                                <td>{{$shahrestan->ostan->Title}}</td>
                                                <td class="text-center" style="justify-content: center;">
                                                    <div class="btn-group">
                                                        <a href="{{route('admin.shahrestan.edit',$shahrestan->ID)}}"
                                                           class="btn btn-outline-secondary" type="button"><i
                                                                class="fa fa-edit"></i></a>
                                                        <a href="{{route('admin.shahrestan.delete',$shahrestan->ID)}}"
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
                            <h6 class="card-title">{{isset($shahrestan_select)?'ویرایش شهر':'افزودن شهر'}}</h6>
                            <form class="needs-validation" method="post">
                                {{csrf_field()}}
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom01">انتخاب استان</label>
                                        <select class="form-control select2" id="validationCustom01" name="ostan"
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            @if(isset($ostans) && !empty($ostans))
                                                @foreach($ostans as $ostan)
                                                    <option
                                                        value="{{$ostan->ID}}" {{(isset($shahrestan_select) && $ostan->ID==$shahrestan_select->ostan->ID)?'selected':''}}>{{$ostan->Title}}</option>
                                                @endforeach
                                            @endif
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02">نام</label>
                                        <input type="text" class="form-control" id="validationCustom02"
                                               name="shahrestan"
                                               placeholder="شهر"
                                               value="{{isset($shahrestan_select)?$shahrestan_select->Title:''}}"
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

                @if(isset($shahrestan_select))
                    <div class="col-md-8 float-left">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">لیست مناطق شهری</h6>
                                <div class="card-body">
                                    @if(count($shahrestan_select->manategh)>0)
                                        <ul class="list-group scroll-list">
                                            @foreach($shahrestan_select->manategh as $mantaghe)
                                                <li class="list-group-item">{{$mantaghe->Title}}</li>
                                            @endforeach
                                        </ul>
                                    @else
                                        <div class="alert alert-warning">منطقه ای برای این شهر ثبت نشده است</div>
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
