<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ورود</title>

    <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/reset.css')); ?>" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
    <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/animate.min.css')); ?>" type="text/css">
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/app.css')); ?>" type="text/css">
    <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/owl.carousel.min.css')); ?>" type="text/css">
    <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/owl.theme.default.min.css')); ?>" type="text/css">
    <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/style.css')); ?>" type="text/css">
    <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/responsive.css')); ?>" type="text/css">
    <style>
        .field-icon {
            position: absolute;
            right: 8px;
            top: 12px;
            z-index: 2;
        }
    </style>
</head>
<body class="form-membership">

<div class="preloader" style="display: none;">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" viewBox="0 0 128 128" xml:space="preserve">
        <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF"></rect>
        <g>
            <path d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z" fill="#000000" fill-opacity="1"></path>
        </g>
    </svg>
</div>

<div class="form-wrapper">
    <?php
        $sitelogo=\App\Classes\OptionTree::getOption('siteLogo','image');
    ?>
    <?php if(isset($sitelogo)): ?>
    <!-- logo -->
    <div id="logo">
        <img class="logo h-100" src="<?php echo e($sitelogo); ?>">
    </div>
    <!-- ./ logo -->
    <?php endif; ?>
    <h5>ورود</h5>
    <!-- form -->
    <form action="" method="post">
        <?php echo $__env->make('layouts.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <?php echo csrf_field(); ?>
        <div class="form-group">
            <input type="email" name="email" class="form-control text-left" placeholder="ایمیل" dir="ltr" required="" autofocus="" <?php echo e(old('email')); ?>>
        </div>
        <div class="form-group position-relative">
            <input type="password" name="password" id="password-field" class="form-control text-left" placeholder="رمز عبور" dir="ltr" required="" <?php echo e(old('password')); ?>>
            <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
        </div>
        <div class="form-group text-left d-sm-flex justify-content-between mb-4">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" name="remember" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">به خاطر سپاری</label>
            </div>
            <a href="<?php echo e(route('login.phone')); ?>" class="line-height-28">ورود با شماره تلفن</a>
        </div>
        <button type="submit" class="btn btn-primary btn-block">ورود</button>
    </form>
    <!-- ./ form -->
    <div class="login-copyright">طراحی و توسعه CMS توسط <a href="https://www.tabtarh.com" target="_blank">تب طرح</a></div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="<?php echo e(asset('assets/front/js/main.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/app.js')); ?>"></script>
<script src="<?php echo e(asset('assets/front/js/owl.carousel.min.js')); ?>"></script>
<script>
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
</script>
</body>
</html>
<?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/auth/loginWithUserNameAndPass.blade.php ENDPATH**/ ?>