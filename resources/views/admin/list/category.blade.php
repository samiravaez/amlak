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
                    <li class="breadcrumb-item active" aria-current="page">دسته بندی ها</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                @include('layouts.messages')
                @if(!isset($term_select))
                <div class="col-md-8 float-right">
                    <div class="card">
                        <div class="card-body">
                            <table id="example1" class="table table-striped table-bordered" width="100%">
                                <thead>
                                <tr>
                                    <th>نام</th>
                                    <th>نامک</th>
                                    <th>توضیحات</th>
                                    <th>گزینه ها</th>
                                </tr>
                                </thead>
                                <tbody>
                                @if (isset($terms) && !empty($terms))
                                    @foreach($terms as $term)
                                        @include('admin.category_table_repeat',array('child'=>$term,'level'=>0,'expressions'=>$expressions))
                                    @endforeach
                                @endif
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>نام</th>
                                    <th>نامک</th>
                                    <th>توضیحات</th>
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
                            <h6 class="card-title">{{$expressions['form_title']}}</h6>
                            <form class="needs-validation" method="post">
                                {{csrf_field()}}
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom01">نام</label>
                                        <input type="text" class="form-control" id="validationCustom01" name="term_name"
                                               placeholder="نام" value="{{isset($term_select)?$term_select->term_name:''}}" required>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02">نامک</label>
                                        <input type="text" class="form-control" id="validationCustom02" name="term_slug"
                                               placeholder="نامک" value="{{isset($term_select)?$term_select->term_slug:''}}">
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="term_order">ترتیب</label>
                                        <input type="number" class="form-control" id="term_order" name="term_order"
                                               placeholder="ترتیب" value="{{isset($term_select)?$term_select->term_order:''}}">
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    @if (isset($terms) && !empty($terms))
                                        @if(isset($has_tree) && $has_tree)
                                            <div class="col-md-12 mb-3">
                                                <label>دسته مادر</label>
                                                <select class="custom-select mb-3" name="parent">
                                                    <option value="0">دسته مادر</option>
                                                    @foreach($terms as $term)
                                                        @include('admin.category_option_repeat',array('child'=>$term,'select'=>isset($term_select)?$term_select->parent:'0','level'=>0))
                                                    @endforeach
                                                </select>
                                            </div>
                                        @endif
                                    @endif
                                    <div class="col-md-12 mb-3">
                                        <label for="parentCat">توضیحات</label>
                                        <textarea class="form-control" id="parentCat"
                                                  name="term_description">{{isset($term_select)?$term_select->term_description:''}}</textarea>
                                    </div>
                                    @if(isset($term_metas))
                                    {!! $term_metas !!}
                                    @endif
                                </div>
                                <button class="btn btn-primary" name="categoriesAddButton"
                                        type="submit">{{$expressions['form_button']}}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
