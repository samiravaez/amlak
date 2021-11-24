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
                <div class="card">
                    <div class="card-body">
                        <table id="example1" class="table table-striped table-bordered table-hover" width="100%">
                            <thead>
                            <tr>
                                <th>عنوان</th>
                                <th>نامک</th>
                                <th>نویسنده</th>
                                <th>وضعیت</th>
                                <th>تاریخ انتشار</th>
                                <th>آخرین به روز رسانی</th>
                                <th>گزینه ها</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php if($posts && count($posts)>0): ?>
                                <?php $__currentLoopData = $posts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr>
                                        <td><?php echo e($post->name); ?></td>
                                        <td><?php echo e($post->slug); ?></td>
                                        <td><?php echo e($post->user->name); ?></td>
                                        <td><?php echo $post->statusShow; ?></td>
                                        <td><?php echo e(jdate($post->created_at)); ?></td>
                                        <td><?php echo e(jdate($post->updated_at)); ?></td>
                                        <td class="text-center" style="justify-content: center;">
                                            <div class="btn-group">
                                                <a href="<?php echo e(route($expressions['posts_edit_route'],$post->postId)); ?>"
                                                   class="btn btn-outline-secondary" type="button"><i
                                                        class="fa fa-edit"></i></a>
                                                <a href="<?php echo e(route($expressions['posts_delete_route'],$post->postId)); ?>"
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
                                <th>عنوان</th>
                                <th>نامک</th>
                                <th>نویسنده</th>
                                <th>محتوا</th>
                                <th>تاریخ انتشار</th>
                                <th>آخرین به روز رسانی</th>
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

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/posts.blade.php ENDPATH**/ ?>