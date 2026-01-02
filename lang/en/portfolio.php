<?php

return [
    'title' => 'Selected Projects',
    'text' => 'Large-scale and business-critical systems I’ve worked on.',
    'projects' => [
        'suzuki_pl' => [
            'title' => 'Suzuki Poland Platform (suzuki.pl)',
            'subtitle' => 'Automotive · Enterprise',
            'description' => 'Monolithic web platform for the Polish Suzuki market, serving as the main public-facing website and internal management system.',
            'details' => 'Maintained and modernized a large Laravel-based monolith, including major PHP and Laravel upgrades. Expanded and optimized the admin panel, significantly reducing manual work and improving internal workflows.',
            'stack' => 'Laravel · PHP · Admin systems · Performance',
        ],
        'suzuki_apps' => [
            'title' => 'Moje Suzuki & Suzuki Service App',
            'subtitle' => 'Automotive · Customer & Dealer Platforms',
            'description' => 'Two interconnected mobile applications backed by a shared microservice architecture built with Laravel Lumen.',
            'details' => 'Customer app enables vehicle management, digital warranty book, service tracking, dealer communication, and push notifications. Dealer app supports inspections, service confirmations, pricing approvals, and service completion notifications.',
            'stack' => 'Laravel Lumen · Microservices · REST APIs · Business workflows',
        ],
        'onecatering' => [
            'title' => 'School Catering Management System',
            'subtitle' => 'Education · Business System',
            'description' => 'Custom-built catering management platform for schools and catering providers.',
            'details' => 'Admins manage schools, classes, students, menus, and payments. Parents control meal schedules and payments with one click. Kitchens receive precise daily preparation data for efficient operations.',
            'stack' => 'Laravel · Business logic · Payments · Operational automation',
        ],
    ],
];
