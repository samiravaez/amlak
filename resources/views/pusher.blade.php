<!DOCTYPE html>
<head>
    <title>Pusher Test</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
    <script>

        // Enable pusher logging - don't include this in production
        // Pusher.logToConsole = true;

        var pusher = new Pusher('7e9e8e858eec79ab0616', {
            encrypted: true,
            cluster: 'eu',
        });

        // در کانالی که در رویداد لاراول مشخص شده بود، مشترک شو
        var channel = pusher.subscribe('status-liked');

        // اتصال یک تابع به یک رویداد
        channel.bind('App\\Events\\StatusLiked', function(data) {
            consol.log(data)
            // alert(JSON.stringify(data));
        });

    </script>
</head>
<body>
<h1>Pusher Test</h1>
<p>
    Try publishing an event to channel <code>my-channel</code>
    with event name <code>my-event</code>.
</p>
</body>
