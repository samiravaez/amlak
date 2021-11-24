<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4><?php echo e(isset($ostan_select)?'ویرایش استان':'لیست استان ها'); ?></h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page"><?php echo e(isset($ostan_select)?'ویرایش استان':'لیست استان ها'); ?></li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->

        <div class="row">
            <div class="col-md-12">
                <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

                <?php if(!isset($ostan_select)): ?>
                    <div class="col-md-8 float-right">
                        <div class="card">
                            <div class="card-body">
                                <table id="example1" class="table table-striped table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th>نام</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php if(isset($ostans) && !empty($ostans)): ?>
                                        <?php $__currentLoopData = $ostans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ostan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <tr>
                                                <td><?php echo e($ostan->Title); ?></td>
                                                <td class="text-center" style="justify-content: center;">
                                                    <div class="btn-group">
                                                        <a href="<?php echo e(route('admin.ostan.edit',$ostan->ID)); ?>"
                                                           class="btn btn-outline-secondary" type="button"><i
                                                                class="fa fa-edit"></i></a>
                                                        <a href="<?php echo e(route('admin.ostan.delete',$ostan->ID)); ?>"
                                                           class="btn btn-outline-danger delete-item" type="button"><i
                                                                class="fa fa-trash"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    <?php endif; ?>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>نام</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>

                <div class="<?php echo e('col-md-4'); ?> float-left">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title"><?php echo e(isset($ostan_select)?'ویرایش استان':'افزودن استان'); ?></h6>
                            <form class="needs-validation" method="post">
                                <?php echo e(csrf_field()); ?>

                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom01">نام</label>
                                        <input type="text" class="form-control" id="validationCustom01" name="ostan"
                                               placeholder="استان"
                                               value="<?php echo e(isset($ostan_select)?$ostan_select->Title:''); ?>" required>
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

                <?php if(isset($ostan_select)): ?>
                    <div class="col-md-8 float-left">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">لیست شهرهای استان</h6>
                                <div class="card-body">
                                    <?php if(count($ostan_select->shahrestans)>0): ?>
                                        <ul class="list-group scroll-list">
                                            <?php $__currentLoopData = $ostan_select->shahrestans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $shahr): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <li class="list-group-item"><?php echo e($shahr->Title); ?></li>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </ul>
                                    <?php else: ?>
                                        <div class="alert alert-warning">شهری برای این استان ثبت نشده است</div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/ostans.blade.php ENDPATH**/ ?>