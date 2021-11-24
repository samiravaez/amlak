@extends('admin.main')

@section('content')
    @include('layouts.navigation')
    <div id="main">
        <!-- begin::main-content -->
        <main class="main-content">

            <div class="container">
                <!-- begin::page-header -->
                <div class="page-header">
                    <h4>دسته بندی های محصولات</h4>
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
                        <div class="col-md-8 float-right">
                            <div class="card">
                                <div class="card-body">
                                    <table id="example1" class="table table-striped table-bordered" width="100%">
                                        <thead>
                                            <tr>
                                                <th>نام</th>
                                                <th>نامک</th>
                                                <th>توضیحات</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if (isset($terms) && !empty($terms))
                                                @foreach($terms as $term)
                                            <tr>
                                                <td>{{$term['term_name']}}</td>
                                                <td>{{$term['term_slug']}}</td>
                                                <td>{{$term['term_description']}}</td>
                                            </tr>
                                                @endforeach
                                            @endif
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>نام</th>
                                                <th>نامک</th>
                                                <th>توضیحات</th>
                                            </tr>
                                        </tfoot>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 float-left">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title">افزودن دسته بندی</h6>
                                    <form class="needs-validation" method="post">
                                        {{csrf_field()}}
                                        @include('layouts.messages')
                                        <div class="form-row">
                                            <div class="col-md-12 mb-3">
                                                <label for="validationCustom01">نام</label>
                                                <input type="text" class="form-control" id="validationCustom01" name="term_name" placeholder="نام دسته بندی" required>
                                                <div class="valid-feedback">
                                                    صحیح است!
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-3">
                                                <label for="validationCustom02">نامک</label>
                                                <input type="text" class="form-control" id="validationCustom02" name="term_slug" placeholder="نامک دسته بندی">
                                                <div class="valid-feedback">
                                                    صحیح است!
                                                </div>
                                            </div>
                                            @if (isset($terms) && !empty($terms))
                                            <div class="col-md-12 mb-3">
                                                <label>دسته مادر</label>
                                                <select class="custom-select mb-3" name="parent">
                                                    <option value="0">دسته مادر</option>
                                                    @foreach($terms as $term)
                                                        <option value="{{$term['term_id']}}">
                                                            @for($i=0;$i<2*$term['level'];$i++)
                                                                &nbsp;
                                                            @endfor
                                                            {{$term['term_name']}}
                                                        </option>
                                                    @endforeach
                                                </select>
                                            </div>
                                            @endif
                                            <div class="col-md-12 mb-3">
                                                <label for="parentCat">توضیحات</label>
                                                <textarea class="form-control" id="parentCat" name="term_description"></textarea>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary" name="categoriesAddButton" type="submit">افزودن دسته بندی</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- end::main-content -->


    </div>
    <!-- end::main -->
@endsection
