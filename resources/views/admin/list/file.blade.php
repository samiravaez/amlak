@extends('admin.main')

@section('content')
    @include('layouts.messages')

    <div class="row app-block">
        <div class="col-md-3 app-sidebar">
            <div class="card">
                <div class="card-body">
                    <a class="btn btn-primary btn-block text-white" href="{{route('admin.files.upload')}}" target="_blank">
                        <i class="fa fa-cloud-upload"></i>
                        آپلود فایل
                    </a>
                </div>
                <div class="app-sidebar-menu" tabindex="1" style="overflow: hidden; outline: none;">
                    <ul class="list-group list-group-flush" id="files-range">
                        <li class="active">
                            <a href="" data-time="all" class="list-group-item active d-flex align-items-center show active"
                               data-toggle="tab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="feather feather-folder width-15 height-15 mr-2">
                                    <path
                                        d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                </svg>
                                همه فایل ها
                                <span class="small ml-auto">{{(isset($size) && isset($size['all']))?$size['all']:''}}</span>
                            </a>
                        </li>
                        <li>
                            <a href="" data-time="day" class="list-group-item d-flex align-items-center show" data-toggle="tab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="feather feather-monitor width-15 height-15 mr-2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                                فایل های امروز
                                <span class="small ml-auto">{{(isset($size) && isset($size['day']))?$size['day']:''}}</span>
                            </a>
                        </li>
                        <li>
                            <a href="" data-time="week" class="list-group-item d-flex align-items-center show" data-toggle="tab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     class="feather feather-upload-cloud width-15 height-15 mr-2">
                                    <polyline points="16 16 12 12 8 16"></polyline>
                                    <line x1="12" y1="12" x2="12" y2="21"></line>
                                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                    <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                                فایل های این هفته
                                <span class="small ml-auto">{{(isset($size) && isset($size['week']))?$size['week']:''}}</span>
                            </a>
                        </li>
                        <li>
                            <a href="" data-time="month" class="list-group-item d-flex align-items-center d-flex align-items-center" data-toggle="tab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="feather feather-star width-15 height-15 mr-2">
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                فایل های این ماه
                                <span class="small ml-auto">{{(isset($size) && isset($size['month']))?$size['month']:''}}</span>
                            </a>
                        </li>
                    </ul>
                    <div class="card-body">
                        <h6 class="mb-4">وضعیت حافظه</h6>
                        <div class="d-flex align-items-center">
                            <div class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="feather feather-database width-30 height-30">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                </svg>
                            </div>
                            <div class="flex-grow-1">
                                <div class="progress" style="height: 10px">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 40%"
                                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="line-height-12 small text-muted mt-2">19.5GB استفاده شده از 25GB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-9 app-content tab-content">
            <div id="all" class="tab-pane fade in active show">
                <form id="filter-files-page">
                    <div class="form-row">
                        <div class="form-group col-md-8">
                            <label for="search-key">جستجو بر اساس نام فایل</label>
                            <input type="text" class="form-control" name="search" id="search-key">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="sort">مرتب سازی بر اساس</label>
                            <select id="sort" name="sort" class="form-control">
                                <option value="date">تاریخ</option>
                                <option value="name">نام</option>
                                <option value="size">اندازه</option>
                            </select>
                        </div>
                    </div>
                </form>
                @if(isset($files))
                    <div class="card app-content-body">
                        <div class="card-body">
                            <div class="row" id="files-container">
                                @include('admin.list.files_show_loop',$files)
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
    <script>
        function get_files_list(append=false){
            var data={page:page,search:$('input[name="search"]').val(),range:range,sort:$('select[name="sort"]').val()}
            req=true;
            $.ajax({
                type:'get',
                url:"{{route('admin.ajaxGetFiles')}}",
                data:data,
                dataType:'json',
                success:function (response){
                    if(response){
                        if(append){
                            $('#files-container').append(response.res)
                        }else{
                            $('#files-container').html(response.res)
                        }
                        if(response.count==0){
                            has_file=false;
                        }
                    }
                    req=false;
                },
                error:function (){
                    req=false;
                }
            })
        }
        var page=1;
        var range='all';
        var timeout = null;
        var req=false;
        var has_file=true
        $(document).ready(function(){
            $('input[name="search"]').keyup(function (e){
                clearTimeout(timeout);
                timeout=setTimeout(function (){
                    has_file=true;
                    page=1;
                    req=true;
                    get_files_list();
                },2000);
            })
            $('#files-range a').on('shown.bs.tab',function (e){
                var elm=$(e.target)
                if(elm.is('[data-time]')){
                    range=elm.attr('data-time')
                    has_file=true;
                    page=1;
                    clearTimeout(timeout);
                    get_files_list();
                }
            })
            $('select[name="sort"]').change(function (e){
                has_file=true;
                page=1;
                clearTimeout(timeout);
                get_files_list();
            })

            $(window).scroll(function() {
                if($(window).scrollTop() + $(window).height() > 0.7*$(document).height() && !req) {
                    page=page+1;
                    clearTimeout(timeout);
                    if(has_file){
                        get_files_list(true);
                    }
                }
            });
        })
    </script>
@endsection
