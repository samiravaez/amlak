<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- begin::page-header -->
        <div class="page-header">
            <h4>حیطه کاری کارشناس</h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">خانه</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">حیطه کاری کارشناس</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">حیطه کاری کارشناس</h6>
                        <form class="needs-validation" action="" method="post">
                            <?php echo e(csrf_field()); ?>

                            <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                            <?php if(isset($transactions) && !empty($transactions) && isset($land_types) && !empty($land_types)): ?>
                                <div class="col-12">
                                    <table class="table table-bordered table-striped" id="user-jobs">
                                        <?php
                                            $cnt=0;
                                            if(isset($edit_user->skill))
                                                $user_skills=json_decode($edit_user->skill,true);
                                        ?>
                                        <thead>
                                        <tr>
                                            <th>نوع معامله</th>
                                            <th>نوع ملک</th>
                                            <th>
                                                <span class="fa fa-plus-circle text-success" id="add-user-jobs" data-rows="<?php echo e(isset($user_skills)?count($user_skills):'0'); ?>"></span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <?php if(isset($user_skills) && !empty($user_skills)): ?>
                                            <?php $__currentLoopData = $user_skills; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index=>$user_skill): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div>
                                                                <input type="checkbox" class="transaction-select-all change-select-all" name="data[<?php echo e($cnt); ?>][transaction-select-all]" <?php echo e(($user_skill['transaction_id']==0)?'checked':''); ?> data-toggle="toggle" data-onstyle="info" data-on="همه" data-off="محدود">
                                                            </div>
                                                            <div class="ml-2 flex-fill">
                                                                <select name="data[<?php echo e($cnt); ?>][transaction]" class="select2 mt-2" <?php echo e(($user_skill['transaction_id']==0)?'disabled':''); ?>>
                                                                    <?php $__currentLoopData = $transactions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $transaction): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                        <option value="<?php echo e($transaction['term_id']); ?>" <?php echo e(($transaction['term_id']==$user_skill['transaction_id'])?'selected':''); ?>><?php echo e($transaction['term_name']); ?></option>
                                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div>
                                                                <input type="checkbox" class="land_type-select-all change-select-all" name="data[<?php echo e($cnt); ?>][land_type-select-all]" data-toggle="toggle" <?php echo e(($user_skill['land_type_id']==0)?'checked':''); ?> data-onstyle="info" data-on="همه" data-off="محدود">
                                                            </div>
                                                            <div class="ml-2 flex-fill">
                                                                <select name="data[<?php echo e($cnt); ?>][land_type]" class="select2" <?php echo e(($user_skill['land_type_id']==0)?'disabled':''); ?>>
                                                                    <?php $__currentLoopData = $land_types; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $land_type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                        <option value="<?php echo e($land_type['term_id']); ?>" <?php echo e(($land_type['term_id']==$user_skill['land_type_id'])?'selected':''); ?>><?php echo e($land_type['term_name']); ?></option>
                                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span class="fa fa-minus-circle text-danger delete-user-job"></span>
                                                    </td>
                                                </tr>
                                                <?php
                                                    $cnt=$cnt+1;
                                                ?>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        <?php endif; ?>
                                        </tbody>
                                    </table>
                                </div>
                            <?php endif; ?>

                            <div class="col-12">
                                <table class="table table-bordered table-striped" id="user-regions">
                                    <thead>
                                        <tr>
                                            <th>انتخاب محدوده</th>
                                            <th>
                                                <span class="fa fa-plus-circle text-success" id="add-user-regions" data-rows="<?php echo e(isset($regions)?count($regions):'0'); ?>"></span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <?php
                                        $cnt=0;
                                    ?>
                                    <?php if(isset($regions) && !empty($regions)): ?>
                                        <?php $__currentLoopData = $regions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $region): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <tr>
                                                <td>
                                                    <?php if(isset($ostans) && !empty($ostans)): ?>
                                                        <div class="form-row" data-num="<?php echo e($cnt); ?>">
                                                            <div class="form-group col-md-3" data-type="0">
                                                                <label>استان</label>
                                                                <select class="ostan-change-step select2" name="region[<?php echo e($cnt); ?>][ostan]">
                                                                    <option value="0">انتخاب همه</option>
                                                                    <?php $__currentLoopData = $ostans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ostan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                        <option value="<?php echo e($ostan->ID); ?>" <?php echo e(isset($region['ostan']) && ($ostan->ID==$region['ostan']->ID)?'selected':''); ?>><?php echo e($ostan->Title); ?></option>
                                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                                </select>
                                                            </div>
                                                            <?php if(isset($region['ostan']) && $region['ostan']->shahrestans()->count()>0): ?>
                                                                <div class="form-group col-md-3" data-type="1">
                                                                    <label>شهر</label>
                                                                    <?php
                                                                    ?>
                                                                    <select class="shahrestan-change-step select2"
                                                                            name="region[<?php echo e($cnt); ?>][shahrestan]">
                                                                        <option value="0">انتخاب همه</option>

                                                                        <?php $__currentLoopData = $region['ostan']->shahrestans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $shahrestan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                            <option
                                                                                value="<?php echo e($shahrestan->ID); ?>" <?php echo e((isset($region['shahrestan']) && $shahrestan->ID==$region['shahrestan']->ID)?'selected':''); ?>><?php echo e($shahrestan->Title); ?></option>
                                                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                                    </select>
                                                                </div>
                                                            <?php endif; ?>
                                                            <?php if(isset($region['ostan']) && isset($region['shahrestan']) && $region['shahrestan']->manategh()->count()>0): ?>
                                                                <div class="form-group col-md-3" data-type="2">
                                                                    <label>منطقه</label>
                                                                    <select class="mantaghe-change-step select2"
                                                                            name="region[<?php echo e($cnt); ?>][mantaghe]">
                                                                        <option value="0">انتخاب همه</option>
                                                                        <?php $__currentLoopData = $region['shahrestan']->manategh; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $mantaghe): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                            <option
                                                                                value="<?php echo e($mantaghe->ID); ?>" <?php echo e((isset($region['mantaghe']) && $mantaghe->ID==$region['mantaghe']->ID)?'selected':''); ?>><?php echo e($mantaghe->Title); ?></option>
                                                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                                    </select>
                                                                </div>
                                                            <?php endif; ?>
                                                            <?php if(isset($region['ostan']) && isset($region['shahrestan']) && isset($region['mantaghe']) && $region['mantaghe']->bakhshs()->count()>0): ?>
                                                                <div class="form-group col-md-3" data-type="3">
                                                                    <label>بخش</label>
                                                                    <select class="select2"
                                                                            name="region[<?php echo e($cnt); ?>][bakhsh]">
                                                                        <option value="0">انتخاب همه</option>
                                                                    <?php $__currentLoopData = $region['mantaghe']->bakhshs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $bakhsh): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                            <option
                                                                                value="<?php echo e($bakhsh->ID); ?>" <?php echo e((isset($region['bakhsh']) && $bakhsh->ID==$region['bakhsh']->ID)?'selected':''); ?>><?php echo e($bakhsh->Title); ?></option>
                                                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                                    </select>
                                                                </div>
                                                            <?php endif; ?>

                                                        <div>
                                                    <?php endif; ?>
                                                </td>
                                                <td><span class="fa fa-minus-circle text-danger delete-user-region"></span></td>
                                            </tr>
                                            <?php
                                                $cnt+=1;
                                            ?>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    <?php endif; ?>
                                    </tbody>
                                </table>
                            </div>

                            <div class="col-12 mb-3">
                                <button class="btn btn-primary" id="submit-all" type="submit">
                                    بروزرسانی اطلاعات
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/edit/user_area.blade.php ENDPATH**/ ?>