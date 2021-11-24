<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{isset($page_title)?$page_title:'خانه'}}</title>
    <?php $root=url('');?>

    <meta name="x-csrf-token" content="{{csrf_token()}}">

    <script src="<?php echo $root?>/vendors/TinyMCE/tinymce.min.js"></script>
    <script>
        tinymce.init({
            selector: 'textarea',  // change this value according to your HTML
            language: 'fa',
            directionality: 'rtl',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            theme_advanced_default_foreground_color: "red",
            body_class: "mceBlackBody"

        {{--plugins: 'image',--}}
            {{--toolbar: 'undo redo | link image',--}}
            {{--automatic_uploads: false,--}}
            {{--images_upload_url: '{{route('ajax.upload.image')}}'--}}
        });

    </script>

    <link rel="stylesheet" href="<?php echo $root?>/assets/css/bootstrap-iconpicker.min.css" type="text/css">
    <link rel="stylesheet" href="<?php echo $root?>/assets/css/app.css" type="text/css">
    <link rel="stylesheet" href="<?php echo $root?>/vendors/tagsinput/bootstrap-tagsinput.css" type="text/css">
    <link rel="stylesheet" href="<?php echo $root?>/vendors/select2/css/select2.min.css" type="text/css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"/>

    <!-- Plugin styles -->
    <link rel="stylesheet" href="<?php echo $root?>/vendors/bundle.css" type="text/css">
    <!-- DataTable -->
    <link rel="stylesheet" href="<?php echo $root?>/vendors/dataTable/dataTables.min.css" type="text/css">
    <!-- Prism -->
    <link rel="stylesheet" href="<?php echo $root?>/vendors/prism/prism.css" type="text/css">
    <!-- Nestable -->
    <link rel="stylesheet" href="<?php echo $root?>/vendors/nestable/nestable.css" type="text/css">

    <!-- begin::dropzone -->
    <link rel="stylesheet" href="<?php echo $root?>/vendors/dropzone/dropzone.css" type="text/css">
    <!-- end::dropzone -->

    <!-- begin::jquery.steps -->
    <link rel="stylesheet" href="<?php echo $root?>/vendors/form-wizard/jquery.steps.css" type="text/css">
    <!-- end::jquery.steps -->

    <!-- bootstrap4-toggle -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
    <!-- bootstrap4-toggle -->

    <!-- bootstrap-datepicker -->
    <link rel="stylesheet" href="<?php echo $root?>/vendors/datepicker-jalali/bootstrap-datepicker.min.css" type="text/css">

    <!-- map -->
    <link rel="stylesheet" href="https://cdn.map.ir/web-sdk/1.4.2/css/mapp.min.css">
    <link rel="stylesheet" href="https://cdn.map.ir/web-sdk/1.4.2/css/fa/style.css">
    <!-- map -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

    <style>
        #app{
            position: relative;
            width: 100%;
            height: 500px;
        }
        #center-marker {
            width: 42px;
            height: 42px;
            display: block;
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBzdHlsZT0iZmlsbDojMDA5NTQ5OyIgZD0iTTE4LjI0OCw4LjM1N2MwLDIuNDg4LTEuMTAyLDQuNzE5LTIuODQ1LDYuMjMyTDkuOTkyLDIwTDQuNDUsMTQuNDU4Yy0wLjYzLTAuNTczLTEuMTctMS4yNDItMS41OTgtMS45ODRjLTAuMzcyLTAuNjQ1LTAuNjYtMS4zNDQtMC44NDctMi4wODRDMS44NCw5Ljc0LDEuNzUyLDkuMDU4LDEuNzUyLDguMzU3VjguMzRjMC4wMDEtMC43NzYsMC4xMS0xLjUyNywwLjMxMi0yLjIzOWMwLTAuMDAxLDAuMDAxLTAuMDAyLDAuMDAxLTAuMDAzYzAuMDAzLTAuMDEyLDAuMDA3LTAuMDI0LDAuMDEtMC4wMzVjMC43NTYtMi42MTcsMi43NzMtNC42OTksNS4zNS01LjU0NWMwLjAwMiwwLDAuMDAzLTAuMDAxLDAuMDA1LTAuMDAxYzAuMDI0LTAuMDA4LDAuMDQ4LTAuMDE2LDAuMDcxLTAuMDIzYzAuMDExLTAuMDA0LDAuMDIyLTAuMDA3LDAuMDMzLTAuMDExYzAuMDE1LTAuMDA1LDAuMDMtMC4wMDksMC4wNDUtMC4wMTRjMC4wMi0wLjAwNiwwLjA0LTAuMDEyLDAuMDYtMC4wMThDNy42NDUsMC40NSw3LjY1MiwwLjQ0OCw3LjY1OCwwLjQ0NmMwLjcwOS0wLjIxLDEuNDU2LTAuMzI3LDIuMjMtMC4zMzdjMC4wMDcsMCwwLjAxNCwwLDAuMDIyLDBjMC4wMTgsMCwwLjAzNSwwLDAuMDUzLTAuMDAxYzAuMDA0LDAsMC4wMDksMCwwLjAxMywwYzAuMDA4LDAsMC4wMTYsMCwwLjAyNSwwYzAuMDUsMCwwLjEsMC4wMDEsMC4xNSwwLjAwMWMwLjAwMSwwLDAuMDAxLDAsMC4wMDIsMEMxNC42MzcsMC4xOTIsMTguMjQ4LDMuODUyLDE4LjI0OCw4LjM1N3oiLz48Zz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTE2LjM3Myw3LjI4OWMtMC4wNS0wLjA2My0wLjEwNC0wLjEyNC0wLjE2Mi0wLjE4MmMtMC4zMDctMC4zMDctMC42OTItMC41MDgtMS4xMTEtMC41ODVjLTAuMTI3LTAuMDI0LTAuMjU4LTAuMDM2LTAuMzkxLTAuMDM2Yy0wLjA3NywwLTAuMTUzLDAuMDA0LTAuMjI4LDAuMDEyYzAuNTMyLTAuNDM4LDAuODQyLTEuMTI3LDAuNzY0LTEuODYyYy0wLjAzNy0wLjM1MS0wLjE1Ny0wLjY4LTAuMzQ5LTAuOTY0Yy0wLjExNy0wLjE3My0wLjI1OS0wLjMyOS0wLjQyNi0wLjQ2NGMtMC4zNzctMC4zMDUtMC44NS0wLjQ3My0xLjMzMy0wLjQ3M2MtMC4wNzUsMC0wLjE1LDAuMDA0LTAuMjI1LDAuMDEyYy0wLjU4MSwwLjA2MS0xLjA4MywwLjM1Mi0xLjQyNSwwLjc3NHYwYy0wLjA0OSwwLjA2LTAuMDk0LDAuMTIyLTAuMTM2LDAuMTg3Yy0wLjAwMy0wLjI5NC0wLjA2Ni0wLjU4NC0wLjE4NS0wLjg1M2MtMC4xNjEtMC4zNjItMC40MjUtMC42ODMtMC43ODEtMC45MTRjLTAuMzQ2LTAuMjI0LTAuNzQ1LTAuMzQzLTEuMTUzLTAuMzQzYy0wLjE0OSwwLTAuMjk4LDAuMDE2LTAuNDQ1LDAuMDQ3Yy0wLjU1NSwwLjExOC0xLjAzLDAuNDQ1LTEuMzM5LDAuOTJDNy4xMzksMy4wNCw3LjAzNSwzLjYwOCw3LjE1Myw0LjE2M2MwLjAxNiwwLjA3NSwwLjAzNiwwLjE0OCwwLjA1OSwwLjIyQzcuMTgyLDQuMzYsNy4xNTMsNC4zMzcsNy4xMjIsNC4zMTVjLTAuMzY0LTAuMjYtMC43OTEtMC4zOTctMS4yMzYtMC4zOTdjLTAuMjIyLDAtMC40NDIsMC4wMzUtMC42NTUsMC4xMDRjLTAuNTM5LDAuMTc1LTAuOTc4LDAuNTUtMS4yMzYsMS4wNTZDMy44MDcsNS40NDgsMy43MzIsNS44NTcsMy43NzUsNi4yNjFDMy43OSw2LjQwOCwzLjgyMSw2LjU1NCwzLjg2OCw2LjY5OGMwLjE0MSwwLjQzNSwwLjQxMywwLjgwNSwwLjc4NSwxLjA3YzAuMTUsMC4xMDcsMC4zMSwwLjE5MywwLjQ3OCwwLjI1N0M1LDguMDU0LDQuODczLDguMDk2LDQuNzUsOC4xNDhDNC42MjgsOC4yMDEsNC41MTEsOC4yNjUsNC40LDguMzRDNC4wMzcsOC41ODQsMy43NjIsOC45MjksMy42MDYsOS4zMzhjLTAuMTE1LDAuMy0wLjE2LDAuNjE2LTAuMTM2LDAuOTI4YzAuMDE5LDAuMjM4LDAuMDc4LDAuNDczLDAuMTc4LDAuNjk3YzAuMjMsMC41MTgsMC42NDksMC45MTUsMS4xNzksMS4xMTljMC4yNDQsMC4wOTQsMC41LDAuMTQxLDAuNzU5LDAuMTQxYzAuMzc3LDAsMC43NDMtMC4wOTksMS4wNjgtMC4yODhjLTAuMDcsMC4xNDEtMC4xMjQsMC4yODgtMC4xNjIsMC40NGMtMC4wOTYsMC4zODgtMC4wODQsMC44MDIsMC4wNSwxLjE5NWMwLjA0NCwwLjEyOSwwLjEwMSwwLjI1NSwwLjE3MSwwLjM3N2MwLjI4NCwwLjQ5MSwwLjc0MiwwLjg0MywxLjI4OSwwLjk4OWMwLjE4MSwwLjA0OCwwLjM2NywwLjA3MywwLjU1MiwwLjA3M2MwLjM3LDAsMC43MzYtMC4wOTksMS4wNTktMC4yODVjMC41NzgtMC4zMzQsMC45NC0wLjksMS4wMzYtMS41MTNjMC4wNTMsMC4xMTcsMC4xMTcsMC4yMjksMC4xOSwwLjMzNWMwLjAxMywwLjAxOSwwLjAyNywwLjAzOCwwLjA0MSwwLjA1N2MwLjMyLDAuNDMsMC44MDEsMC43NCwxLjM3LDAuODNjMC4xMTEsMC4wMTgsMC4yMjQsMC4wMjYsMC4zMzUsMC4wMjZjMC40NDksMCwwLjg3OS0wLjE0LDEuMjQ1LTAuNDA2YzAuNDU5LTAuMzMzLDAuNzYtMC44MjUsMC44NDktMS4zODZjMC4wOTMtMC41OTEtMC4wNTItMS4xNzQtMC4zNzItMS42MjZjLTAuMDMyLTAuMDQ2LTAuMDY2LTAuMDktMC4xMDItMC4xMzNjLTAuMTI4LTAuMTU0LTAuMjc5LTAuMjg5LTAuNDQ4LTAuNGMwLjI5MiwwLjE0NiwwLjYxNSwwLjIyMywwLjk1MSwwLjIyM2MwLjU2OCwwLDEuMTAxLTAuMjIxLDEuNTAxLTAuNjIxYzAuNDAxLTAuNDAxLDAuNjIyLTAuOTM1LDAuNjIyLTEuNTAyQzE2LjgzMyw4LjEyNCwxNi42NzEsNy42NjMsMTYuMzczLDcuMjg5eiBNMTQuNzEsNy4wMjZjMC40MDUsMCwwLjgxMSwwLjE1NCwxLjEyLDAuNDYzYzAuMDYyLDAuMDYyLDAuMTE4LDAuMTI4LDAuMTY4LDAuMTk4YzAuMTkyLDAuMjY3LDAuMjk2LDAuNTg2LDAuMjk2LDAuOTIyYzAsMC40MjMtMC4xNjUsMC44MjEtMC40NjQsMS4xMmMtMC4zMDksMC4zMDktMC43MTQsMC40NjMtMS4xMiwwLjQ2M2MtMC40MDUsMC0wLjgxMS0wLjE1NC0xLjExOS0wLjQ2M2wtMC4zOTItMC4zOTJsLTAuNzY5LDAuNzY5Yy0wLjA0MywwLjA0NC0wLjA5MywwLjA3Ny0wLjE0NSwwLjEwMmMtMC4xMDgsMC4wNi0wLjIyOCwwLjA4OS0wLjM0OSwwLjA4OWMtMC4xNiwwLTAuMzItMC4wNTMtMC40NTItMC4xNThjLTAuMDIxLTAuMDE3LTAuMDQxLTAuMDM1LTAuMDYxLTAuMDU1bC0wLjIxMi0wLjIxMmwwLjQ1OC0wLjQ1OGMwLjAxLTAuMDEyLDAuMDIxLTAuMDI0LDAuMDMzLTAuMDM2TDEyLjQsOC42NzlsMC43MTgtMC43MThsMC40NzItMC40NzJDMTMuODk5LDcuMTgxLDE0LjMwNCw3LjAyNiwxNC43MSw3LjAyNnogTTcuOTIyLDUuMzk2TDcuOTExLDUuMzk5TDcuOTA3LDUuMzg2YzAtMC4wMDEtMC4wMDEtMC4wMDItMC4wMDEtMC4wMDNDNy45MTEsNS4zODcsNy45MTcsNS4zOTEsNy45MjIsNS4zOTZ6IE0xMi45NjksMy4yODNjMC4wNTYtMC4wMDYsMC4xMTItMC4wMDksMC4xNjgtMC4wMDljMC4zNjEsMCwwLjcwOSwwLjEyMiwwLjk5MywwLjM1M2MwLjE0NiwwLjExOCwwLjI2NywwLjI1OCwwLjM2MSwwLjQxNGMwLjExOCwwLjE5NiwwLjE5MywwLjQxNywwLjIxNywwLjY1MWMwLjA5MSwwLjg2OC0wLjU0MSwxLjY0OS0xLjQwOSwxLjc0TDEyLjc0OSw2LjQ5bDAuMTE0LDEuMDgxYzAuMDA2LDAuMDYxLDAuMDAyLDAuMTIxLTAuMDEyLDAuMTc3Yy0wLjA1NiwwLjMwOS0wLjMxLDAuNTU4LTAuNjM4LDAuNTkybC0wLjEwOCwwLjAxMWwtMC4xODksMC4wMmwtMC4wNjgtMC42NDVjLTAuMDAzLTAuMDE2LTAuMDA2LTAuMDMyLTAuMDA3LTAuMDQ4TDExLjU2LDUuMDIzQzExLjQ2OSw0LjE1NSwxMi4xMDEsMy4zNzUsMTIuOTY5LDMuMjgzeiBNMTMuMzYsNi45NjljLTAuMDA1LDAuMDA1LTAuMDExLDAuMDA5LTAuMDE2LDAuMDE0bC0wLjAwMS0wLjAxMmwwLjAxNC0wLjAwMUMxMy4zNTgsNi45NjksMTMuMzU5LDYuOTY5LDEzLjM2LDYuOTY5eiBNMTEuMjk2LDUuNzYxYzAuMDcsMC4wODEsMC4xMiwwLjE3NiwwLjE0OCwwLjI3N2MwLjA1NCwwLjE5NCwwLjAyOCwwLjQwOS0wLjA5LDAuNTkxbC0wLjE2MywwLjI1MWwtMC41NDMtMC4zNTNjLTAuMDE0LTAuMDA3LTAuMDI4LTAuMDE2LTAuMDQyLTAuMDI1TDguMzY2LDUuMDQ5QzguMTA2LDQuODgsNy45MTEsNC42NDYsNy43OTEsNC4zODJjLTAuMjE4LTAuNDc3LTAuMTk2LTEuMDUyLDAuMTEtMS41MjNjMC4yMy0wLjM1NSwwLjU4NS0wLjU5OCwwLjk5OC0wLjY4NkM5LjAxLDIuMTQ5LDkuMTIxLDIuMTM4LDkuMjMyLDIuMTM4YzAuMzAzLDAsMC41OTksMC4wODcsMC44NTksMC4yNTZjMC4yOTIsMC4xOSwwLjUwMSwwLjQ2MSwwLjYxNiwwLjc2NGMwLjE3MywwLjQ1NiwwLjEzNCwwLjk4Ni0wLjE1MSwxLjQyNmwtMC4zMDIsMC40NjVsMC4yODksMC4xODhsMC42MjIsMC40MDRDMTEuMjE4LDUuNjc0LDExLjI2MSw1LjcxNSwxMS4yOTYsNS43NjF6IE0xMS4wMDksNC44NzhjMC4wMDEtMC4wMDEsMC4wMDEtMC4wMDIsMC4wMDItMC4wMDNjMCwwLjAwNywwLDAuMDE0LDAsMC4wMjFsLTAuMDEtMC4wMDZMMTEuMDA5LDQuODc4eiBNNC40NzcsNS4zMjNjMC4xOTItMC4zNzcsMC41MTktMC42NTYsMC45MjEtMC43ODdDNS41Niw0LjQ4NCw1LjcyNCw0LjQ1OSw1Ljg4Niw0LjQ1OWMwLjY2OCwwLDEuMjksMC40MjYsMS41MDcsMS4wOTRMNy41NjQsNi4wOGwxLjAzNC0wLjMzNmMwLjA1My0wLjAxNywwLjEwNi0wLjAyNSwwLjE1OC0wLjAyNWMwLjAwNiwwLDAuMDEyLDAsMC4wMTcsMGMwLjAwNywwLDAuMDE1LDAsMC4wMjIsMGMwLjMwNiwwLDAuNTksMC4xOTUsMC42OSwwLjUwMmwwLjAzOCwwLjExN2wwLjA1NCwwLjE2N2wtMC42MTYsMC4yYy0wLjAxNSwwLjAwNi0wLjAzLDAuMDEyLTAuMDQ2LDAuMDE3bC0yLjU0LDAuODI1QzYuMjE0LDcuNiw2LjA1LDcuNjI1LDUuODg4LDcuNjI1Yy0wLjY2NywwLTEuMjktMC40MjYtMS41MDctMS4wOTRDNC4zNTksNi40Niw0LjM0MSw2LjM4OCw0LjMyOCw2LjMxNkM0LjI2OCw1Ljk3OSw0LjMxOSw1LjYzMyw0LjQ3Nyw1LjMyM3ogTTYuMzY2LDguMTExTDYuMzYyLDguMTIyTDYuMzQ5LDguMTE3QzYuMzQ4LDguMTE2LDYuMzQ2LDguMTE2LDYuMzQ1LDguMTE1QzYuMzUyLDguMTE0LDYuMzU5LDguMTEyLDYuMzY2LDguMTExeiBNNC4xMSw5LjUzMmMwLjI0MS0wLjYyOSwwLjg0My0xLjAxNiwxLjQ4LTEuMDE2YzAuMTg4LDAsMC4zNzksMC4wMzQsMC41NjUsMC4xMDVMNi42NzMsOC44MmwwLjM4OS0xLjAxNWMwLjAyLTAuMDUsMC4wNDYtMC4wOTYsMC4wNzgtMC4xMzZjMC4wMDUtMC4wMDYsMC4wMDktMC4wMTEsMC4wMTQtMC4wMTZjMC4xMzctMC4xODEsMC4zNTMtMC4yODYsMC41NzctMC4yODZjMC4wNzksMCwwLjE2LDAuMDEzLDAuMjM5LDAuMDQxYzAuMDA3LDAuMDAyLDAuMDE0LDAuMDA1LDAuMDIxLDAuMDA4TDguMjcsNy41MjJMOC4xNzMsNy43NzVMOC4wMzgsOC4xMjdDOC4wMzQsOC4xNDIsOC4wMjksOC4xNTgsOC4wMjMsOC4xNzNsLTAuOTU3LDIuNDkzYy0wLjI0MSwwLjYyOS0wLjg0MywxLjAxNi0xLjQ4LDEuMDE2Yy0wLjE4OCwwLTAuMzgtMC4wMzQtMC41NjYtMC4xMDVjLTAuMzk1LTAuMTUxLTAuNzA3LTAuNDQ4LTAuODc5LTAuODM0Yy0wLjA1OS0wLjEzMy0wLjA5OS0wLjI3MS0wLjEyLTAuNDExQzMuOTgxLDEwLjA2NSw0LjAxLDkuNzksNC4xMSw5LjUzMnogTTcuNTAzLDExLjAzOWwtMC4wMTIsMC4wMDdjLTAuMDAxLDAuMDAxLTAuMDAyLDAuMDAxLTAuMDAzLDAuMDAyYzAuMDAzLTAuMDA2LDAuMDA2LTAuMDEzLDAuMDEtMC4wMTlMNy41MDMsMTEuMDM5eiBNNy43NjEsMTEuNTE0bDAuNDMzLTAuMjVsMC4wNDctMC4wMjdsLTAuNTEtMC44ODNsLTAuMDM0LTAuMDU4Yy0wLjAzMS0wLjA1My0wLjA1MS0wLjEwOS0wLjA2MS0wLjE2N0M3LjYxLDEwLjAyMiw3LjYwOSw5LjkxMiw3LjYzMSw5LjgwN2MwLjAxNy0wLjA4LDAuMDQ3LTAuMTU4LDAuMDktMC4yMjhjMCwwLDAsMCwwLDBjMC4wNjEtMC4xLDAuMTQ4LTAuMTg3LDAuMjU3LTAuMjVsMC4yNTktMC4xNUw4LjU2Miw5Ljc0QzguNTcxLDkuNzUzLDguNTgsOS43NjcsOC41ODgsOS43ODFsMS4zMzUsMi4zMTNjMC4wMzIsMC4wNTYsMC4wNjEsMC4xMTMsMC4wODUsMC4xNzFjMC4zMSwwLjcyNiwwLjAzNSwxLjU4Ny0wLjY2NSwxLjk5MmMtMC4yNDQsMC4xNDEtMC41MTUsMC4yMTMtMC43ODksMC4yMTNjLTAuMTM3LDAtMC4yNzYtMC4wMTgtMC40MTItMC4wNTVjLTAuNDA4LTAuMTA5LTAuNzUtMC4zNzEtMC45NjEtMC43MzhjLTAuMDM0LTAuMDU5LTAuMDY0LTAuMTE4LTAuMDg5LTAuMTc5QzYuNzg4LDEyLjc3Myw3LjA2MywxMS45MTcsNy43NjEsMTEuNTE0eiBNMTAuNDg2LDEyLjAwMmMwLDAuMDAxLDAsMC4wMDMtMC4wMDEsMC4wMDRjLTAuMDAzLTAuMDA3LTAuMDA2LTAuMDEzLTAuMDA5LTAuMDJsMC4wMTIsMC4wMDJMMTAuNDg2LDEyLjAwMnogTTEzLjkxNiwxMS40ODFjMC4yMDIsMC4zMTUsMC4yOTQsMC43MDMsMC4yMzEsMS4xMDFjLTAuMDY2LDAuNDE3LTAuMjkxLDAuNzg1LTAuNjMzLDEuMDMzYy0wLjI3MywwLjE5OS0wLjU5NiwwLjMwMy0wLjkyNywwLjMwM2MtMC4wODMsMC0wLjE2Ny0wLjAwNy0wLjI1MS0wLjAyYy0wLjM5MS0wLjA2Mi0wLjcyNS0wLjI2My0wLjk2Mi0wLjU0NGMtMC4yODYtMC4zNC0wLjQyOC0wLjc5Ni0wLjM1NC0xLjI2OGwwLjA0Mi0wLjI2NGwwLjA0NS0wLjI4M2wtMS4wNzQtMC4xN2MtMC4wNjEtMC4wMS0wLjExNy0wLjAyOS0wLjE2OC0wLjA1OGMtMC4wOTItMC4wNDQtMC4xNzMtMC4xMDYtMC4yMzgtMC4xODFjLTAuMTM1LTAuMTU2LTAuMjAzLTAuMzY5LTAuMTY5LTAuNTg5bDAuMDQ3LTAuMjk2bDAuNjQsMC4xMDFjMC4wMTYsMC4wMDEsMC4wMzIsMC4wMDMsMC4wNDksMC4wMDVsMi42MzcsMC40MThDMTMuMjk1LDEwLjg0NCwxMy42OCwxMS4xMTMsMTMuOTE2LDExLjQ4MXoiLz48Zz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTkuMDk3LDEyLjc4MmMtMC4wMTEtMC4wNi0wLjAzMi0wLjExOC0wLjA2NS0wLjE3NGwtMC4yNzctMC40OGwtMC40OCwwLjI3N2MtMC4yNjUsMC4xNTMtMC4zNTYsMC40OTMtMC4yMDMsMC43NTdjMC4wMTUsMC4wMjUsMC4wMzEsMC4wNDksMC4wNDksMC4wNzJjMC4wNzMsMC4wOTEsMC4xNzMsMC4xNTYsMC4yODcsMC4xODdjMC4wNDgsMC4wMTMsMC4wOTYsMC4wMTksMC4xNDQsMC4wMTljMC4wOTYsMCwwLjE5MS0wLjAyNSwwLjI3Ni0wLjA3NEM5LjAzOSwxMy4yNDQsOS4xMzksMTMuMDA3LDkuMDk3LDEyLjc4MnogTTguNTY2LDEyLjg4OWMtMC4wMDIsMC4wMDYtMC4wMDUsMC4wMDgtMC4wMDYsMC4wMDljLTAuMDA0LDAuMDAyLTAuMDA1LDAuMDAyLTAuMDA2LDAuMDAyYy0wLjAwMSwwLTAuMDAzLDAtMC4wMDUtMC4wMDFjLTAuMDA1LTAuMDAxLTAuMDA2LTAuMDAyLTAuMDA5LTAuMDA3Yy0wLjAwMS0wLjAwMi0wLjAwMy0wLjAwNS0wLjAwMS0wLjAxMWMwLjAwMi0wLjAwNiwwLjAwNS0wLjAwOCwwLjAwNi0wLjAwOWwwLjAxMi0wLjAwN2wwLjAwNywwLjAxMkM4LjU2NiwxMi44OCw4LjU2NywxMi44ODMsOC41NjYsMTIuODg5eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNS43ODYsOS41ODJDNS43MjEsOS41NTYsNS42NTQsOS41NDUsNS41ODgsOS41NDVDNS4zNjUsOS41NDUsNS4xNTUsOS42OCw1LjA3LDkuOWMtMC4wNTMsMC4xMzgtMC4wNDksMC4yODksMC4wMTEsMC40MjRjMC4wMDEsMC4wMDIsMC4wMDIsMC4wMDQsMC4wMDMsMC4wMDZjMC4wNjEsMC4xMzIsMC4xNjksMC4yMzQsMC4zMDUsMC4yODZjMC4wNjUsMC4wMjUsMC4xMzIsMC4wMzcsMC4xOTgsMC4wMzdjMC4yMjMsMCwwLjQzNC0wLjEzNSwwLjUxOC0wLjM1NmwwLjA5OC0wLjI1NUw2LjMwNCw5Ljc4TDUuNzg2LDkuNTgyeiBNNS42MDEsMTAuMTA0Yy0wLjAwMywwLjAwOS0wLjAxNCwwLjAwOS0wLjAxNCwwLjAwOWMtMC4wMDEsMC0wLjAwMiwwLTAuMDA1LTAuMDAxYy0wLjAwNS0wLjAwMi0wLjAwNi0wLjAwMy0wLjAwOC0wLjAwOGMtMC4wMDItMC4wMDQtMC4wMDItMC4wMDYsMC0wLjAxMWMwLjAwMy0wLjAwOSwwLjAxNC0wLjAwOSwwLjAxNC0wLjAwOWMwLjAwMSwwLDAuMDAyLDAsMC4wMDUsMC4wMDFsMC4wMTMsMC4wMDVMNS42MDEsMTAuMTA0eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTUuMjM2LDguNDM0Yy0wLjAyNy0wLjA4MS0wLjA3Mi0wLjE1NS0wLjEzNC0wLjIxN2MtMC4xMDgtMC4xMDgtMC4yNS0wLjE2Mi0wLjM5Mi0wLjE2MnMtMC4yODQsMC4wNTQtMC4zOTIsMC4xNjJsLTAuMzkyLDAuMzkybDAuMzA4LDAuMzA4bDAuMDg0LDAuMDg0YzAuMTA4LDAuMTA4LDAuMjUsMC4xNjIsMC4zOTIsMC4xNjJzMC4yODQtMC4wNTQsMC4zOTItMC4xNjJjMC4xMDUtMC4xMDUsMC4xNjItMC4yNDQsMC4xNjItMC4zOTJDMTUuMjY0LDguNTQ4LDE1LjI1NSw4LjQ4OSwxNS4yMzYsOC40MzR6IE0xNC43Miw4LjYxOWMtMC4wMDEsMC4wMDItMC4wMDQsMC4wMDQtMC4wMSwwLjAwNFMxNC43MDEsOC42MiwxNC43LDguNjE5bC0wLjAxLTAuMDFsMC4wMS0wLjAxYzAuMDAxLTAuMDAxLDAuMDA0LTAuMDA0LDAuMDEtMC4wMDRzMC4wMDksMC4wMDIsMC4wMSwwLjAwNGMwLjAwMywwLjAwMywwLjAwNCwwLjAwNSwwLjAwNCwwLjAxQzE0LjcyNCw4LjYxNCwxNC43MjMsOC42MTUsMTQuNzIsOC42MTl6Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02LjQxNCw1Ljg3MUM2LjMzOSw1LjYzNyw2LjEyMSw1LjQ4Nyw1Ljg4Nyw1LjQ4N2MtMC4wNTcsMC0wLjExNCwwLjAwOS0wLjE3MSwwLjAyN0M1LjU3NSw1LjU2MSw1LjQ2MSw1LjY1OCw1LjM5Myw1Ljc5QzUuMzI2LDUuOTIyLDUuMzE0LDYuMDcyLDUuMzYsNi4yMTNDNS4zNjksNi4yNCw1LjM3OSw2LjI2NSw1LjM5Miw2LjI5YzAuMDk0LDAuMTksMC4yODksMC4zMDYsMC40OTYsMC4zMDZjMC4wNTcsMCwwLjExNC0wLjAwOSwwLjE3MS0wLjAyN2wwLjUtMC4xNjJsMC4wMjctMC4wMDlMNi40MTQsNS44NzF6IE01Ljg5Miw2LjA1NUM1Ljg5LDYuMDU2LDUuODg4LDYuMDU2LDUuODg4LDYuMDU2YzAsMC0wLjAxMS0wLjAwMS0wLjAxNC0wLjAxQzUuODcyLDYuMDQyLDUuODczLDYuMDQsNS44NzUsNi4wMzVDNS44NzcsNi4wMzEsNS44NzgsNi4wMyw1Ljg4Myw2LjAyOGMwLjAwMi0wLjAwMSwwLjAwMy0wLjAwMSwwLjAwNC0wLjAwMWMwLDAsMC4wMTEsMC4wMDEsMC4wMTQsMC4wMWwwLjAwNCwwLjAxM0w1Ljg5Miw2LjA1NXoiLz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTkuNzgxLDMuNjc3QzkuNzY4LDMuNTExLDkuNjgsMy4zNTQsOS41MzEsMy4yNTZDOS40NCwzLjE5Nyw5LjMzNiwzLjE2Nyw5LjIzLDMuMTY3Yy0wLjAzOSwwLTAuMDc4LDAuMDA0LTAuMTE2LDAuMDEyYy0wLjE0NSwwLjAzMS0wLjI2OSwwLjExNi0wLjM1LDAuMjRDOC42MjUsMy42MzQsOC42NTMsMy45MDgsOC44MTUsNC4wOWMwLjAzMiwwLjAzNiwwLjA3LDAuMDY5LDAuMTEyLDAuMDk2bDAuNDY1LDAuMzAybDAuMzAyLTAuNDY1QzkuNzYzLDMuOTE3LDkuNzksMy43OTUsOS43ODEsMy42Nzd6IE05LjI0MSwzLjcyOUw5LjIzMywzLjc0MUw5LjIyMSwzLjczM0M5LjIxOSwzLjczMiw5LjIxNiwzLjczLDkuMjE1LDMuNzI0QzkuMjE0LDMuNzE4LDkuMjE2LDMuNzE1LDkuMjE3LDMuNzE0QzkuMjE5LDMuNzEsOS4yMjEsMy43MDgsOS4yMjYsMy43MDhDOS4yMjgsMy43MDcsOS4yMjksMy43MDcsOS4yMywzLjcwN2MwLjAwMSwwLDAuMDAzLDAsMC4wMDcsMC4wMDJjMC4wMDIsMC4wMDEsMC4wMDUsMC4wMDMsMC4wMDYsMC4wMDlDOS4yNDQsMy43MjUsOS4yNDIsMy43MjcsOS4yNDEsMy43Mjl6Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xMy4xMTQsMTIuMTc1Yy0wLjA1OS0wLjE5Ny0wLjIyNy0wLjM1NC0wLjQ0NC0wLjM4OEwxMi4xMjIsMTEuN2wtMC4wODcsMC41NDdjLTAuMDM1LDAuMjIyLDAuMDY3LDAuNDM1LDAuMjQ0LDAuNTVjMC4wNjQsMC4wNDIsMC4xMzcsMC4wNzEsMC4yMTcsMC4wODRjMC4wMjksMC4wMDUsMC4wNTksMC4wMDcsMC4wODgsMC4wMDdjMC4xMTYsMCwwLjIyOS0wLjAzNiwwLjMyNS0wLjEwNmMwLjEyLTAuMDg3LDAuMTk5LTAuMjE2LDAuMjIyLTAuMzYyQzEzLjE0NCwxMi4zMzYsMTMuMTM3LDEyLjI1MywxMy4xMTQsMTIuMTc1eiBNMTIuNTkxLDEyLjM0NmMtMC4wMDQsMC4wMDMtMC4wMDYsMC4wMDMtMC4wMDcsMC4wMDNjLTAuMDAxLDAtMC4wMDIsMC0wLjAwMywwYy0wLjAwNy0wLjAwMS0wLjAxMy0wLjAwOS0wLjAxMi0wLjAxNmwwLjAwMi0wLjAxNGwwLjAxNCwwLjAwMmMwLjAwNywwLjAwMSwwLjAxMywwLjAwOSwwLjAxMiwwLjAxNkMxMi41OTYsMTIuMzQxLDEyLjU5NSwxMi4zNDMsMTIuNTkxLDEyLjM0NnoiLz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTEzLjY4Niw0LjhjLTAuMDAzLTAuMDI2LTAuMDA3LTAuMDUyLTAuMDE0LTAuMDc3Yy0wLjAyOS0wLjExNi0wLjA5NC0wLjIxOS0wLjE4OS0wLjI5NmMtMC4xLTAuMDgxLTAuMjIxLTAuMTI0LTAuMzQ4LTAuMTI0Yy0wLjAyLDAtMC4wMzksMC4wMDEtMC4wNTksMC4wMDNjLTAuMzA0LDAuMDMyLTAuNTI1LDAuMzA1LTAuNDkzLDAuNjA5bDAuMDU4LDAuNTUxbDAuMjA4LTAuMDIybDAuMzQ0LTAuMDM2QzEzLjQ5Nyw1LjM3NywxMy43MTgsNS4xMDQsMTMuNjg2LDQuOHogTTEzLjE0Niw0Ljg2N2MtMC4wMDQsMC4wMDUtMC4wMDcsMC4wMDUtMC4wMDksMC4wMDVsLTAuMDE0LDAuMDAxbC0wLjAwMS0wLjAxNGMwLTAuMDAyLTAuMDAxLTAuMDA2LDAuMDAzLTAuMDFjMC4wMDQtMC4wMDUsMC4wMDctMC4wMDUsMC4wMDktMC4wMDVoMC4wMDNjMC4wMDIsMCwwLjAwNCwwLDAuMDA4LDAuMDAzYzAuMDA0LDAuMDAzLDAuMDA1LDAuMDA1LDAuMDA1LDAuMDA5QzEzLjE0OSw0Ljg1OCwxMy4xNSw0Ljg2MiwxMy4xNDYsNC44Njd6Ii8+PC9nPjwvZz48L2c+PC9zdmc+);
            background-repeat: no-repeat;
            position: absolute;
            z-index: 9999999999;
            left: 4.5%;
            transform: translate(-50%, -42px);
            top: 50.3%;
            right: 0;
            right: 0;
            /* outline: none; */
            /* border: none; */
            cursor: pointer;
        }

        #center-marker.hide {
            display: none;
        }
    </style>

</head>
<body class="sticky-footer">
    @include('layouts.navigation')
    <div id="main">
        @include('admin.panel_header')
        <main class="main-content">
            @yield('content')
            @include('admin.panel_footer')
        </main>
    </div>

    <div class="modal fade" id="tabtarh-lib" tabindex="-1" role="dialog" aria-labelledby="tabtarh-lib-label" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="tabtarh-lib-label">افزودن مدیا</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" id="upload-tab" data-toggle="tab" href="#upload" role="tab" aria-controls="home" aria-selected="true">بارگذاری پرونده</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" id="select-tab" data-toggle="tab" href="#select12-tab" role="tab" aria-controls="profile" aria-selected="false">انتخاب پرونده</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade" id="upload" role="tabpanel" aria-labelledby="home-tab">
                        <div class="container">
                            <div class="row">
                                <div class="dropzone w-100 my-2" id="uploadFile"></div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade show active" id="select12-tab" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="row py-2" id="checkedMediaForm">
                            @include("admin.lib_files")
                        </div>
                    </div>
                    <a href="" class="btn btn-outline-secondary float-right" id="addMedia">افزودن</a>
                </div>
            </div>
        </div>
      </div>
    </div>

    <script src="<?php echo $root?>/vendors/bundle.js"></script>

    <script>
        //  Form Validation
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    </script>

    <!-- begin::map -->
    <script type="text/javascript" src="https://cdn.map.ir/web-sdk/1.4.2/js/mapp.env.js"></script>
    <script type="text/javascript" src="https://cdn.map.ir/web-sdk/1.4.2/js/mapp.min.js"></script>
    <script type="text/javascript" src="<?php echo $root?>/assets/js/hack.js"></script>
    <!-- end::map -->

    <script>
        var root = "<?php echo $root ?>";
    </script>
    <script src="<?php echo $root?>/assets/js/admin.js"></script>

    <!-- Prism -->
    <script src="<?php echo $root?>/vendors/prism/prism.js"></script>

    <!-- App scripts -->
    <script src="<?php echo $root?>/assets/js/app.js"></script>
    <script src="<?php echo $root?>/assets/js/bootstrap-iconpicker.bundle.min.js"></script>
    <!-- Javascript -->
    <script src="<?php echo $root?>/vendors/tagsinput/bootstrap-tagsinput.js"></script>
    <script src="<?php echo $root?>/vendors/select2/js/select2.min.js"></script>
    <!-- begin::dropzone -->
    <script src="<?php echo $root?>/vendors/dropzone/dropzone.js"></script>
    <!-- end::dropzone -->

    <!-- DataTable -->
    <script src="<?php echo $root ?>/vendors/dataTable/jquery.dataTables.min.js"></script>
    <script src="<?php echo $root ?>/vendors/dataTable/dataTables.bootstrap4.min.js"></script>
    <script src="<?php echo $root ?>/vendors/dataTable/dataTables.responsive.min.js"></script>
    <script src="<?php echo $root ?>/assets/js/examples/datatable.js"></script>

    <!-- begin::jquery.steps -->
    <script src="<?php echo $root?>/vendors/form-wizard/jquery.steps.min.js"></script>
    <!-- end::jquery.steps -->

    <script>
        // function getEditorContents(){
        //     var html = document.getElementsByClassName("fr-view").innerHTML;
        //     document.getElementById("editorTextarea").value = html;
        //     return true;
        // }
        // getEditorContents();


        $('.select2').select2({dir: "rtl"})

        $('.add-to-menu.add-post-to-menu').click(function (e){
            e.preventDefault()
            var inputs=$(this).parent().parent().find('input:checked')
            var selects=[]
            inputs.each(function (){
                selects.push($(this).val())
            })
            $.ajax({
                type:'post',
                url:"{{route('ajax.addPostsToMenu')}}",
                data:{selects},
                dataType:'json',
                success:function (response){
                    if (response.length>0){
                        for (var i=0;i<response.length;i++){
                            var detailBox='                                                <div class="list-detail">\n' +
                                '                                                    <div class="form-group">\n' +
                                '                                                      <label for="list-title">عنوان</label>\n' +
                                '                                                      <input type="text" class="form-control" name="list-title" value="'+response[i].name+'">\n' +
                                '                                                    </div>\n' +
                                '                                                    <div class="form-group">\n' +
                                '                                                      <label for="list-class">کلاس اختیاری</label>\n' +
                                '                                                      <input type="text" class="form-control" name="list-class" value="'+response[i].class+'">\n' +
                                '                                                    </div>\n' +
                                '                                                    <div class="form-group">\n' +
                                '                                                        <button href="" class="remove btn btn-outline-danger">پاک کردن</button>\n' +
                                '                                                        <button href="" class="save btn btn-outline-info">ذخیره کردن</button>\n' +
                                '                                                    </div>\n' +
                                '                                                </div>';
                            $('#nestable1>.dd-list').append('<li class="dd-item dd3-item" data-id="'+response[i].id+'" data-type="'+response[i].type+'" data-name="'+response[i].name+'" data-class="'+response[i].class+'"><div class="dd-handle dd3-handle"></div><div class="dd3-content">'+response[i].name+'</div>'+detailBox+' </li>')
                        }
                        // console.log($('#nestable1').nestable('serialize'));
                        inputs.prop( "checked", false )
                    }
                },
                error:function (){

                }
            })
        })

        $('.add-to-menu.add-term-to-menu').click(function (e){
            e.preventDefault()
            var inputs=$(this).parent().parent().find('input:checked')
            var selects=[]
            inputs.each(function (){
                selects.push($(this).val())
            })
            $.ajax({
                type:'post',
                url:"{{route('ajax.addTermsToMenu')}}",
                data:{selects},
                dataType:'json',
                success:function (response){
                    if (response.length>0){
                        var html="";
                        for (var i=0;i<response.length-1;i++){
                            next=response[i+1]
                            var detailBox='                                                <div class="list-detail">\n' +
                                '                                                    <div class="form-group">\n' +
                                '                                                      <label for="list-title">عنوان</label>\n' +
                                '                                                      <input type="text" class="form-control" name="list-title" value="'+response[i].name+'">\n' +
                                '                                                    </div>\n' +
                                '                                                    <div class="form-group">\n' +
                                '                                                      <label for="list-class">کلاس اختیاری</label>\n' +
                                '                                                      <input type="text" class="form-control" name="list-class" value="'+response[i].class+'">\n' +
                                '                                                    </div>\n' +
                                '                                                    <div class="form-group">\n' +
                                '                                                        <button href="" class="remove btn btn-outline-danger">پاک کردن</button>\n' +
                                '                                                        <button href="" class="save btn btn-outline-info">ذخیره کردن</button>\n' +
                                '                                                    </div>\n' +
                                '                                                </div>';
                            if (next.level==response[i].level)
                                // $('#nestable1>.dd-list').append('<li class="dd-item dd3-item" data-id="'+response[i].id+'" data-type="'+response[i].type+'" data-name="'+response[i].name+'" data-slug="'+response[i].slug+'"><div class="dd-handle dd3-handle"></div><div class="dd3-content">'+response[i].name+'</div> </li>')
                                html+='<li class="dd-item dd3-item" data-id="'+response[i].id+'" data-type="'+response[i].type+'" data-name="'+response[i].name+'" data-class="'+response[i].class+'"><div class="dd-handle dd3-handle"></div><div class="dd3-content">'+response[i].name+'</div>'+detailBox+' </li>'
                            if (next.level>response[i].level)
                                // $('#nestable1>.dd-list').append('<li class="dd-item dd3-item" data-id="'+response[i].id+'" data-type="'+response[i].type+'" data-name="'+response[i].name+'" data-slug="'+response[i].slug+'"><div class="dd-handle dd3-handle"></div><div class="dd3-content">'+response[i].name+'</div> <ol class="dd-list">')
                                html+='<li class="dd-item dd3-item" data-id="'+response[i].id+'" data-type="'+response[i].type+'" data-name="'+response[i].name+'" data-class="'+response[i].class+'"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">Expand</button><div class="dd-handle dd3-handle"></div><div class="dd3-content">'+response[i].name+'</div>'+detailBox+ '<ol class="dd-list">'
                            if (next.level<response[i].level){
                                // $('#nestable1>.dd-list').append('<li class="dd-item dd3-item" data-id="'+response[i].id+'" data-type="'+response[i].type+'" data-name="'+response[i].name+'" data-slug="'+response[i].slug+'"><div class="dd-handle dd3-handle"></div><div class="dd3-content">'+response[i].name+'</div> </li>')
                                html+='<li class="dd-item dd3-item" data-id="'+response[i].id+'" data-type="'+response[i].type+'" data-name="'+response[i].name+'" data-class="'+response[i].class+'"><div class="dd-handle dd3-handle"></div><div class="dd3-content">'+response[i].name+'</div>'+detailBox+' </li>'
                                var n=response[i].level-next.level
                                $("#nestable1>.dd-list").append(new Array(++n).join('</ol></li>'));
                                html+=new Array(++n).join('</ol></li>');
                            }
                        }
                        var detailBox='                                                <div class="list-detail">\n' +
                            '                                                    <div class="form-group">\n' +
                            '                                                      <label for="list-title">عنوان</label>\n' +
                            '                                                      <input type="text" class="form-control" name="list-title" value="'+response[response.length-1].name+'">\n' +
                            '                                                    </div>\n' +
                            '                                                    <div class="form-group">\n' +
                            '                                                      <label for="list-class">کلاس اختیاری</label>\n' +
                            '                                                      <input type="text" class="form-control" name="list-class" value="'+response[response.length-1].class+'">\n' +
                            '                                                    </div>\n' +
                            '                                                    <div class="form-group">\n' +
                            '                                                        <button href="" class="remove btn btn-outline-danger">پاک کردن</button>\n' +
                            '                                                        <button href="" class="save btn btn-outline-info">ذخیره کردن</button>\n' +
                            '                                                    </div>\n' +
                            '                                                </div>';
                        html+='<li class="dd-item dd3-item" data-id="'+response[response.length-1].id+'" data-type="'+response[response.length-1].type+'" data-name="'+response[response.length-1].name+'" data-class="'+response[response.length-1].class+'"><div class="dd-handle dd3-handle"></div><div class="dd3-content">'+response[response.length-1].name+'</div>'+detailBox+' </li>'
                        $('#nestable1>.dd-list').append(html)
                        inputs.prop( "checked", false )
                    }
                },
                error:function (){

                }
            })
        })

        var data_table;
        $.extend( $.fn.dataTable.defaults, {
            ordering:  false
        } );
        $(document).ready( function () {
            data_table=$('#example1').DataTable();
        } );

        Dropzone.options.uploadFile={
            parallelUploads:100,
            uploadMultiple:true,
            acceptedFiles:'image/*',
            url: "{{route('ajax.upload.image')}}",
            headers:{
                'X-CSRF-TOKEN':$('meta[name="x-csrf-token"]').attr('content')
            },
            successmultiple:function (file,response){
                var triggerEl = document.querySelector('#myTab a[href="#select12-tab"]');
                new bootstrap.Tab(triggerEl).show();
                page=1;
                has_files=true;
                $("#checkedMediaForm").html(response.html);
            },
            dictDefaultMessage:"فایل ها را برای ارسال اینجا بکشید",
            dictFallbackMessage:"مرورگر شما از کشیدن و رها سازی برای ارسال فایل پشتیبانی نمی کند.",
            dictFallbackText:"لطفا از فرم زیر برای ارسال فایل های خود مانند گذشته استفاده کنید.",
            dictInvalidFileType:"شما مجاز به ارسال این نوع فایل نیستید.",
            dictCancelUpload:"لغو ارسال",
            dictUploadCanceled:"ارسال لغو شد.",
            dictCancelUploadConfirmation:"آیا از لغو این ارسال اطمینان دارید؟",
            dictRemoveFile:"حذف فایل",
            dictRemoveFileConfirmation:"آیا از حذف این فایل اطمینان دارید؟",
            dictMaxFilesExceeded:"شما نمی توانید فایل دیگری ارسال کنید."
        }

        $('#addMedia').click(function (e){
            e.preventDefault()
            var medias = [];//array of checked medias
            var previews=[];
            $('#checkedMediaForm :checkbox:checked').each(function(i){
                medias[i] = $(this).val();
                previews[i]=$(this).prev('label').html()
                if (modalTarget.is('.single-file')){
                    modalTarget.parent().next().html('')
                    return false;
                }
            });
            var className=modalTarget.attr('data-className')
            for (var i=0;i<medias.length;i++) {
                modalTarget.parent().next().append('<div class="download-item '+className+'"><div class="card app-file-list"><div class="app-file-icon">'+previews[i]+'</div></div><i class="fas fa-times"></i></div>')
            }

            if (modalTarget.val()=='' || modalTarget.is('.single-file'))
                modalTarget.val(medias.join(','))
            else
                modalTarget.val(modalTarget.val()+','+medias.join(','))
            $('#tabtarh-lib').modal('hide')
        })

        $('#tabtarh-lib').on('hide.bs.modal',function (e){
            $('#checkedMediaForm :checkbox:checked').prop('checked',false)
        })

        var modalTarget='';
        var page=1;
        var show_files=false;
        var req=false;
        var has_files=true;

        $('#tabtarh-lib').on('show.bs.modal',function (e){
            if (e.relatedTarget){
                modalTarget=$(e.relatedTarget).next('input[type="hidden"].tbt-hide')
                if(!show_files){
                    req=true;
                    $.ajax({
                        type:'get',
                        url:"{{route('admin.ajaxGetLibFiles')}}",
                        dataType:'json',
                        data:{page:page},
                        success:function (response){
                            if(response){
                                $('#checkedMediaForm').html(response.res)
                                show_files=true;
                                if(response.count==0){
                                    has_files=false;
                                }
                            }
                            req=false;
                        },
                        error:function(){
                            req=false;
                        }
                    })
                }
            }else{
                modalTarget=''
            }
        })

        $('#tabtarh-lib').scroll(function() {
            if($('#tabtarh-lib').scrollTop() + $('#tabtarh-lib').height() > 0.7*$('#tabtarh-lib .modal-body').height() && has_files && !req) {
                page=page+1;
                req=true;
                $.ajax({
                    type:'get',
                    url:"{{route('admin.ajaxGetLibFiles')}}",
                    dataType:'json',
                    data:{page:page},
                    success:function (response){
                        if(response){
                            $('#checkedMediaForm').append(response.res)
                        }
                        if(response.count==0){
                            has_files=false;
                        }
                        req=false;
                    },
                    error:function(){
                        req=false;
                    }
                })

            }
        });

        $('.card-body').on('click','.download-item .fa-times',function (){
            var header=$(this).parent().parent()
            $(this).parent().remove()
            var src=[]
            header.find('img').each(function (){
                src.push($(this).attr('src').replace("{{UPLOAD_ROOT}}",''))
            })
            header.prev().find('input[type="hidden"].tbt-hide').each(function (){
                $(this).val(src.join(','))
            })
        })

        $('#checkedMediaForm :checkbox:not(:checked)').on('change',function (){
            if (modalTarget.is('.single-file')){
                $('#checkedMediaForm :checkbox').prop('checked',false)
                $(this).prop('checked',true)
            }
        })
        // end library

        $('.add-list-item').click(function (){
            var list_type='';
            if ($(this).is('.add-post-meta')){
                list_type='post_meta';
            }else if ($(this).is('.add-option')){
                list_type='option';
            }

            var btn=$(this)
            var num=btn.attr('data-list-count')
            var id=btn.attr('data-list')
            var option=btn.attr('data-option')
            $.ajax({
                type:'post',
                url:"{{route('ajax.add.listItemOption')}}",
                data:{num:num,id:id,type:list_type,option:option},
                success:function (response){
                    btn.parent().next().append(response)
                    btn.attr('data-list-count',1+parseInt(num))
                },
                error:function (){}
            })
        })

        $('.add-list-item-post-meta').click(function (){
            var btn=$(this)
            var num=$(this).parent().parent().next().find('.option-list-item').length
            var location=$(this).next('input[type="hidden"]').val()
            $.ajax({
                type:'post',
                url:"{{route('ajax.add.listItemOptionToPostMeta')}}",
                data:{num:num,location:location},
                success:function (response){
                    btn.parent().parent().next().append(response)
                },
                error:function (){}
            })
        })

        $(document).on('click','.reply_to_comment',function (e){
            e.preventDefault()
            var comment=parseInt($(this).attr('data-comment'));
            $(this).parent().removeClass('show')
            var reply_form = '<tr id="reply-row"><td colspan="6"><form id="reply-comment-form"><div class="form-group"><label>پاسخ خود را بنویسید</label><textarea name="reply-comment" class="form-control"></textarea><input type="hidden" name="comment" value="'+comment+'"></div><div class="btn-group"><button class="btn btn-primary send-reply">تأیید و پاسخ</button><button class="btn btn-secondary cancel-reply">لغو</button></div></form></td></tr>'
            var prev_row=$(this).parent().parent().parent().parent()
            if($('#reply-row').length>0){
                swal({
                    title: "آیا می خواهید تمام داده های فرم پاک شود؟",
                    icon: "warning",
                    buttons: [
                        'لغو',
                        'تأیید'
                    ],
                    dangerMode: true,
                }).then(function(isConfirm) {
                    if (isConfirm) {
                        $('#reply-row').remove()
                        prev_row.after(reply_form)
                    } else {
                        swal("لغو شد", "قبل از پاسخ دادن داده های فرم را ذخیره کنید!", "error");
                    }
                })
            }else{
                $(this).parent().parent().parent().parent().after(reply_form)
            }
        })

        $(document).on('click','.cancel-reply',function (e){
            e.preventDefault()
            $('#reply-row').remove()
        })

        $(document).on('submit','#reply-comment-form',function (e){
            e.preventDefault()
            var form=$(this);
            $.ajax({
                type:'get',
                url:"{{route('admin.comment.reply')}}",
                data:form.serialize(),
                dataType:'json',
                success:function (response){
                    var html='<tr>'
                    html+='<td>'+response.author+'</td>'
                    html+='<td>'+response.text+'</td>'
                    html+='<td>'+response.post+'</td>'
                    html+='<td>'+response.status+'</td>'
                    html+='<td>'+response.date+'</td>'
                    html+='<td class="text-center">                                        <div class="dropdown">\n' +
                        '                                                <a href="#" class="btn btn-sm"\n' +
                        '                                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                        '                                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>\n' +
                        '                                                </a>\n' +
                        '                                                <div class="dropdown-menu dropdown-menu-right">\n' +
                        '                                                    <a href="" data-comment="'+response.id+'" class="dropdown-item edit_comment" type="button">ویرایش</a>\n' +
                        '                                                    <a href="" data-comment="'+response.id+'" class="dropdown-item reply_to_comment" type="button">پاسخ دادن</a>\n' +
                        '                                                    <a href="'+response.delete_route+'" class="dropdown-item delete-item" type="button">حذف</a>\n' +
                        '                                                </div>\n' +
                        '                                            </div></td>'
                    html+='</tr>'

                    form.parent().parent().parent().prepend(html)
                    $('#reply-row').remove()

                    swal("پاسخ شما ثبت شد", {
                        buttons: false,
                        icon: "success",
                        timer: 500,
                    });
                },
                error:function (){}
            })
        })

        $(document).on('click','.edit_comment',function (e){
            e.preventDefault()
            $(this).parent().removeClass('show')
            var prev_row=$(this).parent().parent().parent().parent()
            var comment=parseInt($(this).attr('data-comment'));
            $.ajax({
                type:'get',
                url:"{{route('admin.comment.get')}}",
                data:{comment:comment},
                dataType:'json',
                success:function (response){
                    if (response){
                        var text=response.text
                        var status=response.status
                        var edit_form = '<tr id="edit-row"><td colspan="6"><form id="edit-comment-form"><div>وضعیت دیدگاه</div><div class="form-group"><label class="radio-inline"><input '+((status==0)?'checked':'')+' type="radio" name="status" value="0">پیش نویس</label><label class="radio-inline"><input '+((status==1)?'checked':'')+'  type="radio" name="status" value="1">انتشار</label></div><div>دیدگاه</div><div class="form-group"><textarea name="edit-comment" class="form-control">'+text+'</textarea><input type="hidden" name="comment" value="'+comment+'"></div><div class="btn-group"><button class="btn btn-primary edit-submit-form">ذخیره</button><button class="btn btn-secondary cancel-edit">لغو</button></div></form></td></tr>'
                        if($('#edit-row').length>0){
                            swal({
                                title: "آیا می خواهید تمام داده های فرم پاک شود؟",
                                icon: "warning",
                                buttons: [
                                    'لغو',
                                    'تأیید'
                                ],
                                dangerMode: true,
                            }).then(function(isConfirm) {
                                if (isConfirm) {
                                    $('#edit-row').remove()
                                    prev_row.after(edit_form)
                                } else {
                                    swal("لغو شد", "قبل از پاسخ دادن داده های فرم را ذخیره کنید!", "error");
                                }
                            })
                        }else{
                            prev_row.after(edit_form)
                        }
                    }
                },
                error:function (){}
            })
        })

        $(document).on('click','.cancel-edit',function (e){
            e.preventDefault()
            $('#edit-row').remove()
        })

        $(document).on('submit','#edit-comment-form',function (e){
            e.preventDefault()
            var form=$(this);
            $.ajax({
                type:'get',
                url:"{{route('admin.comment.edit')}}",
                data:form.serialize(),
                dataType:'json',
                success:function (response){
                    var html='<td>'+response.author+'</td>'
                    html+='<td>'+response.text+'</td>'
                    html+='<td>'+response.post+'</td>'
                    html+='<td>'+response.status+'</td>'
                    html+='<td>'+response.date+'</td>'
                    html+='<td class="text-center">                                        <div class="dropdown">\n' +
                        '                                                <a href="#" class="btn btn-sm"\n' +
                        '                                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                        '                                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>\n' +
                        '                                                </a>\n' +
                        '                                                <div class="dropdown-menu dropdown-menu-right">\n' +
                        '                                                    <a href="" data-comment="'+response.id+'" class="dropdown-item edit_comment" type="button">ویرایش</a>\n' +
                        '                                                    <a href="" data-comment="'+response.id+'" class="dropdown-item reply_to_comment" type="button">پاسخ دادن</a>\n' +
                        '                                                    <a href="'+response.delete_route+'" class="dropdown-item delete-item" type="button">حذف</a>\n' +
                        '                                                </div>\n' +
                        '                                            </div></td>'
                    form.parent().parent().prev().html(html)
                    $('#edit-row').remove()

                    swal("دیدگاه با موفقیت ثبت شد", {
                        buttons: false,
                        icon: "success",
                        timer: 500,
                    });
                },
                error:function (){}
            })
        })

        $('#wizard-example').steps({
            headerTag: 'h3',
            bodyTag: 'section',
            autoFocus: true,
            titleTemplate: '<span class="wizard-index">#index#</span> #title#',
            onFinished: function (event, currentIndex)
            {
                $('body form').trigger('submit')
            }
        });

        $(document).on('change','.change-select-all',function (e){
            var select=$(this).parent().parent().parent().find('select')
            if ($(this).is(':checked')){
                select.prop('disabled',true)
            }else{
                select.prop('disabled',false)
            }
        })

        $('#add-user-jobs').click(function (e){
            var elm=$(this)
            var num=parseInt(elm.attr('data-rows'))
            $.ajax({
                type:'get',
                url:"{{route('admin.add_user_job')}}",
                data:{num:num},
                success:function (response){
                    $('#user-jobs tbody').append(response)
                    elm.attr('data-rows',1+num)
                    $('.select2-init').select2({dir: "rtl"})
                    $('.select2-init').removeClass('select2-init').addClass('select2')
                    $('.change-select-all-init').bootstrapToggle()
                    $('.change-select-all-init').removeClass('change-select-all-init').addClass('change-select-all')
                }
            })
        })

        $(document).on('click','.delete-user-job,.delete-user-region',function (){
            $(this).parent().parent().remove()
        })

        $(document).on('change','.ostan-change',function (){
            var elm=$(this);
            var num=$(this).attr('data-num')
            var ostan=elm.val();
            $.ajax({
                type:'get',
                url:"{{route('admin.ajax_get_shahrestans')}}",
                data:{ostan:ostan},
                dataType:'json',
                success:function (response){
                    if (response){
                        var default_option='<option value="0">یک گزینه انتخاب کنید</option>';
                        var html=default_option;
                        for(var i in response){
                            html+='<option value="'+response[i]['ID']+'">'+response[i]['Title']+'</option>'
                        }
                        $('.shahrestan-select[data-num="'+num+'"]').html(html)
                        $('.mantaghe-select[data-num="'+num+'"]').html(default_option)
                        $('.bakhsh-select[data-num="'+num+'"]').html(default_option)
                    }
                }
            })
        })

        $(document).on('change','.ostan-change-step',function (){
            if($(this).is('[data-adds_meta]'))
                region='metas[region]';
            else
                region='region';
            var elm=$(this);
            var ostan=elm.val();
            var form_row=elm.parent().parent()
            var num=form_row.attr('data-num')
            $.ajax({
                type:'get',
                url:"{{route('admin.ajax_get_shahrestans')}}",
                data:{ostan:ostan},
                dataType:'json',
                success:function (response){
                    form_row.find('[data-type="1"],[data-type="2"],[data-type="3"]').remove()
                    if (response && response.length>0){
                        var default_option='<option value="0">همه موارد</option>';
                        var html=default_option;
                        for(var i in response){
                            html+='<option value="'+response[i]['ID']+'">'+response[i]['Title']+'</option>'
                        }
                        var shahrestan='<div class="form-group col-md-3" data-type="1">';
                        shahrestan+='<label>شهر</label>';
                        shahrestan+='<select class="select2-init shahrestan-change-step" name="'+region+((form_row.is('[data-num]'))?('['+num+']'):'')+'[shahrestan]" '+((elm.is('[data-adds_meta]'))?'data-adds_meta':'')+'>'+html+'</select>'
                        shahrestan+='</div>';
                        form_row.append(shahrestan)
                        $('.select2-init').select2({dir: "rtl"})
                        $('.select2-init').removeClass('select2-init').addClass('select2')
                    }
                }
            })
        })

        $(document).on('change','.shahrestan-change',function (){
            var elm=$(this);
            var num=$(this).attr('data-num')
            var shahrestan=elm.val();
            $.ajax({
                type:'get',
                url:"{{route('admin.ajax_get_manategh')}}",
                data:{shahrestan:shahrestan},
                dataType:'json',
                success:function (response){
                    if (response){
                        var default_option='<option value="0">یک گزینه انتخاب کنید</option>';
                        var html=default_option;
                        for(var i in response){
                            html+='<option value="'+response[i]['ID']+'">'+response[i]['Title']+'</option>'
                        }
                        $('.mantaghe-select[data-num="'+num+'"]').html(html)
                        $('.bakhsh-select[data-num="'+num+'"]').html(default_option)
                    }
                }
            })
        })

        $(document).on('change','.shahrestan-change-step',function (){
            if($(this).is('[data-adds_meta]'))
                region='metas[region]';
            else
                region='region';
            var elm=$(this);
            var shahrestan=elm.val();
            var form_row=elm.parent().parent()
            var num=form_row.attr('data-num')
            $.ajax({
                type:'get',
                url:"{{route('admin.ajax_get_manategh')}}",
                data:{shahrestan:shahrestan},
                dataType:'json',
                success:function (response){
                    form_row.find('[data-type="2"],[data-type="3"]').remove()
                    if (response && response.length>0){
                        var default_option='<option value="0">همه موارد</option>';
                        var html=default_option;
                        for(var i in response){
                            html+='<option value="'+response[i]['ID']+'">'+response[i]['Title']+'</option>'
                        }
                        var mantaghe='<div class="form-group col-md-3" data-type="2">';
                        mantaghe+='<label>منطقه</label>';
                        mantaghe+='<select class="select2-init mantaghe-change-step" name="'+region+((form_row.is('[data-num]'))?('['+num+']'):'')+'[mantaghe]" '+((elm.is('[data-adds_meta]'))?'data-adds_meta':'')+'>'+html+'</select>'
                        mantaghe+='</div>';
                        form_row.append(mantaghe)
                        $('.select2-init').select2({dir: "rtl"})
                        $('.select2-init').removeClass('select2-init').addClass('select2')
                    }
                }
            })
        })

        $(document).on('change','.mantaghe-change',function (){
            var elm=$(this);
            var num=$(this).attr('data-num')
            var mantaghe=elm.val();
            $.ajax({
                type:'get',
                url:"{{route('admin.ajax_get_bakhshs')}}",
                data:{mantaghe:mantaghe},
                dataType:'json',
                success:function (response){
                    if (response){
                        var default_option='<option value="0">یک گزینه انتخاب کنید</option>';
                        var html=default_option;
                        for(var i in response){
                            html+='<option value="'+response[i]['ID']+'">'+response[i]['Title']+'</option>'
                        }
                        $('.bakhsh-select[data-num="'+num+'"]').html(html)
                    }
                }
            })
        })

        $(document).on('change','.mantaghe-change-step',function (){
            if($(this).is('[data-adds_meta]'))
                region='metas[region]';
            else
                region='region';
            var elm=$(this);
            var mantaghe=elm.val();
            var form_row=elm.parent().parent()
            var num=form_row.attr('data-num')
            $.ajax({
                type:'get',
                url:"{{route('admin.ajax_get_bakhshs')}}",
                data:{mantaghe:mantaghe},
                dataType:'json',
                success:function (response){
                    form_row.find('[data-type="3"]').remove()
                    if (response && response.length>0){
                        var default_option='<option value="0">همه موارد</option>';
                        var html=default_option;
                        for(var i in response){
                            html+='<option value="'+response[i]['ID']+'">'+response[i]['Title']+'</option>'
                        }
                        var mantaghe='<div class="form-group col-md-3" data-type="3">';
                        mantaghe+='<label>بخش</label>';
                        mantaghe+='<select class="select2-init" name="'+region+((form_row.is('[data-num]'))?('['+num+']'):'')+'[bakhsh]" '+((elm.is('[data-adds_meta]'))?'data-adds_meta':'')+'>'+html+'</select>'
                        mantaghe+='</div>';
                        form_row.append(mantaghe)
                        $('.select2-init').select2({dir: "rtl"})
                        $('.select2-init').removeClass('select2-init').addClass('select2')
                    }
                }
            })
        })

        $('#add-user-regions').click(function (e){
            e.preventDefault();
            var elm=$(this)
            var num=parseInt(elm.attr('data-rows'))
            $.ajax({
                type:'get',
                url:"{{route('admin.ajax_getOstans')}}",
                dataType:'json',
                success:function (response){
                    var default_option='<option value="0">انتخاب همه</option>';
                    var html=default_option;
                    for(var i in response){
                        html+='<option value="'+response[i]['ID']+'">'+response[i]['Title']+'</option>'
                    }

                    var ostan='<div class="form-row" data-num="'+(1+num)+'">';
                    ostan+='<div class="form-group col-md-3" data-type="0">';
                    ostan+='<label>استان</label>';
                    ostan+='<select class="select2-init ostan-change-step" name="region['+(1+num)+'][ostan]">'+html+'</select>'
                    ostan+='</div>';
                    ostan+='</div>';


                    var row='<tr>';
                    row+='<td>'+ostan+'</td>';
                    row+='<td><span class="fa fa-minus-circle text-danger delete-user-region"></span></td>';
                    row+='</tr>';
                    $('#user-regions tbody').append(row)
                    elm.attr('data-rows',1+num)
                    $('.select2-init').select2({dir: "rtl"})
                    $('.select2-init').removeClass('select2-init').addClass('select2')
                    $('.change-select-all-init').bootstrapToggle()
                    $('.change-select-all-init').removeClass('change-select-all-init').addClass('change-select-all')
                }
            })
        })

        $('.toggle-card .card-header i.toggle').click(function (e){
            $(this).parent().next().fadeToggle()
            $(this).toggleClass('fa-angle-up').toggleClass('fa-angle-down')
        })

    </script>

    <!-- begin::nestable -->
    <script src="<?php echo $root?>/vendors/nestable/jquery.nestable.js"></script>
    <script src="<?php echo $root?>/vendors/nestable/jquery.nestable.js"></script>
    <!-- begin::sweet-alert -->

    <!-- Javascript -->
    <script src="<?php echo $root?>/vendors/datepicker-jalali/bootstrap-datepicker.min.js"></script>
    <script src="<?php echo $root?>/vendors/datepicker-jalali/bootstrap-datepicker.fa.min.js"></script>

    <script src="<?php echo $root?>/assets/js/examples/sweet-alert.js"></script>
    <script>
        $('.navigation').niceScroll({railalign: 'left'});

        $('input.date-picker').datepicker({
            dateFormat: "yy/mm/dd",
            showOtherMonths: true,
            selectOtherMonths: false
        });

        $(function () {
            var updateOutput = function (e) {
                var list = e.length ? e : $(e.target),
                    output = list.data('output');
                if (window.JSON) {
                    output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
                } else {
                    output.val('JSON browser support required for this demo.');
                }
            };

            $('#nestable1').nestable().on('change', updateOutput);

            $('#nestable2').nestable({
                group: 1
            }).on('change', updateOutput);

            updateOutput($('#nestable1').data('output', $('#nestable-output')));
            updateOutput($('#nestable2').data('output', $('#nestable2-output')));

            $('#nestable-menu').on('click', function (e) {
                var target = $(e.target),
                    action = target.data('action');
                if (action === 'expand-all') {
                    $('.dd').nestable('expandAll');
                }
                if (action === 'collapse-all') {
                    $('.dd').nestable('collapseAll');
                }
            });
        });

        $(document).on('click','.dd .dd3-content',function (e){
            $(this).next('.list-detail').fadeToggle()
        })

        $(document).on('click','.dd .save',function (e){
            e.preventDefault();
            var el=$(this)
            var name=el.parent().parent().find('input[name="list-title"]')
            if (name){
                name=name.first().val()
                el.parent().parent().parent().attr('data-name',name)
                el.parent().parent().parent().find('.dd3-content').first().html(name)
            }
            var link=el.parent().parent().prev('input[name="list-link"]')
            if (link){
                link=link.first().val()
                el.parent().parent().parent().attr('data-slug',link)
            }
            var clas=el.parent().parent().find('input[name="list-class"]')
            if (clas){
                clas=clas.first().val()
                el.parent().parent().parent().attr('data-class',clas)
            }
        })

        $(document).on('click','.save-new-menu',function (e){
            e.preventDefault()
            var name=$('#list-name')?$('#list-name').val():'';
            var json=$('#nestable1')?($('#nestable1').nestable('serialize')):'';
            $.ajax({
                type:'post',
                url:"{{route('admin.menus.storeMenu')}}",
                data:{name:name,json:json},
                dataType:'json',
                success:function (response){
                    if (response.error){
                        swal({
                          title: response.msg,
                          icon: "error",
                          button: "بستن",
                        });
                    }
                    if (response.success){
                        swal({
                          title: response.msg,
                          icon: "success",
                          button: "بستن",
                        });
                        $('#list-name').attr('data-id',response.result.id)
                        if (!$('.save-new-menu').hasClass('edit-menu'))
                            $('.save-new-menu').removeClass('save-new-menu').addClass('edit-menu')
                        $('#nestable1').html(listify(json))
                        $('#current-menu').append('<option value="'+response.result.id+'">'+name+'</option>')
                    }
                },
                error:function (error){

                }
            })
        })

        $('.select-menu').click(function (e){
            e.preventDefault()
            var selected=$('select#current-menu :selected').val()
            if (selected>0){
                $.ajax({
                    type:'get',
                    url:"ajaxEditMenu/"+selected,
                    dataType:'json',
                    success:function (response){
                        if (response.error){
                            swal({
                              title: response.msg,
                              icon: "error",
                              button: "بستن",
                            });
                        }
                        if (response.success){
                            $('#list-name').val(response.result.name)
                            $('#list-name').attr('data-id',selected)
                            if (!$('.save-new-menu').hasClass('edit-menu'))
                                $('.save-new-menu').removeClass('save-new-menu').addClass('edit-menu')
                            $('#nestable1').html(listify(response.result.json))
                        }
                    },
                    error:function (error){

                    }
                })
            }
        })

        $(document).on('click','.edit-menu',function (e){
            e.preventDefault()
            var curr=$('#list-name')?$('#list-name').attr('data-id'):''
            var name=$('#list-name')?$('#list-name').val():'';
            var json=$('#nestable1')?($('#nestable1').nestable('serialize')):'';
            $.ajax({
                type:'post',
                url:"{{route('admin.menus.updateMenu')}}",
                data:{curr:curr,name:name,json:json},
                dataType:'json',
                success:function (response){
                    if (response.error){
                        swal({
                          title: response.msg,
                          icon: "error",
                          button: "بستن",
                        });
                    }
                    if (response.success){
                        swal({
                          title: response.msg,
                          icon: "success",
                          button: "بستن",
                        });
                        $('#current-menu option[value="'+curr+'"]').html('<option value="'+curr+'">'+name+'</option>')
                    }
                },
                error:function (error){

                }
            })

        })

        $(document).on('click','.remove-menu',function (e){
            e.preventDefault()
            var curr=$('#list-name')?$('#list-name').attr('data-id'):''
            $.ajax({
                type:'post',
                url:"{{route('admin.menus.deleteMenu')}}",
                data:{curr:curr},
                dataType:'json',
                success:function (response){
                    if (response.error){
                        swal({
                          title: response.msg,
                          icon: "error",
                          button: "بستن",
                        });
                    }
                    if (response.success){
                        swal({
                          title: response.msg,
                          icon: "success",
                          button: "بستن",
                        });
                        $('#list-name').attr('data-id',0)
                        $('#list-name').val('')
                        $('.edit-menu').removeClass('edit-menu').removeClass('save-new-menu').addClass('save-new-menu')
                        $('#nestable1>.dd-list').html('')
                        $("#current-menu option[value='"+curr+"']").each(function() {
                            $(this).remove();
                        });
                    }
                },
                error:function (error){

                }
            })
        })

        $(document).on('click','.delete-item',function (e){
            e.preventDefault()
            var href=$(this).attr('href');
            swal({
                title: "آیا می خواهید حذف شود؟",
                icon: "warning",
                buttons: [
                  'لغو',
                  'تأیید'
                ],
                dangerMode: true,
              }).then(function(isConfirm) {
                if (isConfirm) {
                    location.href=href
                } else {
                    swal("عملیات حذف انجام نشد!",{icon:'error',timer:1000,buttons:false})
                }
              })
        })

        $(document).on('click','.archive-adds',function (e){
            e.preventDefault()
            var elm=$(this)
            if (elm.is('[data-adds]')){
                var id=parseInt(elm.attr('data-adds'))
                swal({
                    title: "آیا می خواهید آگهی به بایگانی منتقل شود؟",
                    icon: "warning",
                    buttons: [
                        'لغو',
                        'تأیید'
                    ],
                    dangerMode: true,
                }).then(function(isConfirm) {
                    if (isConfirm) {
                        $.ajax({
                            type:'post',
                            url:"{{route('admin.ajaxArchiveAdds')}}",
                            data:{id:id},
                            success:function (response){
                                if (response.success){
                                    swal(response.message,{icon:'success',timer:1000,buttons:false})
                                    // elm.parent().parent().parent().parent().remove()
                                    adds_list
                                        .row( elm.parents('tr') )
                                        .remove()
                                        .draw();
                                }else if(response.error){
                                    swal(response.message,{icon:'error',timer:1000,buttons:false})
                                }
                            }
                        })
                    } else {
                        swal("عملیات حذف انجام نشد!",{icon:'error',timer:1000,buttons:false})
                    }
                })
            }
        })

        $(document).on('click','.trash-adds',function (e){
            e.preventDefault()
            var elm=$(this)
            if (elm.is('[data-adds]')){
                var id=parseInt(elm.attr('data-adds'))
                swal({
                    title: "آیا می خواهید حذف شود؟",
                    icon: "warning",
                    buttons: [
                        'لغو',
                        'تأیید'
                    ],
                    dangerMode: true,
                }).then(function(isConfirm) {
                    if (isConfirm) {
                        $.ajax({
                            type:'post',
                            url:"{{route('admin.ajaxTrashAdds')}}",
                            data:{id:id},
                            success:function (response){
                                if (response.success){
                                    swal(response.message,{icon:'success',timer:1000,buttons:false})
                                    // elm.parent().parent().parent().parent().remove()
                                    adds_list
                                        .row( elm.parents('tr') )
                                        .remove()
                                        .draw();
                                }else if(response.error){
                                    swal(response.message,{icon:'error',timer:1000,buttons:false})
                                }
                            }
                        })
                    } else {
                        swal("عملیات حذف انجام نشد!",{icon:'error',timer:1000,buttons:false})
                    }
                })
            }
        })

        $(document).on('click','.recursion-adds',function (e){
            e.preventDefault()
            var elm=$(this)
            if (elm.is('[data-adds]')){
                var id=parseInt(elm.attr('data-adds'))
                swal({
                    title: "آیا می خواهید آگهی به پنل بازگشت داده شود؟",
                    icon: "warning",
                    buttons: [
                        'لغو',
                        'تأیید'
                    ],
                    dangerMode: true,
                }).then(function(isConfirm) {
                    if (isConfirm) {
                        $.ajax({
                            type:'post',
                            url:"{{route('admin.ajaxRecursionAdds')}}",
                            data:{id:id},
                            success:function (response){
                                if (response.success){
                                    swal(response.message,{icon:'success',timer:1000,buttons:false})
                                    // elm.parent().parent().parent().parent().remove()
                                    adds_list
                                        .row( elm.parents('tr') )
                                        .remove()
                                        .draw();
                                }else if(response.error){
                                    swal(response.message,{icon:'error',timer:1000,buttons:false})
                                }
                            }
                        })
                    } else {
                        swal("عملیات حذف انجام نشد!",{icon:'error',timer:1000,buttons:false})
                    }
                })
            }
        })

        $(document).on('click','.delete-adds',function (e){
            e.preventDefault()
            var elm=$(this)
            if (elm.is('[data-adds]')){
                var id=parseInt(elm.attr('data-adds'))
                swal({
                    title: "آیا می خواهید آگهی حذف شود؟",
                    icon: "warning",
                    buttons: [
                        'لغو',
                        'تأیید'
                    ],
                    dangerMode: true,
                }).then(function(isConfirm) {
                    if (isConfirm) {
                        $.ajax({
                            type:'post',
                            url:"{{route('admin.ajaxDeleteAdds')}}",
                            data:{id:id},
                            success:function (response){
                                if (response.success){
                                    swal(response.message,{icon:'success',timer:1000,buttons:false})
                                    // elm.parent().parent().parent().parent().remove()
                                    adds_list
                                        .row( elm.parents('tr') )
                                        .remove()
                                        .draw();
                                }else if(response.error){
                                    swal(response.message,{icon:'error',timer:1000,buttons:false})
                                }
                            }
                        })
                    } else {
                        swal("عملیات حذف انجام نشد!",{icon:'error',timer:1000,buttons:false})
                    }
                })
            }
        })

        $(document).on('click','.confirm-request.reject',function (e){
            e.preventDefault()
            var elm=$(this)

            if (elm.is('[data-adds]')) {
                var id = parseInt(elm.attr('data-adds'))

                swal({
                    title: 'علت رد آگهی را بنویسید',
                    icon: "warning",
                    content: {
                        element: "input",
                        attributes: {
                            type: "text",
                        },
                    },
                    buttons: ['لغو', 'ثبت و رد آگهی'],
                }).then(function (result) {
                    if (result !== null) {
                        $.ajax({
                            type: 'post',
                            url: "{{route('admin.ajaxRejectAdds')}}",
                            data: {id: id, reason: result},
                            dataType: 'json',
                            success: function (response) {
                                if (response.success) {
                                    var parent_row=elm.parent().parent().parent().parent()
                                    var parent_calss='reject-add'
                                    if(elm.parent().parent().parent().parent().is('.odd'))
                                        parent_calss+=' odd'
                                    else
                                        parent_calss+=' even'
                                    if(elm.parent().parent().parent().parent().is('.special'))
                                        parent_calss+=' special'
                                    parent_row.attr('class',parent_calss)
                                    elm.parent().find('.confirm-request').removeClass('disabled')
                                    elm.parent().find('.confirm-request.reject').addClass('disabled')
                                    swal(response.message,{icon:'success',timer:1000,buttons:false})
                                } else if (response.error) {
                                    swal(response.message,{icon:'error',timer:1000,buttons:false})

                                }
                            }
                        })
                    }
                })
            }
        })

        $(document).on('click','.confirm-request.confirm',function (e){
            e.preventDefault()
            var elm=$(this)

            if (elm.is('[data-adds]')){
                var id=parseInt(elm.attr('data-adds'))
                $.ajax({
                    type:'post',
                    url:"{{route('admin.ajaxConfirmAdds')}}",
                    data:{id:id},
                    dataType:'json',
                    success:function (response){
                        if (response.success){
                            var parent_row=elm.parent().parent().parent().parent()
                            var parent_calss='confirm-add'
                            if(elm.parent().parent().parent().parent().is('.odd'))
                                parent_calss+=' odd'
                            else
                                parent_calss+=' even'
                            if(elm.parent().parent().parent().parent().is('.special'))
                                parent_calss+=' special'
                            parent_row.attr('class',parent_calss)
                            elm.parent().find('.confirm-request').removeClass('disabled')
                            elm.parent().find('.confirm-request.confirm').addClass('disabled')
                            swal(response.message,{icon:'success',timer:1000,buttons:false})
                        }else if(response.error){
                            swal(response.message,{icon:'error',timer:1000,buttons:false})
                        }
                    }
                })
            }
        })

        $(document).on('click','.confirm-request.reset',function (e){
            e.preventDefault()
            var elm=$(this)

            if (elm.is('[data-adds]')){
                var id=parseInt(elm.attr('data-adds'))
                $.ajax({
                    type:'post',
                    url:"{{route('admin.ajaxResetConfirmAdds')}}",
                    data:{id:id},
                    dataType:'json',
                    success:function (response){
                        if (response.success){
                            var parent_row=elm.parent().parent().parent().parent()
                            var parent_calss='waiting-confirm'
                            if(elm.parent().parent().parent().parent().is('.odd'))
                                parent_calss+=' odd'
                            else
                                parent_calss+=' even'
                            if(elm.parent().parent().parent().parent().is('.special'))
                                parent_calss+=' special'
                            parent_row.attr('class',parent_calss)
                            elm.parent().find('.confirm-request').removeClass('disabled')
                            elm.parent().find('.confirm-request.reset').addClass('disabled')
                            swal(response.message,{icon:'success',timer:1000,buttons:false})
                        }else if(response.error){
                            swal(response.message,{icon:'error',timer:1000,buttons:false})
                        }
                    }
                })
            }
        })

        $(document).on('change','select.relate-terms',function (e){
            var elm=$(this)
            var term=elm.val()
            var relate=elm.parent().find('.related-metas')
            data={}
            data.term=term
            if (elm.is('[data-post]'))
                data.post_id=elm.attr('data-post')
            var spinner='<div class="spinner-border text-primary" role="status" style="display: table;margin: 0 auto;"><span class="sr-only">Loading...</span></div>'
            relate.html(spinner)
            $.ajax({
                type:'post',
                data:data,
                dataType:'json',
                url:"{{route('admin.getRelatedTerms')}}",
                success:function (response){
                    if(response.success){
                        relate.html(response.response)
                        $('.select2').select2()
                        $('input.date-picker').datepicker({
                            dateFormat: "yy/mm/dd",
                            showOtherMonths: true,
                            selectOtherMonths: false
                        });
                    }
                }
            })
        })

        $(document).on('change','select.related-crm-terms',function (e){
            var elm=$(this)
            var term=elm.val()
            var relate=elm.parent().find('.related-metas')
            data={}
            data.term=term
            if (elm.is('[data-post]'))
                data.post_id=elm.attr('data-post')
            var spinner='<div class="spinner-border text-primary" role="status" style="display: table;margin: 0 auto;"><span class="sr-only">Loading...</span></div>'
            relate.html(spinner)
            $.ajax({
                type:'post',
                data:data,
                dataType:'json',
                url:"{{route('admin.getRelatedCrmTerms')}}",
                success:function (response){
                    if(response.success){
                        relate.html(response.response)
                        $('.select2').select2()
                    }
                }
            })
        })

        $(document).on('change','.switch-select',function (e){
            var select=$(this).parent().parent().find('select,input').not(this)
            if (select.prop('disabled')){
                select.prop('disabled',false)
                select.attr('data-status',1)
            }else{
                select.prop('disabled',true)
                select.attr('data-status',0)
            }
        })

        $('input[data-tab]').change(function (e){
            var elm=$(this)
            var target=$('#'+elm.attr('data-tab'))
            var triggerEl = document.querySelector('#'+elm.attr('data-tab'));
            var tab=$(target.attr('href'))
            if (elm.prop('checked')){
                target.removeClass('disabled')
                new bootstrap.Tab(triggerEl).show();
                tab.find('[data-status="1"]').each(function (){
                    $(this).parent().parent().find('.switch-select').prop('checked',true)
                    $(this).prop('disabled',false)
                })
            }else{
                if(!target.hasClass('disabled')){
                    target.addClass('disabled')
                    // target.removeClass('show')
                    // target.removeClass('active')
                    // tab.removeClass('active')
                    tab.find('[data-status="1"]').each(function (){
                        $(this).parent().parent().find('.switch-select').prop('checked',false)
                        $(this).prop('disabled',true)
                    })
                }
            }
        })

        $(document).ready(function() {
            var apikey='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUxMTExNzI0ZjkxOGEzY2M4YTgwOWNkZGE4YjAyZTBmMDNkNWM0ZGM2OGJhNGRjMzc4M2RlYzQzMGYzMzliNmE1NzVlMDFjNzI2ZjhiMGJmIn0.eyJhdWQiOiIxMjE4OSIsImp0aSI6ImUxMTExNzI0ZjkxOGEzY2M4YTgwOWNkZGE4YjAyZTBmMDNkNWM0ZGM2OGJhNGRjMzc4M2RlYzQzMGYzMzliNmE1NzVlMDFjNzI2ZjhiMGJmIiwiaWF0IjoxNjA5Njc1MTAwLCJuYmYiOjE2MDk2NzUxMDAsImV4cCI6MTYxMjE4MDcwMCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.FFPeBqOvxdk58CWuIsHLqUVWEisERkttaLNn28QmuLCjqnbsZHRjJDmjhJ6_Pe58u4mMoEIQ1qrF1hq5aOqT1wsJxoF0nwGnZ7_WP6ilMzZhWUElcaI6primQ2spnn42LYx4HA14Filu3pW4NCzqO6i9E923cBN78-4JOZOyUwBEfCb7dBKepKy2_zdXoW6RhmHXoYgxjwAWVAXuLMkX_88Ym6As9mLGSeFDkByzWBgAHxiHBGSZ8wtba3npZPnEbUCvbgEw9fDmUp-WGqPIiV6Y_8YruD93kXmu8fccf-R25XduYXxL7Nq_SDzTaarfA-zFj1PggerxNKXi1ZmHYQ';
            var app = new Mapp({
                element: "#app",
                presets: {
                    latlng: {
                        lat: 32,
                        lng: 52
                    },
                    zoom: 6
                },
                locale: "fa",
                apiKey: apikey,
            });

            app.addVectorLayers();
            app.addZoomControls();

            var start = {};
            var index = 1;
            var curse = 0;
            var history = [];
            var memeTimeout;

            kickOff();

            function kickOff() {
                start = {
                    latlng: undefined,
                    marker: undefined,
                    icon: {
                        iconUrl: "./app/assets/images/marker-default-blue.svg",
                        iconSize: [40, 40],
                        iconAnchor: [20, 40],
                        popupAnchor: [0, -40]
                    }
                };

                //app.map.fitBounds([[35.532, 51.051], [35.835, 51.632]]);

                userLocationFound = false;
                app.getUserLocation({
                    before: function() {
                        freeze();
                    },
                    after: function() {
                        unfreeze();
                    },
                    success: function() {
                        userLocationFound = true;

                        app.map.panTo({
                            lat: app.states.user.latlng.lat,
                            lng: app.states.user.latlng.lng
                        });


                        $("#mapp-app").append('<div class="app-start"></div>');


                        $(".app-start").on("click", function() {
                            start.latlng = app.map.getCenter();

                            start.marker = app.addMarker({
                                name: "start",
                                latlng: start.latlng,
                                icon: start.icon,
                                popup: false,
                                pan: false,
                                draggable: true,
                                history: false
                            });


                            $(".app-start").remove();


                            doReverse();

                            start.marker.on("dragend", function() {
                                start.latlng = start.marker.getLatLng();
                                doReverse();
                            });
                        });
                    },
                    error: function() {
                        var centerMarker = $('#center-marker').show();
                        centerMarker.on('click', function(){
                            start.latlng = app.map.getCenter()
                            app.map.panTo(start.latlng);
                            doReverse();
                        });
                    },
                    pan: false,
                    marker: false
                });
            }

            function doReverse() {
                if (start.latlng) {

                    var result = app.findReverseGeocode({
                        before: function() {
                            freeze();
                        },
                        after: function(data) {
                            unfreeze();
                            console.log(data.address_compact)
                            $('#adds_address').val(data.address_compact)
                            //$("textarea").val(data.address_compact);

                        },
                        state: {
                            latlng: start.latlng
                        }
                    });
                }
            }


            function meme(image) {
                if (memeTimeout) clearTimeout(memeTimeout);

                $(".app-meme").addClass("app-visible");
                $(".app-meme").css({
                    backgroundImage: "var(--meme-" + image + ")"
                });

                memeTimeout = setTimeout(function() {
                    $(".app-meme").removeClass("app-visible");
                }, 1000);
            }

            function unfreeze() {
                $(".app-overlay").removeClass("app-visible");
                $("textarea").prop("disabled", false);
                $("button").prop("disabled", false);
                $("input").prop("disabled", false);
            }

            function freeze() {
                $(".app-overlay").addClass("app-visible");
                $("textarea").prop("disabled", true);
                $("button").prop("disabled", true);
                $("input").prop("disabled", true);
            }
        });

        function listify(arr) {
            var l = $("<ol>").addClass("dd-list");
            $.each(arr, function (i, v) {
                var c = $("<li>").addClass("dd-item dd3-item").attr('data-id',v.id).attr('data-type',v.type).attr('data-name',v.name).attr('data-class',v.class),
                    h = $("<div>").addClass("dd-handle dd3-handle"),
                    cn=$('<div>').addClass('dd3-content').html(v.name);
                var detail=$('<div>').addClass('list-detail').css('display','none')
                detail.html('                                                    <div class="form-group">\n' +
                    '                                                      <label for="list-title">عنوان</label>\n' +
                    '                                                      <input type="text" class="form-control" name="list-title" value="'+v.name+'">\n' +
                    '                                                    </div>\n' +
                    '                                                    <div class="form-group">\n' +
                    '                                                      <label for="list-class">کلاس اختیاری</label>\n' +
                    '                                                      <input type="text" class="form-control" name="list-class" value="'+((v.class)?v.class:'')+'">\n' +
                    '                                                    </div>\n' +
                    '                                                    <div class="form-group">\n' +
                    '                                                        <button href="" class="remove btn btn-outline-danger">پاک کردن</button>\n' +
                    '                                                        <button href="" class="save btn btn-outline-info">ذخیره کردن</button>\n' +
                    '                                                    </div>')
                c.append(h)
                c.append(cn)
                c.append(detail)
                l.append(c);
                if (!!v["children"]){
                    c.prepend($('<button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">Expand</button>'))
                    c.append(listify(v["children"]));

                }
            });
            return l;
        }

        selectedCats=[];
        $('#searchCat').keyup(function (){
            var searchCat=$(this).val()
            var data={'searchCat':searchCat}
            var cats = $('.catsBox .catsList input:checked').map(function(){
                return $(this).val();
            }).get();
            var notSelectedCatsObject = $('.catsBox .catsList input:not(:checked)').map(function(){
                return $(this).val();
            }).get();
            cats=arrayUnique(selectedCats.concat(cats))
            selectedCats = cats.filter( function( el ) {
                return notSelectedCatsObject.indexOf( el ) < 0;
            } );

            data.cats=selectedCats;
            $.ajax({
                type:'post',
                url:root+"/admin/ajaxSearchCat",
                data:data,
                dataType:'json',
                success:function (response){
                    if(response.success)
                        $('.catsBox .catsList').html(response.msg)
                },
                error:function (){

                }
            })
        })

        $('.transaction-change').change(function (){
            var elm=$(this)
            var data={transaction:elm.val()}
            $('.land_type_props').remove()
            @if(isset($post))
                data.post="{{$post->postId}}"
            @endif
            $.ajax({
                type:'get',
                url:'{{route('land_types_list')}}',
                data:data,
                success:function (response){
                    if(response){
                        elm.parent().find('.related-metas').html(response.html)
                        $('.select2').select2()
                    }
                }
            })
        })
    </script>
    <!-- end::nestable -->

    <!-- bootstrap4-toggle -->
    <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
    <!-- bootstrap4-toggle -->

</body>
</html>
