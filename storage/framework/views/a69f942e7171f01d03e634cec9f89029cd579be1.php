<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4><?php echo e(isset($mantaghe_select)?'ویرایش منطقه':'لیست مناطق'); ?></h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active"
                        aria-current="page"><?php echo e(isset($mantaghe_select)?'ویرایش منطقه':'لیست مناطق'); ?></li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->

        <div class="row">
            <div class="col-md-12">
                <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                <?php if(!isset($mantaghe_select)): ?>
                    <div class="col-md-8 float-right">
                        <div class="card">
                            <div class="card-body">
                                <table id="example1" class="table table-striped table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th>نام</th>
                                        <th>استان</th>
                                        <th>شهر</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php if(isset($manategh) && !empty($manategh)): ?>
                                        <?php $__currentLoopData = $manategh; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $mantaghe): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <tr>
                                                <td><?php echo e($mantaghe->Title); ?></td>
                                                <td><?php echo e($mantaghe->shahrestan->Title); ?></td>
                                                <td><?php echo e($mantaghe->shahrestan->ostan->Title); ?></td>
                                                <td class="text-center" style="justify-content: center;">
                                                    <div class="btn-group">
                                                        <a href="<?php echo e(route('admin.manategh.edit',$mantaghe->ID)); ?>"
                                                           class="btn btn-outline-secondary" type="button"><i
                                                                class="fa fa-edit"></i></a>
                                                        <a href="<?php echo e(route('admin.manategh.delete',$mantaghe->ID)); ?>"
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
                                        <th>نام</th>
                                        <th>استان</th>
                                        <th>شهر</th>
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
                            <h6 class="card-title"><?php echo e(isset($mantaghe_select)?'ویرایش منطقه':'افزودن منطقه'); ?></h6>
                            <form class="needs-validation" method="post">
                                <?php echo e(csrf_field()); ?>

                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom01">انتخاب استان</label>
                                        <select class="form-control select2 ostan-change" id="validationCustom01" name="ostan" data-num=""
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            <?php if(isset($ostans) && !empty($ostans)): ?>
                                                <?php $__currentLoopData = $ostans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ostan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option
                                                        value="<?php echo e($ostan->ID); ?>" <?php echo e((isset($mantaghe_select) && $ostan->ID==$mantaghe_select->shahrestan->ostan->ID)?'selected':''); ?>><?php echo e($ostan->Title); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02">انتخاب شهر</label>
                                        <select class="form-control select2 shahrestan-select" id="validationCustom02" name="shahrestan" data-num=""
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            <?php if(isset($mantaghe_select)): ?>
                                                <?php $__currentLoopData = $mantaghe_select->shahrestan->ostan->shahrestans()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $shahrestan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($shahrestan->ID); ?>" <?php echo e(($shahrestan->ID==$mantaghe_select->shahrestan->ID)?'selected':''); ?>><?php echo e($shahrestan->Title); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom03">نام</label>
                                        <input type="text" class="form-control" id="validationCustom03"
                                               name="mantaghe"
                                               placeholder="منطقه"
                                               value="<?php echo e(isset($mantaghe_select)?$mantaghe_select->Title:''); ?>"
                                               required>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary" name="categoriesAddButton"
                                        type="submit">ذخیره
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <?php if(isset($mantaghe_select)): ?>
                    <div class="col-md-8 float-left">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">بخش های منطقه</h6>
                                <div class="card-body">
                                    <?php if(count($mantaghe_select->bakhshs)>0): ?>
                                        <ul class="list-group scroll-list">
                                            <?php $__currentLoopData = $mantaghe_select->bakhshs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $bakhsh): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <li class="list-group-item"><?php echo e($bakhsh->Title); ?></li>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </ul>
                                    <?php else: ?>
                                        <div class="alert alert-warning">بخشی برای این منطقه ثبت نشده است</div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/manategh.blade.php ENDPATH**/ ?>