<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f7;
            color: #333333;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        h1 {
            font-size: 24px;
            color: #1a202c;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            line-height: 1.5;
        }

        .info {
            margin-top: 20px;
            padding: 15px;
            background-color: #f9fafb;
            border-left: 4px solid #4f46e5;
            border-radius: 4px;
        }

        .info p {
            margin: 5px 0;
        }

        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #888888;
            text-align: center;
        }

        a {
            color: #4f46e5;
            text-decoration: none;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>New Contact Message</h1>

    <p>You have received a new message from your portfolio site:</p>

    <div class="info">
        <p><strong>Name:</strong> {{ $dto->name }}</p>
        <p><strong>Email:</strong> {{ $dto->email }}</p>
        <p><strong>Message:</strong><br>{{ $dto->message }}</p>
        <p><strong>IP Address:</strong> {{ $dto->ip }}</p>
        <p><strong>User Agent:</strong> {{ $dto->userAgent }}</p>
    </div>

    <div class="footer">
        &copy; {{ date('Y') }} <a href="{{ config('app.url') }}">{{ config('app.name') }}</a>. All rights reserved.
    </div>
</div>
</body>
</html>
