<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4><?php echo e($expressions['breadcrumb_title']); ?></h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">نوشته ها</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div class="row">
            <div class="col-md-12">
                <div class="card toggle-card">
                    <div class="card-header">
                        فیلتر کردن نتایج
                        <i class="fas fa-angle-down toggle toggle-sm"></i>
                    </div>
                    <div class="card-body" style="display: none">
                        <form action="" method="post" id="filter_adds">
                            <?php echo e(csrf_field()); ?>

                            <input type="hidden" name="page" value="<?php echo e(isset($adds)?$adds:''); ?>">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <label class="d-block">وضعیت تأیید آگهی</label>
                                    <div class="form-group">
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="1" name="confirm[]">
                                                رد شده
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="2" name="confirm[]">
                                                تأیید شده
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="0" name="confirm[]">
                                                در انتظار تأیید
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label class="d-block">وضعیت انتشار آگهی</label>
                                    <div class="form-group">
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="0" name="main[status][]">
                                                پیش نویس
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="1" name="main[status][]">
                                                منتشر شده
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label class="d-block">نوع آگهی</label>
                                    <div class="form-group">
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="on" name="metas[special]">
                                                آگهی های ویژه
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="">
                                            <input type="checkbox" class="switch-select">
                                            کد آگهی
                                        </label>
                                        <input type="number" class="form-control" name="main[postId]" disabled>
                                    </div>
                                </div>
                                <?php if(isset($users) && !empty($users)): ?>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">
                                                <input type="checkbox" class="switch-select">
                                                نویسنده آگهی
                                            </label>
                                            <select class="select2" name="main[author]" disabled>
                                                <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $author): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($author->id); ?>"><?php echo e($author->name); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </select>
                                        </div>
                                    </div>
                                <?php endif; ?>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3" data-type="0">
                                    <label>استان</label>
                                    <select class="ostan-change-step select2" name="metas[region][ostan]" data-adds_meta>
                                        <option value="0">همه موارد</option>
                                        <?php $__currentLoopData = $ostans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ostan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <option value="<?php echo e($ostan->ID); ?>" <?php echo e((isset($selected_ostan) && $selected_ostan==$ostan->ID)?'selected':''); ?>><?php echo e($ostan->Title); ?></option>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <?php if(isset($post_meta) && isset($post_meta['doc-status'])): ?>
                                <div class="col-md-4">
                                    <?php echo $post_meta['doc-status']; ?>

                                </div>
                                <?php endif; ?>
                                <?php if(isset($post_meta) && isset($post_meta['orientation'])): ?>
                                    <div class="col-md-4">
                                        <?php echo $post_meta['orientation']; ?>

                                    </div>
                                <?php endif; ?>
                                <?php if(isset($post_meta) && isset($post_meta['build_year'])): ?>
                                    <div class="col-md-4">
                                        <?php echo $post_meta['build_year']; ?>

                                    </div>
                                <?php endif; ?>
                            </div>
                            <div class="form-row">
                                <div class="col-md-12">
                                    <label>نوع ملک</label>
                                    <?php if(isset($land_types)): ?>
                                        <div class="form-group">
                                            <?php $__currentLoopData = $land_types; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $land_type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <div class="form-check form-check-inline mb-3">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" value="<?php echo e($land_type['term_id']); ?>" name="metas[land_type][]" data-tab="land_type_<?php echo e($land_type['term_id']); ?>_tab">
                                                        <?php echo e($land_type['term_name']); ?>

                                                    </label>
                                                </div>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                <a class="btn btn-outline-secondary float-right mx-3" data-toggle="collapse" href="#land_types_detail" role="button" aria-expanded="false" aria-controls="land_types_detail">
                                                    جستجوی پیشرفته
                                                </a>
                                        </div>
                                    <?php endif; ?>
                                    <?php if(isset($land_types)): ?>
                                        <div id="land_types_detail" class="collapse border-0">
                                            <ul class="nav nav-tabs mb-3" id="land_types_tab" role="tablist">
                                                <?php $__currentLoopData = $land_types; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $land_type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <?php if(isset($land_type['termmetas'])): ?>
                                                        <?php
                                                            $relate_fields=filter_by_value($land_type['termmetas'],'meta_key','relate_fields');
                                                            if(!empty($relate_fields)){
                                                                $termmetas[$land_type['term_id']]=json_decode($relate_fields[0]['meta_value'],true);
                                                            }
                                                        ?>
                                                    <?php endif; ?>
                                                    <li class="nav-item">
                                                        <a class="nav-link disabled"
                                                           id="land_type_<?php echo e($land_type['term_id']); ?>_tab" data-toggle="pill"
                                                           href="#land_type_<?php echo e($land_type['term_id']); ?>" role="tab"
                                                           aria-controls="land_type_<?php echo e($land_type['term_id']); ?>"
                                                           aria-selected="false"><?php echo e($land_type['term_name']); ?></a>
                                                    </li>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </ul>
                                            <div class="tab-content">
                                                <?php $__currentLoopData = $land_types; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index=>$land_type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <div class="tab-pane"
                                                         id="land_type_<?php echo e($land_type['term_id']); ?>" role="tabpanel"
                                                         aria-labelledby="land_type_<?php echo e($land_type['term_id']); ?>_tab">
                                                        <div class="form-row">
                                                            <?php if(isset($termmetas) && isset($termmetas[$land_type['term_id']])): ?>
                                                                <?php $__currentLoopData = $termmetas[$land_type['term_id']]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                    <?php
                                                                        if (isset($val['choices'])){
                                                                            $val['choices']=json_decode($val['choices'],true);
                                                                        }
                                                                        $val['search-mode']=true;
                                                                        $val['related-to']="[land_type][".$land_type['term_id']."]";
                                                                        echo '<div class="col-md-6">';
                                                                        echo \App\Classes\OptionTree::showSetting($val,false,false,true);
                                                                        echo '</div>';
                                                                    ?>
                                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                            <?php endif; ?>
                                                        </div>
                                                    </div>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-12">
                                    <label>نوع آگهی</label>
                                    <?php if(isset($transactions)): ?>
                                        <div class="form-group">
                                            <?php $__currentLoopData = $transactions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $transaction): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <div class="form-check form-check-inline mb-3">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" value="<?php echo e($transaction['term_id']); ?>" name="metas[transaction][]" data-tab="transaction_<?php echo e($transaction['term_id']); ?>_tab">
                                                        <?php echo e($transaction['term_name']); ?>

                                                    </label>
                                                </div>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <a class="btn btn-outline-secondary float-right mx-3" data-toggle="collapse" href="#transaction_detail" role="button" aria-expanded="false" aria-controls="transaction_detail">
                                                جستجوی پیشرفته
                                            </a>
                                        </div>
                                    <?php endif; ?>
                                    <?php if(isset($transactions)): ?>
                                        <div id="transaction_detail" class="collapse border-0">
                                            <ul class="nav nav-tabs mb-3" id="transaction_tab" role="tablist">
                                                <?php $__currentLoopData = $transactions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $transaction): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <?php if(isset($transaction['termmetas'])): ?>
                                                        <?php
                                                            $relate_fields=filter_by_value($transaction['termmetas'],'meta_key','relate_fields');
                                                            if(!empty($relate_fields)){
                                                                $termmetas[$transaction['term_id']]=json_decode($relate_fields[0]['meta_value'],true);
                                                            }
                                                        ?>
                                                    <?php endif; ?>
                                                    <li class="nav-item">
                                                        <a class="nav-link disabled"
                                                           id="transaction_<?php echo e($transaction['term_id']); ?>_tab" data-toggle="pill"
                                                           href="#transaction_<?php echo e($transaction['term_id']); ?>" role="tab"
                                                           aria-controls="transaction_<?php echo e($transaction['term_id']); ?>"
                                                           aria-selected="false"><?php echo e($transaction['term_name']); ?></a>
                                                    </li>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </ul>
                                            <div class="tab-content">
                                                <?php $__currentLoopData = $transactions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index=>$transaction): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <div class="tab-pane"
                                                         id="transaction_<?php echo e($transaction['term_id']); ?>" role="tabpanel"
                                                         aria-labelledby="transaction_<?php echo e($transaction['term_id']); ?>_tab">
                                                        <div class="form-row">
                                                            <?php if(isset($termmetas) && isset($termmetas[$transaction['term_id']])): ?>
                                                                <?php $__currentLoopData = $termmetas[$transaction['term_id']]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                    <?php
                                                                        if (isset($val['choices'])){
                                                                            $val['choices']=json_decode($val['choices'],true);
                                                                        }
                                                                        $val['search-mode']=true;
                                                                        $val['related-to']="[transaction][".$transaction['term_id']."]";
                                                                        echo '<div class="col-md-6">';
                                                                        echo \App\Classes\OptionTree::showSetting($val,false,false,true);
                                                                        echo '</div>';
                                                                    ?>
                                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                            <?php endif; ?>
                                                        </div>
                                                    </div>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-12">
                                    <label class="d-block">ویژگی های ملک</label>
                                    <div class="form-group">
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="on" name="metas[elevator]">
                                                آسانسور
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="on" name="metas[parking]">
                                                پارکینگ
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="on" name="metas[immediate]">
                                                فوری
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="on" name="metas[changeable]">
                                                قابل معاوضه
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="on" name="metas[luxe]">
                                                لوکس
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" value="on" name="metas[cellar]">
                                                انباری
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-12">
                                    <label>امکانات رفاهی</label>
                                    <div class="form-group">
                                        <?php if(isset($features)): ?>
                                            <?php $__currentLoopData = $features; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $feature): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input"
                                                               value="<?php echo e($feature['term_id']); ?>" name="terms[adds_feature][]">
                                                        <?php echo e($feature['term_name']); ?>

                                                    </label>
                                                </div>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>
                                            <input type="checkbox" class="switch-select">
                                            تاریخ انتشار
                                        </label>
                                        <div class="form-row">
                                            <div class="col-md-6 px-0">
                                                <input type="text" class="form-control date-picker" placeholder="از" name="date[created_at][from]" disabled>
                                            </div>
                                            <div class="col-md-6 px-0 my-md-0 my-1">
                                                <input type="text" class="form-control ml-md-1 date-picker" placeholder="تا" name="date[created_at][to]" disabled>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>
                                            <input type="checkbox" class="switch-select">
                                            آخرین به روز رسانی
                                        </label>
                                        <div class="form-row">
                                            <div class="col-md-6 px-0">
                                                <input type="text" class="form-control date-picker" placeholder="از" name="date[updated_at][from]" disabled>
                                            </div>
                                            <div class="col-md-6 px-0 my-md-0 my-1">
                                                <input type="text" class="form-control ml-md-1 date-picker" placeholder="تا" name="date[updated_at][to]" disabled>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row bg-transparent float-right my-2">
                                <button class="btn btn-primary">پیدا کن</button>
                            </div>
                        </form>
                    </div>
                </div>
                <?php echo $__env->make('admin.list.adds_table', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            </div>
        </div>
    </div>
    <div class="modal fade" id="viewAddsDetail" tabindex="-1" role="dialog" aria-labelledby="viewAddsDetailTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="viewAddsDetailTitle">...</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
            </div>
        </div>
    </div>
    <script>
        var adds_list;
        var page_name="<?php echo e($adds); ?>";
        $(document).ready(function (){
            adds_list=$('#adds-list').DataTable({
                "lengthChange": true,
                "processing":false,
                "serverSide":true,
                "order":[],
                "ajax":{
                    url:"<?php echo e(route('admin.reload_table_datas')); ?>",
                    type:"POST",
                    headers:{
                        'X-CSRF-TOKEN':$('meta[name="x-csrf-token"]').attr('content'),
                    },
                    data:{page:page_name},
                    dataType:"json",
                },
                "createdRow": function( row, data, dataIndex ) {
                    $(row).attr('class',data.className);
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
            $('#filter_adds').submit(function (e){
                e.preventDefault()
                var form=$(this)
                var html="<div id='wait-filter-results' class='popup-msg'>"
                html+='<div class="spinner-border text-primary" role="status">'
                html+='<span class="sr-only">Loading...</span>'
                html+='</div>'
                html+='</div>'

                adds_list.destroy();
                $('body').append(html)
                adds_list=$('#adds-list').DataTable({
                    "lengthChange": true,
                    "processing":false,
                    "serverSide":true,
                    "order":[],
                    "ajax":{
                        url:"<?php echo e(route('admin.reload_table_datas')); ?>",
                        type:"POST",
                        headers:{
                            'X-CSRF-TOKEN':$('meta[name="x-csrf-token"]').attr('content'),
                        },
                        data:{filters:form.serialize(),page:page_name},
                        dataType:"json",
                    },
                    "createdRow": function( row, data, dataIndex ) {
                        $(row).attr('class',data.className);
                    },
                    "drawCallback": function( settings ) {
                        $('#wait-filter-results').remove();
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
                });

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
            })
            $(document).on('click','.view-details',function (e){
                var elm=$(this)
                var adds=$(this).attr('data-adds')
                if(adds){
                    $.ajax({
                        type:'post',
                        url:"<?php echo e(route('admin.get_adds_details')); ?>",
                        data:{adds:adds},
                        success:function (response){
                            var bodyText=''
                            if(response){
                                $('#viewAddsDetailTitle').html(response.name)
                                if(response.info){
                                    $.each(response.info,function (index,val){
                                        bodyText+='<div class="row mb-2">'
                                        bodyText+='<div class="col-6 text-muted">'+val.label+'</div>'
                                        bodyText+='<div class="col-6">'+val.value+'</div>'
                                        bodyText+='</div>'
                                    })
                                }
                                $('#viewAddsDetail .modal-body').html(bodyText)
                                $('#viewAddsDetail').modal('show')
                            }
                            console.log(response)
                        }
                    })
                }

            })
        })
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/adds.blade.php ENDPATH**/ ?>