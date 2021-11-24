@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>فهرست ها</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">منو ها</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        @include('layouts.messages')

        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <span>انتخاب یک فهرست برای ویرایش: </span>
                            <select class="form-control w-25 d-inline" name="current-menu" id="current-menu">
                                <option value="0">یک فهرست انتخاب کنید</option>
                                @if(isset($menus) && !empty($menus))
                                    @foreach($menus as $menu)
                                        <option value="{{$menu->id}}">{{$menu->name}}</option>
                                    @endforeach
                                @endif
                            </select>
                            <span>یا انتخاب یک <a href="" class="text-info">فهرست جدید</a></span>
                            <button class="btn btn-info select-menu">گزینش فهرست</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 float-right">
                    <div class="card">
                        <div class="card-header">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <span>نام فهرست</span>
                                    <input id="list-name" type="text" data-id="0" class="form-control w-50 d-inline">
                                </div>
                                <div>
                                    <a href="" class="btn btn-danger remove-menu">حذف فهرست</a>
                                    <a href="" class="btn btn-info save-new-menu">ذخیره فهرست</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">گزینه‌های دلخواه خود را بکشید و مرتب کنید. برای دیدن گزینه‌های اضافی
                                روی پیکان کنار هر گزینه کلیک کنید.</h6>
                            <div class="dd" id="nestable1">
                                <ol class="dd-list"></ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 float-left">
                    <div class="card" style="padding: 1rem;">
                        <div class="card-body addNavMenu" style="padding: 0rem;">
                            <h6 class="card-title">افزودن به فهرست</h6>
                            <div id="accordion">
                                <div class="card0">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">از نوشته ها
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                         data-parent="#accordion">
                                        <div class="card-body0">
                                            <form action="" method="post">
                                                @if (isset($posts) && !empty($posts))
                                                    <ul style="max-height: 150px;overflow-y: scroll;">
                                                        @foreach($posts as $loop_post)
                                                            <li>
                                                                <label><input value="{{$loop_post['postId']}}"
                                                                              type="checkbox"><span>{{$loop_post['name']}}</span></label>
                                                            </li>
                                                        @endforeach
                                                    </ul>
                                                @endif
                                                <div>
                                                    <button class="btn btn-primary mt-2 add-to-menu add-post-to-menu"
                                                            type="submit" name="">افزودن
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="card0">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse"
                                                    data-target="#collapseTwo" aria-expanded="false"
                                                    aria-controls="collapseTwo">از برگه ها
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                         data-parent="#accordion">
                                        <div class="card-body0">
                                            <form action="" method="post">
                                                <ul style="max-height: 150px;overflow-y: scroll;">
                                                    <li>
                                                        <label><input type="checkbox"><span>آیتم اول</span></label>
                                                    </li>
                                                </ul>
                                                <div>
                                                    <button class="btn btn-primary mt-2 add-to-menu add-post-to-menu"
                                                            type="submit" name="">افزودن
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="card0">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse"
                                                    data-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">از دسته بندی ها
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                         data-parent="#accordion">
                                        <div class="card-body0">
                                            <form action="" method="post">
                                                @if (isset($categories) && !empty($categories))
                                                    <ul style="max-height: 150px;overflow-y: scroll;">
                                                        @foreach($categories as $cat)
                                                            <li style="padding-right: {{10*$cat['level']}}px">
                                                                <label><input data-level="{{$cat['level']}}"
                                                                              value="{{$cat['term_id']}}"
                                                                              type="checkbox"><span>{{$cat['term_name']}}</span></label>
                                                            </li>
                                                        @endforeach
                                                    </ul>
                                                @endif
                                                <div>
                                                    <button class="btn btn-primary mt-2 add-to-menu add-term-to-menu"
                                                            type="submit" name="">افزودن
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="card0">
                                    <div class="card-header" id="headingFour">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse"
                                                    data-target="#CheadingFouro" aria-expanded="false"
                                                    aria-controls="CheadingFouro">از برچسب ها
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="CheadingFouro" class="collapse" aria-labelledby="headingFour"
                                         data-parent="#accordion">
                                        <div class="card-body0">
                                            <form action="" method="post">
                                                @if (isset($tags) && !empty($tags))
                                                    <ul style="max-height: 150px;overflow-y: scroll;">
                                                        @foreach($tags as $tag)
                                                            <li style="padding-right: {{10*$tag['level']}}px">
                                                                <label><input data-level="{{$tag['level']}}"
                                                                              value="{{$tag['term_id']}}"
                                                                              type="checkbox"><span>{{$tag['term_name']}}</span></label>
                                                            </li>
                                                            </li>
                                                        @endforeach
                                                    </ul>
                                                @endif
                                                <div>
                                                    <button class="btn btn-primary mt-2 add-to-menu add-term-to-menu"
                                                            type="submit" name="">افزودن
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
