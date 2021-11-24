<?php $__env->startSection('content'); ?>
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
        <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

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
        <?php if(isset($roles) && !empty($roles)): ?>
            var roles_filter='<li><select id="roles" class="form-control">'
            roles_filter+='<option value="">مشاهده همه</option>'
            <?php $__currentLoopData = $roles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $role): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                roles_filter+="<option value='<?php echo e($role->name); ?>'><?php echo e($role->title); ?></option>"
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            roles_filter+='</select><li>'
            $('.header .navigation-toggler').after(roles_filter)
        <?php endif; ?>
        $(document).ready(function (){
            users_list=$('#users-list').DataTable({
                "lengthChange": true,
                "processing":false,
                "serverSide":true,
                "order":[],
                "ajax":{
                    url:"<?php echo e(route('admin.reload_table_users')); ?>",
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/users.blade.php ENDPATH**/ ?>