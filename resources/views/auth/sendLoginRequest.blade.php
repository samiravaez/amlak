<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ورود</title>

    <link rel="stylesheet" href="{{asset('assets/front/css/reset.css')}}" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
    <link rel="stylesheet" href="{{asset('assets/front/css/animate.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('assets/css/app.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('assets/front/css/owl.carousel.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('assets/front/css/owl.theme.default.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('assets/front/css/style.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('assets/front/css/responsive.css')}}" type="text/css">
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
    @php
        $sitelogo=\App\Classes\OptionTree::getOption('siteLogo','image');
    @endphp
    @if(isset($sitelogo))
    <!-- logo -->
        <div id="logo">
            <img class="logo h-100" src="{{$sitelogo}}">
        </div>
    <!-- ./ logo -->
    @endif
    <h5>ورود</h5>
    <!-- form -->
    <form action="" method="post">
        @include('layouts.messages')
        @csrf
        <div class="form-group">
            <input type="tel" name="phone" class="form-control text-left" placeholder="تلفن همراه" dir="ltr" required="" autofocus="">
        </div>
        <button type="submit" class="btn btn-primary btn-block request-code">ارسال کد</button>
    </form>
    <!-- ./ form -->
    <div class="login-copyright">طراحی و توسعه CMS توسط <a href="https://www.tabtarh.com" target="_blank">تب طرح</a></div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="{{asset('assets/front/js/main.js')}}"></script>
<script src="{{asset('assets/js/app.js')}}"></script>
<script src="{{asset('assets/front/js/owl.carousel.min.js')}}"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
{{--<script src="{{asset('assets/js/sweet-alert.js')}}"></script>--}}

<script>
    var reset_time=60
    var seconds=reset_time;
    var timer;
    function myFunction() {
        if(seconds < reset_time) { // I want it to say 1:00, not 60
            document.getElementById("timer").innerHTML = serTimer(seconds);
        }
        if (seconds >0 ) { // so it doesn't go to -1
            seconds--;
        } else {
            $('.resert-code').prop('disabled',false)
            clearInterval(timer);
        }
    }

    function serTimer(number){
        var minutes_count = Math.floor(number / 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        }); // 7
        var seconds_count = (number % 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        }); // 30
        return minutes_count+':'+seconds_count
    }


    $(document).ready(function (){
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

        $(document).on('click','.request-code,.resert-code',function (e){
            e.preventDefault();
            var form=$('form').serialize()
            $.ajax({
                type:'get',
                data:form,
                dataType:'json',
                url:"{{route('sendLoginCodeBySms')}}",
                success:function (response){
                    if(response.error){
                        swal({
                            title: response.message,
                            icon: "error",
                            button: "بستن",
                            timer:'2000',
                        });
                    }
                    if(response.success){
                        if($('form').find('input[name="code"]').length==0){
                            var code='<div class="form-group">'
                            code+='<input type="number" name="code" class="form-control" placeholder="کد ارسالی را وارد کنید...">'
                            code+='</div>'
                            $('input[name="phone"]').parent().after(code)
                            $('form').find('.request-code').html('ورود')
                            $('form').find('.request-code').removeClass('request-code').addClass('submit-form')
                        }
                        if($('form').find('.resert-code').length==0){
                            $('.submit-form').after('<div class="mt-2 d-flex justify-content-center align-items-center"><button class="btn btn-outline-light mx-2 resert-code" disabled>ارسال مجدد کد</button><span id="timer">'+serTimer(reset_time)+'</span></div>')
                        }else{
                            $('.resert-code').prop('disabled',true)
                            $('#timer').html(serTimer(reset_time))
                        }
                        seconds=reset_time
                        timer = window.setInterval(function() {
                            myFunction();
                        }, 1000); // every second
                    }
                }
            })
        })

        $(document).on('click','.submit-form',function (){
            $('form').trigger('submit')
        })
    })

</script>
</body>
</html>
