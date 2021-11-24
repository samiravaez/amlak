<?php if(isset($files)): ?>
    <?php $__currentLoopData = $files; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $file): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
            <div class="card app-file-list">
                <div class="app-file-icon">
                    <label class="h-100" for="image-<?php echo e($file->file_id); ?>">
                        <?php echo $file->preview; ?>

                    </label>
                    <input type="checkbox" id="image-<?php echo e($file->file_id); ?>" value="<?php echo e($file->file_id); ?>"
                           <?php echo e((isset($new_files) && in_array($file->file_id,$new_files))?'checked':''); ?> name="checkedMedia[]">
                </div>
                <div class="p-2 small">
                    <div class="file-info-wrapper">
                        <div class="file-info">
                            <p><?php echo e($file->file_name); ?></p>
                            <p class="text-muted"><?php echo e(convert_filesize($file->file_size)); ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php else: ?>
    <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
    </div>
<?php endif; ?>
<?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/lib_files.blade.php ENDPATH**/ ?>