<?php $__env->startSection('content'); ?>
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
        <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

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


                                <th>گزینه ها</th>
                            </tr>
                            </thead>


































































































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
        var page_name="<?php echo e($page); ?>"
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
                                url:"<?php echo e(route('admin.ajaxDeleteCrmCustomer')); ?>",
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
                    url:"<?php echo e(route('admin.reload_customers_table')); ?>",
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/crm_customers.blade.php ENDPATH**/ ?>