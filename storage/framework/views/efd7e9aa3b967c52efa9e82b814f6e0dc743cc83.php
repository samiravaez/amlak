<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>دیدگاه ها</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">دیدگاه ها</li>
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
                                <th>نویسنده</th>
                                <th>دیدگاه</th>
                                <th>در پاسخ به</th>
                                <th>وضعیت</th>
                                <th>تاریخ ارسال</th>
                                <th>گزینه ها</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php if($comments && count($comments)>0): ?>
                                <?php $__currentLoopData = $comments; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $comment): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr>
                                        <td><?php echo e($comment->user->name); ?></td>
                                        <td><?php echo $comment->comment_text; ?></td>
                                        <td><?php echo e($comment->post->name); ?></td>
                                        <td><?php echo $comment->statusShow; ?></td>
                                        <td><?php echo e(jdate($comment->created_at)); ?></td>
                                        <td class="text-center">
                                            <div class="dropdown">
                                                <a href="#" class="btn btn-sm"
                                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="" data-comment="<?php echo e($comment->comment_id); ?>" class="dropdown-item edit_comment" type="button">ویرایش</a>
                                                    <a href="" data-comment="<?php echo e($comment->comment_id); ?>" class="dropdown-item reply_to_comment" type="button">پاسخ دادن</a>
                                                    <a href="<?php echo e(route($expressions['posts_delete_route'],$comment->comment_id)); ?>" class="dropdown-item delete-item" type="button">حذف</a>
                                                </div>
                                            </div>








                                        </td>
                                    </tr>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php endif; ?>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>نویسنده</th>
                                <th>دیدگاه</th>
                                <th>در پاسخ به</th>
                                <th>وضعیت</th>
                                <th>تاریخ ارسال</th>
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

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/comments.blade.php ENDPATH**/ ?>