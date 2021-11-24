$(document).ready(function () {
    var menu_state=(window.innerWidth <= 720)?1:2;
    if (menu_state==2){
        $('.hrd_main_menu').addClass('hrd_main_lg')
    }

    $(window).resize(function () {
        if (menu_state==1 && window.innerWidth > 720){
            menu_state=2
            $('.hrd_toggle_menu').hide()
            $('.hrd_main_menu').show()
            $('.hrd_main_menu').addClass('hrd_main_lg')
            $('ul.hrd_main_menu>li>ul').hide()
        }else if (menu_state==2 && window.innerWidth <= 720){
            menu_state=1
            $('.hrd_toggle_menu').show()
            $('.hrd_main_menu').hide()
            $('.hrd_main_menu').removeClass('hrd_main_lg')
        }
    })

    $('ul.hrd_main_menu>li').click(function (e) {
        e.preventDefault()
        $(this).children('ul').slideToggle()
    })

    $('.hrd_toggle_menu').click(function (e) {
        e.preventDefault()
        $(this).next('.hrd_main_menu').slideToggle()
    })
    $('#empty-search-box').on('mousedown', function (e) {
        e.preventDefault()
    })

    $('#empty-search-box').on('click', function (e) {
        e.stopPropagation()
        e.preventDefault()
        $('#search-input').val('')
        $(this).hide()
    })

    $('#search-input').on('keyup', function () {
        var len = $('#search-input').val().length
        if (len == 0) {
            $('#empty-search-box').hide()
        } else {
            $('#empty-search-box').show()
        }
    })

    $('#search-input').on('blur', function (e) {
        $('#empty-search-box').hide()
    })

    $('#search-input').on('focus', function (e) {
        var len = $('#search-input').val().length
        if (len == 0) {
            $('#empty-search-box').hide()
        } else {
            $('#empty-search-box').show()
        }
    })
    $('#search-input').on('click', function (e) {
        e.stopPropagation()
    })

    $('input[name="hrd_user_submit"]').click(function (e) {
        e.preventDefault()
        var email=$('input[name="hrd_user_email"]').val()
        var phone=$('input[name="hrd_user_phone"]').val()
        var message=[];
        var state=true;
        $('.hrd_main_footer form .success,.hrd_main_footer form .error').remove()
        if (email=='' && phone==''){
            message.push('شماره یا ایمیلی وارد نشده است.')
            state=false
        }
        if (email!='' && !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            message.push('ایمیل وارد شده معتبر نمی باشد.')
            state=false
        }
        if (phone!='' && !phone.match(/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig)){
            message.push('شماره وارد شده معتبر نمی باشد.')
            state=false
        }
        if(message.length==0){
            message.push('اطلاعات با موفقیت ارسال شد.')
            return false;
        }
        var className=(state===true)?'success':'error'
        var html="<ul class='"+className+"'>";
        for (var i = 0; i < message.length; i++) {
            html+='<li>'+message[i]+'</li>'
        }
        html+='</ul>'
        $('.hrd_main_footer .form-group').prepend(html)
    })

    $('.hrd_detail_button').click(function (e) {
        e.preventDefault()
        if($(this).next('.hrd_order_detail').css('display')=='none'){
            $(this).next('.hrd_order_detail').slideDown()
            $(this).find('span').html('بستن جزئیات')
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up')
        }else {
            $(this).next('.hrd_order_detail').slideUp()
            $(this).find('span').html('مشاهده جزئیات')
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down')
        }


    })


    $('.hrd_go_up').fadeOut()
    $('.hrd_go_up').click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1500);
        $(this).fadeOut()
    })
    $(window).scroll(function () {
        if(window.pageYOffset>150){
            $('.hrd_go_up').fadeIn()
            if (!$('.hrd_main_menu_wrapper').is('.fixed-top'))
                $('.hrd_main_menu_wrapper').addClass('fixed-top')
        }else{
            $('.hrd_go_up').fadeOut()
            $('.hrd_main_menu_wrapper').removeClass('fixed-top')
        }
    })

    //    register page
    var sendForm=false;
    $('#hrd_retry_code').prop('disabled', true)
    $('#hrd_submit,#hrd_retry_code').each(function () {
        $(this).click(function (e) {
            if ($(this).is('#hrd_retry_code') || !sendForm){
                e.preventDefault()
            }
            if ($(this).is('#hrd_submit')){
                sendForm=true
            }

            if ($('.hrd_confirm_box').css('display')=='none' || $(this).is('#hrd_retry_code')) {
                $('.hrd_confirm_box').fadeIn()
                $('.hrd_timer_text').fadeIn()
                $('#hrd_submit').html('ثبت نام')
                $('#hrd_retry_code').prop('disabled', true)
                var i = 8;
                $('#hrd_form .hrd_loop').html(i)

                var register_confirm_timer = setInterval(function () {
                    i -= 1
                    if (i > 0){
                        $('#hrd_form .hrd_loop').html(i)
                    } else {
                        clearInterval(register_confirm_timer)
                        $('.hrd_timer_text').fadeOut()
                        $('.hrd_loop').html('')
                        $('#hrd_retry_code').prop('disabled', false)
                    }

                }, 1000);
            }
        })
    })

    $('.hrd_design_front_button').click(function (e) {
        e.preventDefault()
        $('.hrd_design_back').fadeOut(10,function () {
            $('.hrd_design_front').fadeIn()
        })
    })

    $('.hrd_design_back_button').click(function (e) {
        e.preventDefault()
        $('.hrd_design_front').fadeOut(10,function () {
            $('.hrd_design_back').fadeIn()
        })
    })

    $('.hrd_design_zoom_out,.hrd_design_zoom_in').click(function (e) {
        $('.hrd_design_front,.hrd_design_back').toggleClass('w-50')
    })

    $('.hrd_show_list').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('.hrd_gallry_box').removeClass('hrd_gallery_item_list').addClass('hrd_gallery_item_list')
        $('.hrd_gallery_item_list .hrd_white_button').removeClass('hrd_white_button').addClass('hrd_blue_button')
    })
    $('.hrd_show_grid').click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        $('.hrd_gallery_item_list .hrd_blue_button').removeClass('hrd_blue_button').addClass('hrd_white_button')
        $('.hrd_gallry_box').removeClass('hrd_gallery_item_list')
    })

    $('.hrd_profile_img').click(function (e) {
        e.preventDefault()
        $('#hrd_profile_img').trigger('click')
    })
    $('#hrd_profile_img').change(function () {
        var input=this
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.hrd_profile_img img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    })
})