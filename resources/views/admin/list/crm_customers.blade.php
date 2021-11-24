@extends('admin.main')

@section('content')
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>همه مشتریان</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">همه مشتریان</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        @include('layouts.messages')

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <table id="customers-list" class="table table-striped table-bordered table-hover" width="100%">
                            <thead>
                            <tr>
                                <th>شناسه</th>
                                <th>ثبت کننده</th>
                                <th>مشتری</th>
                                <th>نواحی درخواستی</th>
                                <th>نوع معامله</th>
                                <th>نوع ملک</th>
                                <th>نوع مشتری</th>
                                <th>مرحله خرید</th>
{{--                                <th>وضعیت</th>--}}
{{--                                <th>تاریخ انتشار</th>--}}
                                <th>گزینه ها</th>
                            </tr>
                            </thead>
{{--                            <tbody>--}}
{{--                            @if($all_customers && count($all_customers)>0)--}}
{{--                                @foreach($all_customers as $customer)--}}
{{--                                    <tr>--}}
{{--                                        @php--}}
{{--                                            $ostans=collect($customer->ostans)->pluck('Title')->toArray();--}}
{{--                                            $shahrestans=collect($customer->shahrestans)->pluck('Title')->toArray();--}}
{{--                                            $manategh=collect($customer->manategh)->pluck('Title')->toArray();--}}
{{--                                            $bakhshs=collect($customer->bakhshs)->pluck('Title')->toArray();--}}
{{--                                            $transactions=collect($customer->transactions)->pluck('term_name')->toArray();--}}
{{--                                            $land_types=collect($customer->landTypes)->pluck('term_name')->toArray();--}}
{{--                                        @endphp--}}
{{--                                        <td>{{$customer->id}}</td>--}}
{{--                                        <td>--}}
{{--                                            <h6>{{$customer->expert->name}}</h6>--}}
{{--                                            <ul class="add-extra-info">--}}
{{--                                                <li><span class="fas fa-phone mr-1"></span><a href="tel: {{$customer->expert->phone}}">{{$customer->expert->phone}}</a></li>--}}
{{--                                                <li><span class="far fa-clock mr-1"></span>{{jdate($customer->created_at)}}</li>--}}
{{--                                            </ul>--}}
{{--                                        </td>--}}
{{--                                        <td>{{$customer->user->name}}</td>--}}
{{--                                        <td>--}}
{{--                                            @if(isset($customer->region))--}}
{{--                                                <ul class="region-list">--}}
{{--                                                @foreach($customer->region as $loop_region)--}}
{{--                                                        @php--}}
{{--                                                        $loop=array();--}}
{{--                                                        foreach ($loop_region as $index=>$val){--}}
{{--                                                            if(isset($val)){--}}
{{--                                                                $loop[]=$val->Title;--}}
{{--                                                            }--}}
{{--                                                        }--}}
{{--                                                        $region_exp=implode('- ',$loop);--}}
{{--                                                        @endphp--}}
{{--                                                        <li><span class="far fa-circle mr-1"></span>{{isset($region_exp)?$region_exp:''}}</li>--}}
{{--                                                @endforeach--}}
{{--                                                </ul>--}}
{{--                                            @endif--}}
{{--                                        </td>--}}
{{--                                        --}}{{--                        <td>{{var_dump($post->experts)}}</td>--}}
{{--                                        --}}{{--                        <td>{{var_dump($post->transaction->term_name)}}</td>--}}
{{--                                        --}}{{--                        <td>{{$post->landType->term_name}}</td>--}}
{{--                                        --}}{{--                        <td>{{$post->region->getOstan()}}</td>--}}
{{--                                        --}}{{--                                        <td>{{$customer->transaction->term_name.' '.$customer->landType->term_name}}</td>--}}
{{--                                        <td>--}}
{{--                                            @if(isset($customer->transactions))--}}
{{--                                            <div class="accordion accordion-secondary border-secondary custom-accordion">--}}
{{--                                                @foreach($customer->transactions as $transaction)--}}
{{--                                                    @php--}}
{{--                                                        $related_fields=$transaction->getRelatedFields();--}}
{{--                                                        if(isset($related_fields) && !empty($related_fields)){--}}
{{--                                                            $show_related_fields=show_related_fields($related_fields,$customer);--}}
{{--                                                        }--}}
{{--                                                    @endphp--}}
{{--                                                    <div class="accordion-row">--}}
{{--                                                        <a class="accordion-header {{(isset($show_related_fields) && !empty($show_related_fields))?'':'btn disabled'}}">--}}
{{--                                                            <span>{{$transaction->term_name}}</span>--}}
{{--                                                        </a>--}}
{{--                                                        @if(isset($show_related_fields) && !empty($show_related_fields))--}}
{{--                                                            <div class="accordion-body">--}}
{{--                                                                <ul class="crm-table-fields-list">--}}
{{--                                                                @foreach($show_related_fields as $field)--}}
{{--                                                                    <li><span class="far fa-circle mr-1"></span>{{$field}}</li>--}}
{{--                                                                @endforeach--}}
{{--                                                                </ul>--}}
{{--                                                            </div>--}}
{{--                                                        @endif--}}
{{--                                                    </div>--}}
{{--                                                @endforeach--}}
{{--                                            </div>--}}
{{--                                            @endif--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            @if(isset($customer->land_types))--}}
{{--                                            <div class="accordion accordion-secondary border-secondary custom-accordion">--}}
{{--                                                @foreach($customer->land_types as $land_type)--}}
{{--                                                    @php--}}
{{--                                                        $related_fields=$land_type->getRelatedFields();--}}
{{--                                                        if(isset($related_fields) && !empty($related_fields)){--}}
{{--                                                            $show_related_fields=show_related_fields($related_fields,$customer);--}}
{{--                                                        }--}}
{{--                                                    @endphp--}}
{{--                                                    <div class="accordion-row">--}}
{{--                                                        <a href="#" class="accordion-header {{(isset($show_related_fields) && !empty($show_related_fields))?'':'btn disabled'}}">--}}
{{--                                                            <span>{{$land_type->term_name}}</span>--}}
{{--                                                        </a>--}}
{{--                                                        @if(isset($show_related_fields) && !empty($show_related_fields))--}}
{{--                                                            <div class="accordion-body">--}}
{{--                                                                <ul class="crm-table-fields-list">--}}
{{--                                                                    @foreach($show_related_fields as $field)--}}
{{--                                                                        <li><span class="far fa-circle mr-1"></span>{{$field}}</li>--}}
{{--                                                                    @endforeach--}}
{{--                                                                </ul>--}}
{{--                                                            </div>--}}
{{--                                                        @endif--}}
{{--                                                    </div>--}}
{{--                                                @endforeach--}}
{{--                                            </div>--}}
{{--                                            @endif--}}
{{--                                        </td>--}}
{{--                                        <td>{{$customer_type[$customer->customer_type]}}</td>--}}
{{--                                        <td>{{$purchage_stage[$customer->purchase_stage]}}</td>--}}
{{--                                        <td>--}}
{{--                                            <div class="dropdown">--}}
{{--                                                <a href="#" class="btn btn-sm"--}}
{{--                                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">--}}
{{--                                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>--}}
{{--                                                </a>--}}
{{--                                                <div class="dropdown-menu dropdown-menu-right">--}}
{{--                                                    @if($user->can('adds_management') || ($user->can('local_adds_management') && $user->id==$customer->expert->id))--}}
{{--                                                    <a href="{{route('admin.crm_request_edit',$customer->id)}}" class="dropdown-item" type="button">ویرایش مشتری</a>--}}
{{--                                                    @endif--}}
{{--                                                    <a href="{{route('admin.showSuggestedAdds',$customer->id)}}" class="dropdown-item" type="button">لیست آگهی ها</a>--}}
{{--                                                    @role('super-admin')--}}
{{--                                                        <a href="" class="delete-customer dropdown-item" type="button" data-customer="{{$customer->id}}">حذف مشتری</a>--}}
{{--                                                    @endrole--}}
{{--                                                </div>--}}
{{--                                            </div>--}}
{{--                                        </td>--}}
{{--                                    </tr>--}}
{{--                                @endforeach--}}
{{--                            @endif--}}
{{--                            </tbody>--}}
                            <tfoot>
                            <tr>
                                <th>شناسه</th>
                                <th>ثبت کننده</th>
                                <th>مشتری</th>
                                <th>نواحی درخواستی</th>
                                <th>نوع معامله</th>
                                <th>نوع ملک</th>
                                <th>نوع مشتری</th>
                                <th>مرحله خرید</th>
{{--                                <th>وضعیت</th>--}}
{{--                                <th>تاریخ انتشار</th>--}}
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
        var customers_list;
        var page_name="{{$page}}"
        $(document).ready(function (){
            $(document).on('click','.delete-customer',function (e){
                e.preventDefault()
                var elm=$(this)
                if (elm.is('[data-customer]')){
                    var id=parseInt(elm.attr('data-customer'))
                    swal({
                        title: "آیا می خواهید این درخواست حذف شود؟",
                        icon: "warning",
                        buttons: [
                            'لغو',
                            'تأیید'
                        ],
                        dangerMode: true,
                    }).then(function(isConfirm) {
                        if (isConfirm) {
                            $.ajax({
                                type:'post',
                                url:"{{route('admin.ajaxDeleteCrmCustomer')}}",
                                data:{id:id},
                                success:function (response){
                                    if (response.success){
                                        swal(response.message,{icon:'success',timer:1000,buttons:false})
                                        // elm.parent().parent().parent().parent().remove()
                                        data_table
                                            .row( elm.parents('tr') )
                                            .remove()
                                            .draw();
                                    }else if(response.error){
                                        swal(response.message,{icon:'error',timer:1000,buttons:false})
                                    }
                                }
                            })
                        } else {
                            swal("عملیات حذف انجام نشد!",{icon:'error',timer:1000,buttons:false})
                        }
                    })
                }
            })
            customers_list=$('#customers-list').DataTable({
                "lengthChange": true,
                "processing":false,
                "serverSide":true,
                "order":[],
                "ajax":{
                    url:"{{route('admin.reload_customers_table')}}",
                    type:"POST",
                    headers:{
                        'X-CSRF-TOKEN':$('meta[name="x-csrf-token"]').attr('content'),
                    },
                    data:{page:page_name},
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
                "lengthMenu": [[10, 25, 50], [10, 25, 50]]
            })
        })
    </script>
@endsection
