@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>لیست کاربران</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">کاربران</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        @include('layouts.messages')

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <table id="users-list" class="table table-striped table-bordered table-hover" width="100%">
                            <thead>
                            <tr>
                                <th>نام</th>
                                <th>نقش کاربر</th>
                                <th>شماره تماس</th>
                                <th>تاریخ ثبت نام</th>
                                <th>گزینه ها</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>نام</th>
                                <th>نقش کاربر</th>
                                <th>شماره تماس</th>
                                <th>تاریخ ثبت نام</th>
                                <th>گزینه ها</th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        var users_list;
        @if(isset($roles) && !empty($roles))
            var roles_filter='<li><select id="roles" class="form-control">'
            roles_filter+='<option value="">مشاهده همه</option>'
            @foreach($roles as $role)
                roles_filter+="<option value='{{$role->name}}'>{{$role->title}}</option>"
            @endforeach
            roles_filter+='</select><li>'
            $('.header .navigation-toggler').after(roles_filter)
        @endif
        $(document).ready(function (){
            users_list=$('#users-list').DataTable({
                "lengthChange": true,
                "processing":false,
                "serverSide":true,
                "order":[],
                "ajax":{
                    url:"{{route('admin.reload_table_users')}}",
                    type:"POST",
                    headers:{
                        'X-CSRF-TOKEN':$('meta[name="x-csrf-token"]').attr('content'),
                    },
                    data: function ( d ) {
                        d.role = $('#roles').val();
                    },
                    dataType:"json",
                },
                responsive: true,
                language: {
                    "sEmptyTable":     "هیچ داده ای در جدول وجود ندارد",
                    "sInfo":           "نمایش _START_ تا _END_ از _TOTAL_ رکورد",
                    "sInfoEmpty":      "نمایش 0 تا 0 از 0 رکورد",
                    "sInfoFiltered":   "(فیلتر شده از _MAX_ رکورد)",
                    "sInfoPostFix":    "",
                    "sInfoThousands":  ",",
                    "sLengthMenu":     "نمایش _MENU_ رکورد",
                    "sLoadingRecords": "در حال بارگزاری...",
                    "sProcessing":     "در حال پردازش...",
                    "sSearch":         "جستجو:",
                    "sZeroRecords":    "رکوردی با این مشخصات پیدا نشد",
                    "oPaginate": {
                        "sFirst":    "ابتدا",
                        "sLast":     "انتها",
                        "sNext":     "بعدی",
                        "sPrevious": "قبلی"
                    },
                    "oAria": {
                        "sSortAscending":  ": فعال سازی نمایش به صورت صعودی",
                        "sSortDescending": ": فعال سازی نمایش به صورت نزولی"
                    }
                },
                "pageLength": 10,
                "lengthMenu": [[10, 25, 50], [10, 25, 50]],
            })
        })
        $('#roles').change(function (){
            users_list.ajax.reload()
        })
    </script>
@endsection
