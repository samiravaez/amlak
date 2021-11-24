<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="theme-color" content="#555">
        <title>لاراملک</title>

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- App styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
    </head>
    <body id="root">

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
