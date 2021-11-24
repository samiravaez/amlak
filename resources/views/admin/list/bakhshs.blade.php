@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>{{isset($bakhsh_select)?'ویرایش بخش':'لیست بخش ها'}}</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active"
                        aria-current="page">{{isset($bakhsh_select)?'ویرایش بخش':'لیست بخش ها'}}</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->

        <div class="row">
            <div class="col-md-12">
                @include('layouts.messages')
                @if(!isset($bakhsh_select))
                    <div class="col-md-8 float-right">
                        <div class="card">
                            <div class="card-body">
                                <table id="example1" class="table table-striped table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th>نام</th>
                                        <th>استان</th>
                                        <th>شهر</th>
                                        <th>منطقه</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if (isset($bakhshs) && !empty($bakhshs))
                                        @foreach($bakhshs as $bakhsh)
                                            <tr>
                                                <td>{{$bakhsh->Title}}</td>
                                                <td>{{$bakhsh->mantaghe->shahrestan->ostan->Title}}</td>
                                                <td>{{$bakhsh->mantaghe->shahrestan->Title}}</td>
                                                <td>{{$bakhsh->mantaghe->Title}}</td>
                                                <td class="text-center" style="justify-content: center;">
                                                    <div class="btn-group">
                                                        <a href="{{route('admin.bakhsh.edit',$bakhsh->ID)}}"
                                                           class="btn btn-outline-secondary" type="button"><i
                                                                class="fa fa-edit"></i></a>
                                                        <a href="{{route('admin.bakhsh.delete',$bakhsh->ID)}}"
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
                                        <th>منطقه</th>
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
                            <h6 class="card-title">{{isset($bakhsh_select)?'ویرایش بخش':'افزودن بخش'}}</h6>
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
                                                        value="{{$ostan->ID}}" {{(isset($bakhsh_select) && $ostan->ID==$bakhsh_select->mantaghe->shahrestan->ostan->ID)?'selected':''}}>{{$ostan->Title}}</option>
                                                @endforeach
                                            @endif
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02">انتخاب شهر</label>
                                        <select class="form-control select2 shahrestan-select shahrestan-change" id="validationCustom02" name="shahrestan" data-num=""
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            @if(isset($bakhsh_select))
                                                @foreach($bakhsh_select->mantaghe->shahrestan->ostan->shahrestans()->get() as $shahrestan)
                                                    <option value="{{$shahrestan->ID}}" {{($shahrestan->ID==$bakhsh_select->mantaghe->shahrestan->ID)?'selected':''}}>{{$shahrestan->Title}}</option>
                                                @endforeach
                                            @endif
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom03">انتخاب منطقه</label>
                                        <select class="form-control select2 mantaghe-select" id="validationCustom03" name="mantaghe" data-num=""
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            @if(isset($bakhsh_select))
                                                @foreach($bakhsh_select->mantaghe->shahrestan->manategh()->get() as $mantaghe)
                                                    <option value="{{$mantaghe->ID}}" {{($mantaghe->ID==$bakhsh_select->mantaghe->ID)?'selected':''}}>{{$mantaghe->Title}}</option>
                                                @endforeach
                                            @endif
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom04">نام</label>
                                        <input type="text" class="form-control" id="validationCustom04"
                                               name="bakhsh"
                                               placeholder="بخش"
                                               value="{{isset($bakhsh_select)?$bakhsh_select->Title:''}}"
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
            </div>
        </div>
    </div>
@endsection

