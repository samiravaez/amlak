<?php if(session('success')): ?>
    <div class="alert alert-success">
        <p><?php echo e(session('success')); ?></p>
    </div>
<?php endif; ?>
<?php if(session('error')): ?>
    <div class="alert alert-danger">
        <p><?php echo e(session('error')); ?></p>
    </div>
<?php endif; ?>
<?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/layouts/messages.blade.php ENDPATH**/ ?>