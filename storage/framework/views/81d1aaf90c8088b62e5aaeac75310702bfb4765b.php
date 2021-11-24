<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>دسترسی های مستقیم کاربر</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">دسترسی های مستقیم کاربر</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">دسترسی های مستقیم کاربر</h6>
                        <form class="needs-validation" action="" method="post">
                            <?php echo e(csrf_field()); ?>

                            <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                            <?php if(isset($permissions)): ?>
                                <div class="form-group mb-3">
                                    <?php $__currentLoopData = $permissions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $permission): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div class="form-check-inline">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" name="revokes[]" value="<?php echo e($permission->name); ?>" <?php echo e(($edit_user->getDirectPermissions()->contains($permission)?'checked':'')); ?>>
                                                <?php echo e($permission->title); ?>

                                            </label>
                                        </div>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </div>
                            <?php endif; ?>
                            <div class="col-12 mb-3">
                                <button class="btn btn-primary" id="submit-all" type="submit">
                                    بروزرسانی اطلاعات
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/edit/filter_user_access.blade.php ENDPATH**/ ?>