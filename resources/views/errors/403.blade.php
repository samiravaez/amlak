<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>دسترسی غیرمجاز</title>
    <style>
        @import url(../../../public/assets/css/font/primary-iran-yekan.css);

        body {
            background-color: #f1f2f7;
            font-family: 'primary-font';
        }
        .base {
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            flex-direction: column;

            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }
        h1 {
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            /*text-transform: uppercase;*/
            text-align: center;
            font-size: 30vw;
            display: block;
            margin: 0;
            color: #265449;
            position: relative;
            z-index: 0;
            animation: colors .4s ease-in-out forwards;
            animation-delay: 1.7s;
        }
        h1:before {
            content: "U";
            position: absolute;
            top: -9%;
            right: 40%;
            transform: rotate(180deg);
            font-size: 15vw;
            color: #daa532;
            z-index: -1;
            text-align: center;
            animation: lock .2s ease-in-out forwards;
            animation-delay: 1.5s;
        }
        h2 {
            color: #9ae1e2;
            font-size: 4vw;
            margin: 0;
            /*text-transform: uppercase;*/
            text-align: center;
            animation: colors .4s ease-in-out forwards;
            animation-delay: 2s;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }
        h5 {
            font-size: 1.5vw;
            margin: 0;
            text-align: center;
            opacity: 0;
            animation: show 2s ease-in-out forwards;
            color: #7f1f1f;
            animation-delay: 3s;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }

        @keyframes lock {
            50% {
                top: -4%;
            }
            100% {
                top: -6%;
            }
        }

        @keyframes colors {
            50% {
                transform: scale(1.1);
            }
            100% {
                color: #7f1f1f;
            }
        }

        @keyframes show {
            100% {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
<div class="base io">
    <h1 class="io">403</h1>
    <h2>دسترسی غیرمجاز</h2>
    <h5>شما مجاز به دیدن این صفحه نیستید</h5>

</div>

</body>
</html>
