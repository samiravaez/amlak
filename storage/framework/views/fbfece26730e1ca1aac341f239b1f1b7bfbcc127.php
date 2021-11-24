<div class="form-check" style="padding-right:<?php echo 10*$cnt?>px">
    <input name="terms[]" type="checkbox" value="<?php echo $term['term_id']?>" <?php echo ($values && isset($values) && in_array($term['term_id'],$values))?'checked':'' ?> id="terms[<?php echo $term['term_id']?>]">
    <label class="form-check-label" for="terms[<?php echo $term['term_id']?>]">
        <?php echo $term['term_name']?>
    </label>
</div>
<?php if(isset($term['children_rec']) && !empty($term['children_rec'])): ?>
    <?php $__currentLoopData = $term['children_rec']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $new_term): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php echo $__env->make('admin.category_checkbox_repeat',array('term'=>$new_term,'values'=>$values,'cnt'=>1+$cnt,'term_type'=>$term_type), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php endif; ?>
<?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/category_checkbox_repeat.blade.php ENDPATH**/ ?>