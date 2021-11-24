<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>شناسنامه کاربر</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">شناسنامه کاربر</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title d-flex justify-content-between align-items-center">
                            اطلاعات
                        </h6>
                        <div class="row mb-2">
                            <div class="col-6 text-muted">نام:</div>
                            <div class="col-6"><?php echo e($user->name); ?></div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-6 text-muted">ایمیل:</div>
                            <div class="col-6"><?php echo e($user->email); ?></div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-6 text-muted">شماره تماس:</div>
                            <div class="col-6"><?php echo e((isset($usermetas) && isset($usermetas['phone']))?$usermetas['phone']:''); ?></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/auth/profile.blade.php ENDPATH**/ ?>