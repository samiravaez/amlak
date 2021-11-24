<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>سطوح دسترسی</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">سطوح دسترسی</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <table id="example1" class="table table-striped table-bordered table-hover" width="100%">
                            <thead>
                            <tr>
                                <th>نام</th>
                                <th>عنوان عمومی</th>
                                <th>گزینه ها</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php if($permissions && count($permissions)>0): ?>
                                <?php $__currentLoopData = $permissions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $permission): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr>
                                        <td><?php echo e($permission->name); ?></td>
                                        <td><?php echo e($permission->title); ?></td>
                                        <td class="text-center" style="justify-content: center;">
                                            <div class="btn-group">
                                                <a href="<?php echo e(route('admin.permissions.edit',$permission->id)); ?>"
                                                   class="btn btn-outline-secondary" type="button"><i
                                                        class="fa fa-edit"></i></a>
                                                <a href="<?php echo e(route('admin.permissions.delete',$permission->id)); ?>"
                                                   class="btn btn-outline-danger delete-item" type="button"><i
                                                        class="fas fa-trash"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php endif; ?>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>نام</th>
                                <th>عنوان عمومی</th>
                                <th>گزینه ها</th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/permissions.blade.php ENDPATH**/ ?>