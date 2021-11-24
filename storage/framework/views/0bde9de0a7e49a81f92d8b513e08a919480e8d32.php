<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4><?php echo e(isset($permission)?'ویرایش سطح دسترسی':'افزودن سطح دسترسی'); ?></h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page"><?php echo e(isset($permission)?'ویرایش سطح دسترسی':'افزودن سطح دسترسی'); ?></li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title"><?php echo e(isset($permission)?'ویرایش سطح دسترسی':'افزودن سطح دسترسی'); ?></h6>
                        <form class="needs-validation" action="<?php echo e(isset($permission)?route('admin.permissions.update',$permission->id):''); ?>" method="post" enctype="multipart/form-data">
                            <?php echo e(csrf_field()); ?>

                            <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                            <div class="form-group">
                                <label for="permission-title">نام</label>
                                <input class="form-control" id="permission-name" name="permission_name" type="text" value="<?php echo e(isset($permission)?$permission->name:''); ?>">
                            </div>
                            <div class="form-group">
                                <label for="permission-title">عنوان عمومی</label>
                                <input class="form-control" id="permission-title" name="permission_title" type="text" value="<?php echo e(isset($permission)?$permission->title:''); ?>">
                            </div>
                            <div class="form-group">
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


<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/edit/permission.blade.php ENDPATH**/ ?>