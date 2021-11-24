<tr>
    <td>
        <?php echo e(str_repeat('-',$level)); ?>

        <?php echo e($child['term_name']); ?>

    </td>
    <td><?php echo e($child['term_slug']); ?></td>
    <td><?php echo $child['term_description']; ?></td>
    <td>
        <div class="btn-group">
            <a href="<?php echo e(route($expressions['posts_edit_route'],$child['term_id'])); ?>"
               class="btn btn-outline-secondary" type="button"><i
                    class="fa fa-edit"></i></a>
            <a href="<?php echo e(route($expressions['posts_delete_route'],$child['term_id'])); ?>"
               class="btn btn-outline-danger delete-item" type="button"><i
                    class="fa fa-trash"></i></a>
        </div>
    </td>
</tr>
<?php if(isset($child['children_rec']) && !empty($child['children_rec'])): ?>
    <?php $__currentLoopData = $child['children_rec']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $new_child): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php echo $__env->make('admin.category_table_repeat',array('child'=>$new_child,'level'=>1+$level,'expressions'=>$expressions), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php endif; ?>
<?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/category_table_repeat.blade.php ENDPATH**/ ?>