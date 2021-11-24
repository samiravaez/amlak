<option value="<?php echo e($child['term_id']); ?>" <?php echo e(($child['term_id']==$select)?'selected':''); ?>>
    <?php echo e(str_repeat('-',$level)); ?>

    <?php echo e($child['term_name']); ?>

</option>
<?php if(isset($child['children_rec']) && !empty($child['children_rec'])): ?>
    <?php $__currentLoopData = $child['children_rec']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $new_child): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php echo $__env->make('admin.category_option_repeat',array('child'=>$new_child,'select'=>$select,'level'=>1+$level), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php endif; ?>
<?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/category_option_repeat.blade.php ENDPATH**/ ?>