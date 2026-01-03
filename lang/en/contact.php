<?php

return [
    'title' => 'Let’s work together',
    'subtitle' => 'I’m open to discussing product work, long-term collaboration, or selective freelance projects.',

    'form' => [
        'title' => 'Send me a message',
        'description' => 'Tell me briefly about your idea, project, or role.',
        'divider' => 'Contact form',

        'fields' => [
            'name' => [
                'label' => 'Your Name',
                'error' => 'Name must be at least 2 characters.',
            ],
            'email' => [
                'label' => 'Your Email',
                'error' => 'Please enter a valid email address.',
            ],
            'message' => [
                'label' => 'Your Message',
                'error' => 'Message must be at least 10 characters.',
            ],
        ],

        'actions' => [
            'submit' => 'Send Message',
            'submitting' => 'Sending…',
        ],

        'feedback' => [
            'success' => 'Thanks! Your message has been sent successfully.',
            'error' => 'Something went wrong. Try again later.',
        ],
    ],

    'footer' => 'Prefer email or LinkedIn? I usually reply within 24 hours.',
];
