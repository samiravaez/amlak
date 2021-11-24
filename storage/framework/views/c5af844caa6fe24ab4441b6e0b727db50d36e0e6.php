<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4><?php echo e(isset($shahrestan_select)?'ویرایش شهر':'لیست شهر ها'); ?></h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active"
                        aria-current="page"><?php echo e(isset($shahrestan_select)?'ویرایش شهر':'لیست شهر ها'); ?></li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->

        <div class="row">
            <div class="col-md-12">
                <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                <?php if(!isset($shahrestan_select)): ?>
                    <div class="col-md-8 float-right">
                        <div class="card">
                            <div class="card-body">
                                <table id="example1" class="table table-striped table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th>نام</th>
                                        <th>استان</th>
                                        <th>گزینه ها</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php if(isset($shahrestans) && !empty($shahrestans)): ?>
                                        <?php $__currentLoopData = $shahrestans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $shahrestan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <tr>
                                                <td><?php echo e($shahrestan->Title); ?></td>
                                                <td><?php echo e($shahrestan->ostan->Title); ?></td>
                                                <td class="text-center" style="justify-content: center;">
                                                    <div class="btn-group">
                                                        <a href="<?php echo e(route('admin.shahrestan.edit',$shahrestan->ID)); ?>"
                                                           class="btn btn-outline-secondary" type="button"><i
                                                                class="fa fa-edit"></i></a>
                                                        <a href="<?php echo e(route('admin.shahrestan.delete',$shahrestan->ID)); ?>"
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
                            <h6 class="card-title"><?php echo e(isset($shahrestan_select)?'ویرایش شهر':'افزودن شهر'); ?></h6>
                            <form class="needs-validation" method="post">
                                <?php echo e(csrf_field()); ?>

                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom01">انتخاب استان</label>
                                        <select class="form-control select2" id="validationCustom01" name="ostan"
                                                required>
                                            <option value="0">یک گزینه انتخاب کنید</option>
                                            <?php if(isset($ostans) && !empty($ostans)): ?>
                                                <?php $__currentLoopData = $ostans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ostan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option
                                                        value="<?php echo e($ostan->ID); ?>" <?php echo e((isset($shahrestan_select) && $ostan->ID==$shahrestan_select->ostan->ID)?'selected':''); ?>><?php echo e($ostan->Title); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                        </select>
                                        <div class="valid-feedback">
                                            صحیح است!
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label for="validationCustom02">نام</label>
                                        <input type="text" class="form-control" id="validationCustom02"
                                               name="shahrestan"
                                               placeholder="شهر"
                                               value="<?php echo e(isset($shahrestan_select)?$shahrestan_select->Title:''); ?>"
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

                <?php if(isset($shahrestan_select)): ?>
                    <div class="col-md-8 float-left">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">لیست مناطق شهری</h6>
                                <div class="card-body">
                                    <?php if(count($shahrestan_select->manategh)>0): ?>
                                        <ul class="list-group scroll-list">
                                            <?php $__currentLoopData = $shahrestan_select->manategh; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $mantaghe): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <li class="list-group-item"><?php echo e($mantaghe->Title); ?></li>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </ul>
                                    <?php else: ?>
                                        <div class="alert alert-warning">منطقه ای برای این شهر ثبت نشده است</div>
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

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/list/shahrestans.blade.php ENDPATH**/ ?>