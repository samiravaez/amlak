<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="<?php echo e(asset('favicon.ico')); ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="token" content="<?php echo e(csrf_token()); ?>">
    <title>Laravel</title>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="theme-color" content="#000000"/>
    <link rel="stylesheet" href="<?php echo e(asset('assets/fonts/simple-line-icons/css/simple-line-icons.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/fonts/iconsmind-s/css/iconsminds.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/fonts/iranyekan/style.css')); ?>">
    <link rel="manifest" href="<?php echo e(asset('mix-manifest.json')); ?>"/>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
    />
    <link href="<?php echo e(mix('css/app.css')); ?>" rel="stylesheet"/>
</head>
<body>
<div id="root">
    <div class="loading"></div>
</div>
<script src="<?php echo e(mix('js/index.js')); ?>"></script>

</body>
</html>
<?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/welcome.blade.php ENDPATH**/ ?>