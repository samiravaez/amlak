<div class="header">

    <!-- begin::header left -->
    <ul class="navbar-nav">

        <!-- begin::navigation-toggler -->
        <li class="nav-item navigation-toggler">
            <a href="#" class="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </a>
        </li>
        <!-- end::navigation-toggler -->

        <!-- begin::header-logo -->
        <li class="nav-item" id="header-logo">
            <a href="index.html">
                <img class="logo" src="<?php echo url('');?>/assets/media/image/logo.png" alt="logo">
                <img class="logo-sm" src="<?php echo url('');?>/assets/media/image/logo-sm.png" alt="small logo">
                <img class="logo-dark" src="<?php echo url('');?>/assets/media/image/logo-dark.png" alt="dark logo">
            </a>
        </li>
        <!-- end::header-logo -->
    </ul>
    <!-- end::header left -->

    <!-- begin::header-right -->
    <div class="header-left">
        <ul class="navbar-nav">
            <!-- begin::header minimize/maximize -->
            <li class="nav-item dropdown">
                <a href="#" class="nav-link active-fullscreen" title="Fullscreen" data-toggle="fullscreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize minimize"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>
                </a>
            </li>
            <!-- end::header minimize/maximize -->

            <!-- begin::header app list -->
            <li class="nav-item dropdown">
                <a href="#" class="nav-link" title="Apps" data-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </a>
                <div class="dropdown-menu dropdown-menu-big dropdown-menu-right" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 35px, 0px);">
                    <div class="p-3">
                        <h6 class="text-uppercase font-size-11 mb-3">دسترسی سریع</h6>
                        <div class="row row-xs">
                            @if($user->can('adds_management') || $user->can('local_adds_management'))
                            <div class="col-6">
                                <a href="{{route('admin.adds.list')}}">
                                    <div class="text-uppercase font-size-11 p-3 border-radius-1 border text-center mb-3">
                                        <i class="nav-link-icon text-success" data-feather="monitor"></i>
                                        <div class="mt-2">آگهی ها</div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-6">
                                <a href="{{route('crm.show_all_customers')}}">
                                    <div class="text-uppercase font-size-11 p-3 border-radius-1 border text-center mb-3">
                                        <i class="nav-link-icon text-info" data-feather="git-pull-request"></i>
                                        <div class="mt-2">داشبورد CRM</div>
                                    </div>
                                </a>
                            </div>
                            @endif
                            @if($user->can('users_management'))
                            <div class="col-6">
                                <a href="{{route('admin.users.list')}}">
                                    <div class="text-uppercase font-size-11 p-3 border-radius-1 border text-center">
                                        <i class="nav-link-icon text-warning" data-feather="user"></i>
                                        <div class="mt-2">کاربران</div>
                                    </div>
                                </a>
                            </div>
                            @endif
                            @role('super-admin')
                            <div class="col-6">
                                <a href="{{route('admin.files.list')}}">
                                    <div class="text-uppercase font-size-11 p-3 border-radius-1 border text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file text-danger width-23 height-23"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                        <div class="mt-2">مدیریت فایل</div>
                                    </div>
                                </a>
                            </div>
                            @endrole
                        </div>
                    </div>
                </div>
            </li>
            <!-- end::header app list -->

            <!-- begin::header notification dropdown -->
            <li class="nav-item dropdown">
                <a href="#" class="nav-link nav-link-notify" title="Notifications" data-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </a>
                <div class="dropdown-menu dropdown-menu-big dropdown-menu-right" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 35px, 0px);">
                    <?php  $img=url('').'/assets/media/image/image1.png';?>
                    <div class="p-4 text-center" data-background-image="<?php echo $img;?>">
                        <h6 class="mb-1">اعلان ها</h6>
                        <small class="font-size-11 opacity-7">1 اعلان خوانده نشده</small>
                    </div>
                    <div>
                        <ul class="list-group list-group-flush">
                            <li>
                                <a href="#" class="list-group-item d-flex hide-show-toggler">
                                    <div>
                                        <figure class="avatar avatar-sm m-r-15">
                                            <span class="avatar-title bg-success-bright text-success rounded-circle">
                                                <i class="ti-user"></i>
                                            </span>
                                        </figure>
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0 d-flex justify-content-between line-height-25">
                                            یک مشتری ثبت نام کرد
                                            <i title="Make unread" data-toggle="tooltip" class="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                        </p>
                                        <span class="text-muted small d-block mt-1">20 دقیقه پیش</span>
                                    </div>
                                </a>
                            </li>
                            <li class="text-divider small pb-2 pl-3 pt-3">
                                <span>اعلان های قدیمی</span>
                            </li>
                            <li>
                                <a href="#" class="list-group-item d-flex hide-show-toggler">
                                    <div>
                                        <figure class="avatar avatar-sm m-r-15">
                                            <span class="avatar-title bg-warning-bright text-warning rounded-circle">
                                                <i class="ti-package"></i>
                                            </span>
                                        </figure>
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0 d-flex justify-content-between line-height-25">
                                            سفارش جدید دریافت شد
                                            <i title="Mark as read" data-toggle="tooltip" class="hide-show-toggler-item fa fa-check font-size-11"></i>
                                        </p>
                                        <span class="text-muted small d-block mt-1">45 ثانیه پیش</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="list-group-item d-flex align-items-center hide-show-toggler">
                                    <div>
                                        <figure class="avatar avatar-sm m-r-15">
                                            <span class="avatar-title bg-danger-bright text-danger rounded-circle">
                                                <i class="ti-server"></i>
                                            </span>
                                        </figure>
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0 d-flex justify-content-between line-height-25">
                                            سرور به حد نصاب رسید
                                            <i title="Make unread" data-toggle="tooltip" class="hide-show-toggler-item fa fa-check font-size-11"></i>
                                        </p>
                                        <span class="text-muted small d-block mt-1">55 ثانیه پیش</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="list-group-item d-flex align-items-center hide-show-toggler">
                                    <div>
                                        <figure class="avatar avatar-sm m-r-15">
                                            <span class="avatar-title bg-info-bright text-info rounded-circle">
                                                <i class="ti-layers"></i>
                                            </span>
                                        </figure>
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0 d-flex justify-content-between line-height-25">
                                            برنامه ها آماده به روز رسانی هستند
                                            <i title="Make unread" data-toggle="tooltip" class="hide-show-toggler-item fa fa-check font-size-11"></i>
                                        </p>
                                        <span class="text-muted small d-block mt-1">دیروز</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-2 text-right">
                        <ul class="list-inline small">
                            <li class="list-inline-item">
                                <a href="#">علامت خوانده شده به همه</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <!-- end::header notification dropdown -->
        </ul>

        <!-- begin::mobile header toggler -->
        <ul class="navbar-nav d-flex align-items-center">
            <li class="nav-item header-toggler">
                <a href="#" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </a>
            </li>
        </ul>
        <!-- end::mobile header toggler -->
    </div>
    <!-- end::header-right -->
</div>
