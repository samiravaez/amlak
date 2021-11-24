<?php
    $ostans=\App\Models\Ostan::all();
    if (isset($post)){
        $post_region=$post->postmetas()->firstWhere('meta_key','region');
        $post_address=$post->postmetas()->firstWhere('meta_key','address');
        if($post_region){
            $region=json_decode($post_region->meta_value,true);
            $selected_ostan=(isset($region['ostan']))?$region['ostan']:'0';
            $ostan=\App\Models\Ostan::find($selected_ostan);
            if ($ostan){
                $shahrestans=$ostan->shahrestans()->get();
                $selected_shahrestan=(isset($region['shahrestan']))?$region['shahrestan']:'0';
                $shahrestan=\App\Models\Shahrestan::find($selected_shahrestan);
                if ($shahrestan){
                    $manategh=$shahrestan->manategh()->get();
                    $selected_mantaghe=(isset($region['mantaghe']))?$region['mantaghe']:'0';
                    $mantaghe=\App\Models\Mantaghe::find($selected_mantaghe);
                    if ($mantaghe){
                        $bakhshs=$mantaghe->bakhshs()->get();
                        $selected_bakhsh=(isset($region['bakhsh']))?$region['bakhsh']:'0';
                    }
                }
            }
        }
    }
?>


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
                    <li class="breadcrumb-item active" aria-current="page">آگهی ها</li>
                </ol>
            </nav>
        </div>
        <!-- end::page-header -->

        <div class="row">
            <div class="col-md-12">
                <?php if(isset($post)): ?>
                    <?php switch($post->postConfirm()):
                        case (0): ?>
                            <div class="alert alert-warning">
                                آگهی شما در انتظار تأیید کارشناس است
                            </div>
                            <?php break; ?>
                        <?php case (1): ?>
                            <?php
                                $reject=$post->getRejectReasonAttribute();
                                if(isset($reject['author'])){
                                    $reject_expert=\App\Models\User::find($reject['author']);
                                }
                            ?>
                            <div class="card">
                                <div class="card-header alert alert-danger" id="headingThree">
                                    <button class="btn collapsed" type="button" data-toggle="collapse"
                                            data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        آگهی شما مورد تأیید قرار نگرفته است
                                        <span class="fas fa-exclamation-circle mr-1"></span>
                                    </button>
                                </div>
                                <div id="collapseThree" class="collapse alert alert-info m-0 p-0" aria-labelledby="headingThree">
                                    <div class="card-body">
                                        <ul>
                                            <?php if(isset($reject_expert) && $reject_expert): ?>
                                                <li>رد شده توسط: <?php echo e($reject_expert->name); ?></li>
                                            <?php endif; ?>
                                            <?php if(isset($reject) && $reject['reason']!=''): ?>
                                                <li>علت رد آگهی: <?php echo e($reject['reason']); ?></li>
                                            <?php endif; ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <?php break; ?>
                        <?php case (2): ?>
                            <div class="alert alert-success">
                                آگهی تأیید شده
                            </div>
                            <?php break; ?>
                    <?php endswitch; ?>
                <?php endif; ?>
                <form class="needs-validation" action="" method="post" enctype="multipart/form-data">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title"><?php echo e(isset($post)?($post->name):$expressions['form_title']); ?></h6>
                        <?php echo e(csrf_field()); ?>

                        <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                        <?php echo $__env->make('layouts.validate_errors', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                        <div class="col-8 mb-3 float-left">



















                            <div class="form-row">
                                <div class="col-md-12 mb-3 editorLogo">
                                <textarea id="edit"
                                          name="description"><?php echo e(old('description',isset($post)?$post->description:'')); ?></textarea>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="d-flex">
                                        <div class="mr-1 ml-2">
                                            <label class="switch-option <?php echo e((isset($post) && $post->special)?'switch-option-on':''); ?>">
                                                <input type="radio" name="metas[special]" data-toggle="toggle" value="on" <?php echo e((isset($post) && $post->special)?'checked':''); ?>>
                                                on
                                            </label>
                                            <label class="switch-option <?php echo e((isset($post) && $post->special)?'':'switch-option-off'); ?>">
                                                <input type="radio" name="metas[special]" data-toggle="toggle" value="off" <?php echo e((isset($post) && $post->special)?'':'checked'); ?>>
                                                off
                                            </label>
                                        </div>
                                        <p class="ml-1">آگهی ویژه</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 float-right px-0">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">وضعیت نوشته</label>
                                <select class="form-control" id="exampleFormControlSelect1" name="status">
                                    <option value="1" <?php echo e((isset($post) && intval($post->status)==1)?'selected':''); ?>>
                                        انتشار
                                    </option>
                                    <option value="0" <?php echo e((isset($post) && intval($post->status)==0)?'selected':''); ?>>
                                        پیش نویس
                                    </option>
                                </select>
                            </div>
                            <div class="card bg-light">
                                <div class="card-header bg-primary text-light">
                                        تصویر شاخص
                                        <a type="button" data-toggle="modal"
                                           data-target="#tabtarh-lib">
                                            <i class="fas fa-cloud-upload-alt"></i>
                                        </a>
                                        <input type="hidden" class="tbt-hide single-file" name="mainImage" data-className=""
                                               value="<?php echo e((isset($post) && $post->image)?$post->image:''); ?>">
                                </div>
                                <div class="card-body d-flex flex-wrap main_image_wrapper">
                                    <?php if(isset($post_image) && ($post_image)): ?>
                                        <div class="download-item">
                                            <div class="card app-file-list">
                                                <div class="app-file-icon">
                                                    <?php echo $post_image; ?>

                                                </div>
                                            </div>
                                            <i class="fas fa-times"></i></div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 px-0 float-right">
                            <div class="card bg-light">
                                <div class="card-header bg-primary text-light">نشانی محل</div>
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col-md-3" data-type="0">
                                            <label>استان</label>
                                            <select class="ostan-change-step select2" name="metas[region][ostan]" data-adds_meta>
                                                <option value="0">یک گزینه انتخاب کنید</option>
                                                <?php $__currentLoopData = $ostans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ostan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($ostan->ID); ?>" <?php echo e((isset($selected_ostan) && $selected_ostan==$ostan->ID)?'selected':''); ?>><?php echo e($ostan->Title); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </select>
                                        </div>
                                        <?php if(isset($shahrestans) && $shahrestans->count()>0): ?>
                                            <div class="form-group col-md-3" data-type="1">
                                                <label>شهر</label>
                                                <select class="shahrestan-change-step select2" name="metas[region][shahrestan]" data-adds_meta>
                                                    <option value="0">یک گزینه انتخاب کنید</option>
                                                    <?php $__currentLoopData = $shahrestans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $shahrestan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($shahrestan->ID); ?>" <?php echo e((isset($selected_shahrestan) && $selected_shahrestan==$shahrestan->ID)?'selected':''); ?>><?php echo e($shahrestan->Title); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                            </div>
                                        <?php endif; ?>
                                        <?php if(isset($manategh) && $manategh->count()>0): ?>
                                            <div class="form-group col-md-3" data-type="2">
                                                <label>منطقه</label>
                                                <select class="mantaghe-change-step select2" name="metas[region][mantaghe]" data-adds_meta>
                                                    <option value="0">یک گزینه انتخاب کنید</option>
                                                    <?php $__currentLoopData = $manategh; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $mantaghe): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($mantaghe->ID); ?>" <?php echo e((isset($selected_mantaghe) && $selected_mantaghe==$mantaghe->ID)?'selected':''); ?>><?php echo e($mantaghe->Title); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                            </div>
                                        <?php endif; ?>
                                        <?php if(isset($bakhshs) && $bakhshs->count()>0): ?>
                                            <div class="form-group col-md-3" data-type="3">
                                                <label>بخش</label>
                                                <select class="select2" name="metas[region][bakhsh]" data-adds_meta>
                                                    <option value="0">یک گزینه انتخاب کنید</option>
                                                    <?php $__currentLoopData = $bakhshs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $bakhsh): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($bakhsh->ID); ?>" <?php echo e((isset($selected_bakhsh) && $selected_bakhsh==$bakhsh->ID)?'selected':''); ?>><?php echo e($bakhsh->Title); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label style="width:100%">آدرس دقیق ملک</label>
                                            <input type="text" id="adds_address" class="form-control" name="metas[address]" value="<?php echo e(isset($post_address)?$post_address->meta_value:''); ?>" placeholder="برای مثال: خیابان، کوچه، پلاک" required>
                                            <button type="button" class="btn btn-primary btn-rounded mt-2" data-toggle="modal" data-target="#exampleModalCenter">انتخاب روی نقشه</button>
                                            <div class="valid-feedback">
                                                صحیح است!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-lg btn-primary adds-update" name="updatePostData" id="submit-all" type="submit">
                            تأیید
                        </button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <?php echo $meta_boxes; ?>

                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">محل آگهی</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="app"></div>
                    <div id="center-marker" class="hide"></div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function (){
            <?php if(!isset($post)): ?>
                $('.ostan-change-step').val(1).trigger('change')
                setTimeout(function () {
                    $('.shahrestan-change-step').val(6).trigger('change');
                }, 2000);

            <?php endif; ?>
        })
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/admin/edit/adds.blade.php ENDPATH**/ ?>