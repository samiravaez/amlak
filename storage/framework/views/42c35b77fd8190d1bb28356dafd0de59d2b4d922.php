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
                    <li class="breadcrumb-item active" aria-current="page">دسته بندی ها</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                <?php if(!isset($term_select)): ?>
                <div class="col-md-8 float-right">
                    <div class="card">
                        <div class="card-body">
                            <table id="example1" class="table table-striped table-bordered" width="100%">
                                <thead>
                                <tr>
                                    <th>نام</th>
                                    <th>نامک</th>
                                    <th>توضیحات</th>
                                    <th>گزینه ها</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php if(isset($terms) && !empty($terms)): ?>
                                    <?php $__currentLoopData = $terms; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $term): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <?php echo $__env->make('admin.category_table_repeat',array('child'=>$term,'level'=>0,'expressions'=>$expressions), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php endif; ?>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>نام</th>
                                    <th>نامک</th>
                                    <th>توضیحات</th>
                                    <th>گزینه ها</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <?php endif; ?>

                <div class="col-md-4 float-left">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title"><?php echo e($expressions['form_title']); ?></h6>
                            <form class="needs-validation" method="post">
                                <?php echo e(csrf_field()); ?>

                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom01">نام</label>
                                        <input type="text" class="form-control" id="validationCustom01" name="term_name"
                                               placeholder="نام" value="<?php echo e(isset($term_select)?$term_select->term_name:''); ?>" required>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02">نامک</label>
                                        <input type="text" class="form-control" id="validationCustom02" name="term_slug"
                                               placeholder="نامک" value="<?php echo e(isset($term_select)?$term_select->term_slug:''); ?>">
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="term_order">ترتیب</label>
                                        <input type="number" class="form-control" id="term_order" name="term_order"
                                               placeholder="ترتیب" value="<?php echo e(isset($term_select)?$term_select->term_order:''); ?>">
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <?php if(isset($terms) && !empty($terms)): ?>
                                        <?php if(isset($has_tree) && $has_tree): ?>
                                            <div class="col-md-12 mb-3">
                                                <label>دسته مادر</label>
                                                <select class="custom-select mb-3" name="parent">
                                                    <option value="0">دسته مادر</option>
                                                    <?php $__currentLoopData = $terms; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $term): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <?php echo $__env->make('admin.category_option_repeat',array('child'=>$term,'select'=>isset($term_select)?$term_select->parent:'0','level'=>0), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                            </div>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                    <div class="col-md-12 mb-3">
                                        <label for="parentCat">توضیحات</label>
                                        <textarea class="form-control" id="parentCat"
                                                  name="term_description"><?php echo e(isset($term_select)?$term_select->term_description:''); ?></textarea>
                                    </div>
                                    <?php if(isset($term_metas)): ?>
                                    <?php echo $term_metas; ?>

                                    <?php endif; ?>
                                </div>
                                <button class="btn btn-primary" name="categoriesAddButton"
                                        type="submit"><?php echo e($expressions['form_button']); ?></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/category.blade.php ENDPATH**/ ?>