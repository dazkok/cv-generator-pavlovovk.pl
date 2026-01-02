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
            'image' => '/assets/images/suzuki-pl.webp',
        ],
        'suzuki_apps' => [
            'title' => 'Moje Suzuki & Suzuki Service App',
            'subtitle' => 'Automotive · Customer & Dealer Platforms',
            'description' => 'Two interconnected mobile applications backed by a shared microservice architecture built with Laravel Lumen.',
            'details' => 'Customer app enables vehicle management, digital warranty book, service tracking, dealer communication, and push notifications. Dealer app supports inspections, service confirmations, pricing approvals, and service completion notifications.',
            'stack' => 'Laravel Lumen · Microservices · REST APIs · Business workflows',
            'image' => '/assets/images/suzuki.webp',
        ],
        'onecatering' => [
            'title' => 'School Catering Management System',
            'subtitle' => 'Education · Business System',
            'description' => 'Custom-built catering management platform for schools and catering providers.',
            'details' => 'Admins manage schools, classes, students, menus, and payments. Parents control meal schedules and payments with one click. Kitchens receive precise daily preparation data for efficient operations.',
            'stack' => 'Laravel · Business logic · Payments · Operational automation',
            'image' => '/assets/images/onecateringkids.webp',
        ],
        'chow_platform' => [
            'title' => 'cHow Retail Intelligence Platform & Newsletter System',
            'subtitle' => 'SaaS · Business Intelligence · Communication',
            'description' => 'Promotional platform for cHow - a Retail Intelligence system (web + mobile apps) that replaces emails, checklists, and Excel by streamlining data collection and communication across organizations, along with its internal modular newsletter campaign manager.',
            'details' => 'Built the promotional website and newsletter system with block editor, audience segmentation, and scheduled delivery.',
            'stack' => 'Laravel · Web Development · Email Automation · Modular Design · SaaS',
            'image' => '/assets/images/chow.webp',
        ],
    ],
];
