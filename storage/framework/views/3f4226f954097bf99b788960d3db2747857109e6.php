<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4><?php echo e(isset($bakhsh_select)?'ویرایش بخش':'لیست بخش ها'); ?></h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active"
                        aria-current="page"><?php echo e(isset($bakhsh_select)?'ویرایش بخش':'لیست بخش ها'); ?></li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->

        <div class="row">
            <div class="col-md-12">
                <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                <?php if(!isset($bakhsh_select)): ?>
                    <div class="col-md-8 float-right">
                        <div class="card">
                            <div class="card-body">
                                <table id="example1" class="table table-striped table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th>نام</th>
                                        <th>استان</th>
                                        <th>شهر</th>
                                        <th>منطقه</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php if(isset($bakhshs) && !empty($bakhshs)): ?>
                                        <?php $__currentLoopData = $bakhshs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $bakhsh): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <tr>
                                                <td><?php echo e($bakhsh->Title); ?></td>
                                                <td><?php echo e($bakhsh->mantaghe->shahrestan->ostan->Title); ?></td>
                                                <td><?php echo e($bakhsh->mantaghe->shahrestan->Title); ?></td>
                                                <td><?php echo e($bakhsh->mantaghe->Title); ?></td>
                                                <td class="text-center" style="justify-content: center;">
                                                    <div class="btn-group">
                                                        <a href="<?php echo e(route('admin.bakhsh.edit',$bakhsh->ID)); ?>"
                                                           class="btn btn-outline-secondary" type="button"><i
                                                                class="fa fa-edit"></i></a>
                                                        <a href="<?php echo e(route('admin.bakhsh.delete',$bakhsh->ID)); ?>"
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
                                        <th>منطقه</th>
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
                            <h6 class="card-title"><?php echo e(isset($bakhsh_select)?'ویرایش بخش':'افزودن بخش'); ?></h6>
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
                                                        value="<?php echo e($ostan->ID); ?>" <?php echo e((isset($bakhsh_select) && $ostan->ID==$bakhsh_select->mantaghe->shahrestan->ostan->ID)?'selected':''); ?>><?php echo e($ostan->Title); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02">انتخاب شهر</label>
                                        <select class="form-control select2 shahrestan-select shahrestan-change" id="validationCustom02" name="shahrestan" data-num=""
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            <?php if(isset($bakhsh_select)): ?>
                                                <?php $__currentLoopData = $bakhsh_select->mantaghe->shahrestan->ostan->shahrestans()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $shahrestan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($shahrestan->ID); ?>" <?php echo e(($shahrestan->ID==$bakhsh_select->mantaghe->shahrestan->ID)?'selected':''); ?>><?php echo e($shahrestan->Title); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom03">انتخاب منطقه</label>
                                        <select class="form-control select2 mantaghe-select" id="validationCustom03" name="mantaghe" data-num=""
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            <?php if(isset($bakhsh_select)): ?>
                                                <?php $__currentLoopData = $bakhsh_select->mantaghe->shahrestan->manategh()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $mantaghe): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($mantaghe->ID); ?>" <?php echo e(($mantaghe->ID==$bakhsh_select->mantaghe->ID)?'selected':''); ?>><?php echo e($mantaghe->Title); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom04">نام</label>
                                        <input type="text" class="form-control" id="validationCustom04"
                                               name="bakhsh"
                                               placeholder="بخش"
                                               value="<?php echo e(isset($bakhsh_select)?$bakhsh_select->Title:''); ?>"
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
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/bakhshs.blade.php ENDPATH**/ ?>