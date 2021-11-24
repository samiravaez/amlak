<!-- begin::navigation -->
<div class="navigation">

    <!-- begin::logo -->
    <div id="logo">
        <a href="index.html">
            <img class="logo" src="https://lara-melk.ir/storage/2021/04/19/لوگو لاراملک_1618836858.png" alt="logo" style="width: 100px;padding: 20px;">
        </a>
    </div>
    <!-- end::logo -->

    <!-- begin::navigation header -->
    <header class="navigation-header mt-3">
        <?php if($profile): ?>
        <figure class="avatar avatar-state-success">
            <img src="<?php echo e($profile->url); ?>" class="rounded-circle" alt="image">
        </figure>
        <?php endif; ?>
        <div>
            <ul class="nav">
                <li class="nav-item">
                    <a href="<?php echo e(route('profile')); ?>" class="btn nav-link bg-info-bright" title="پروفایل" data-toggle="tooltip">
                        <i data-feather="user"></i>
                    </a>
                </li>
                <?php if(auth()->check() && auth()->user()->hasRole('super-admin')): ?>
                <li class="nav-item">
                    <a href="<?php echo e(route('admin.theme.settings')); ?>" class="btn nav-link bg-success-bright" title="تنظیمات" data-toggle="tooltip">
                        <i data-feather="settings"></i>
                    </a>
                </li>
                <?php endif; ?>
                <li class="nav-item">
                    <form action="<?php echo e(route('logout')); ?>" method="get">
                        <?php echo csrf_field(); ?>
                        <button type="submit" name="logOutButton" class="btn nav-link bg-danger-bright" title="خروج" data-toggle="tooltip">
                            <i data-feather="log-out"></i>
                        </button>
                    </form>
                </li>
            </ul>
        </div>
    </header>
    <!-- end::navigation header -->

    <!-- begin::navigation menu -->
    <div class="navigation-menu-body">
        <ul>
            <li class="navigation-divider">اصلی</li>
            <li>
                <a href="<?php echo e(route('admin.dashboard')); ?>">
                    <i class="nav-link-icon" data-feather="bar-chart"></i>
                    <span>داشبورد</span>
                </a>
            </li>
            <?php if(auth()->check() && auth()->user()->hasRole('super-admin')): ?>
            <li>
                <a href="">
                    <i class="nav-link-icon" data-feather="edit"></i>
                    <span>نوشته ها</span>
                </a>
                <ul>
                    <li><a href="<?php echo e(route('admin.posts.list')); ?>">همه نوشته ها</a></li>
                    <li><a href="<?php echo e(route('admin.posts.create')); ?>">افزودن نوشته</a></li>
                    <li><a href="<?php echo e(route('admin.categories.list')); ?>">دسته ها</a></li>
                    <li><a href="<?php echo e(route('admin.tags.list')); ?>">برچسب ها</a></li>
                </ul>
            </li>
            <?php endif; ?>
            <?php if(auth()->check() && auth()->user()->hasRole('super-admin')): ?>
            <li>
                <a href="">
                    <i class="nav-link-icon" data-feather="edit"></i>
                    <span>برگه ها</span>
                </a>
                <ul>
                    <li><a href="<?php echo e(route('admin.pages.list')); ?>">همه برگه ها</a></li>
                    <li><a href="<?php echo e(route('admin.pages.create')); ?>">افزودن برگه</a></li>
                </ul>
            </li>
            <?php endif; ?>
            <?php if($user->can('adds_management') || $user->can('local_adds_management')): ?>
            <li>
                <a href="">
                    <i class="nav-link-icon" data-feather="git-pull-request"></i>
                    <span>داشبورد CRM</span>
                </a>
                <ul>
                    <li><a href="<?php echo e(route('crm.show_all_customers')); ?>"> همه مشتری ها</a></li>
                    <li><a href="<?php echo e(route('crm.show_all_region_customers')); ?>"> همه مشتری های منطقه من</a></li>
                    <li><a href="<?php echo e(route('crm.show_my_customers')); ?>">مشتری های من</a></li>
                    <li><a href="<?php echo e(route('crm.add_customer')); ?>">افزودن مشتری</a></li>
                </ul>
            </li>
            <?php endif; ?>
            <?php if($user->can('adds_management') || $user->can('local_adds_management')): ?>
            <li>
                <a href="">
                    <i class="nav-link-icon" data-feather="monitor"></i>
                    <span>آگهی ها</span>
                </a>
                <ul>
                    <li><a href="<?php echo e(route('admin.adds.list')); ?>">همه آگهی ها</a></li>
                    <li><a href="<?php echo e(route('admin.adds.my_adds')); ?>">آگهی های من</a></li>
                    <li><a href="<?php echo e(route('admin.adds.waiting_adds')); ?>">آگهی های تأیید نشده</a></li>
                    <li><a href="<?php echo e(route('admin.adds.create')); ?>">افزودن آگهی</a></li>
                    <li><a href="<?php echo e(route('admin.adds.show_archive_adds')); ?>">بایگانی</a></li>
                    <?php if($user->can('adds_management')): ?>
                    <li><a href="<?php echo e(route('admin.adds.show_trash_adds')); ?>">زباله دان</a></li>
                    <?php endif; ?>
                </ul>
            </li>
            <?php endif; ?>
            <?php if($user->can('adds_management')): ?>
            <li>
                <a href="">
                    <i class="nav-link-icon" data-feather="airplay"></i>
                    <span>تنظیمات آگهی</span>
                </a>
                <ul>
                    <li><a href="<?php echo e(route('admin.transactions.list')); ?>">انواع معامله</a></li>
                    <li><a href="<?php echo e(route('admin.land_types.list')); ?>">انواع ملک</a></li>
                    <li><a href="<?php echo e(route('admin.adds_features.list')); ?>">امکانات رفاهی</a></li>
                    <li><a href="<?php echo e(route('admin.facilities.list')); ?>">مراکز مهم</a></li>
                </ul>
            </li>
            <?php endif; ?>
            <?php if(auth()->check() && auth()->user()->hasRole('super-admin')): ?>
            <li>
                <a href="">
                    <i class="nav-link-icon" data-feather="file"></i>
                    <span>رسانه ها</span>
                </a>
                <ul>
                    <li><a href="<?php echo e(route('admin.files.list')); ?>">همه رسانه ها</a></li>
                    <li><a href="<?php echo e(route('admin.files.upload')); ?>">افزودن رسانه</a></li>
                </ul>
            </li>
            <?php endif; ?>
            <?php if(auth()->check() && auth()->user()->hasRole('super-admin')): ?>
            <li>
                <a href="<?php echo e(route('admin.comments.list')); ?>">
                    <i class="nav-link-icon" data-feather="message-circle"></i>
                    <span>دیدگاه ها</span>
                </a>
            </li>
            <?php endif; ?>
            <?php if($user->can('users_management')): ?>
            <li>
                <a href="">
                    <i class="nav-link-icon" data-feather="user"></i>
                    <span>کاربران</span>
                </a>
                <ul>
                    <li><a href="<?php echo e(route('admin.users.list')); ?>">همه کاربران</a></li>
                    <li><a href="<?php echo e(route('admin.users.create')); ?>">افزودن کاربر</a></li>
                    <?php if(auth()->check() && auth()->user()->hasRole('super-admin')): ?>
                    <li><a href="<?php echo e(route('admin.roles.list')); ?>">مدیریت نقش ها</a></li>
                    <li><a href="<?php echo e(route('admin.roles.create')); ?>">افزودن نقش کاربری</a></li>
                    <li><a href="<?php echo e(route('admin.permissions.list')); ?>">سطوح دسترسی</a></li>
                    <li><a href="<?php echo e(route('admin.permissions.create')); ?>">افزودن سطح دسترسی</a></li>
                    <?php endif; ?>
                </ul>
            </li>
            <?php endif; ?>
            <?php if($user->can('regions_management')): ?>
            <li>
                <a href="">
                    <i class="nav-link-icon" data-feather="globe"></i>
                    <span>نواحی</span>
                </a>
                <ul>
                    <li><a href="<?php echo e(route('admin.ostans.index')); ?>">استان ها</a></li>
                    <li><a href="<?php echo e(route('admin.shahrestans.index')); ?>">شهر ها</a></li>
                    <li><a href="<?php echo e(route('admin.manategh.index')); ?>">مناطق شهری</a></li>
                    <li><a href="<?php echo e(route('admin.bakhshs.index')); ?>">بخش ها</a></li>
                </ul>
            </li>
            <?php endif; ?>
            <?php if(auth()->check() && auth()->user()->hasRole('super-admin')): ?>
            <li>
                <a href="">
                    <i class="nav-link-icon" data-feather="settings"></i>
                    <span>تنظیمات</span>
                </a>
                <ul>
                    <li><a href="<?php echo e(route('admin.menus.index')); ?>">فهرست ها</a></li>
                    <li><a href="<?php echo e(route('admin.theme.settings')); ?>">تنظیمات سایت</a></li>
                </ul>
            </li>
            <?php endif; ?>
        </ul>
    </div>
    <!-- end::navigation menu -->

</div>
<!-- end::navigation -->
<?php /**PATH C:\Users\SamiraVz\Desktop\amlak\resources\views/layouts/navigation.blade.php ENDPATH**/ ?>