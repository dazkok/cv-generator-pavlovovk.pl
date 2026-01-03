<?php

return [
    'title' => 'Współpracujmy',
    'subtitle' => 'Chętnie porozmawiam o pracy nad produktem, długoterminowej współpracy lub wybranych projektach freelance.',

    'form' => [
        'title' => 'Wyślij mi wiadomość',
        'description' => 'Napisz krótko o swoim pomyśle, projekcie lub roli.',
        'divider' => 'Formularz kontaktowy',

        'fields' => [
            'name' => [
                'label' => 'Twoje imię',
                'error' => 'Imię musi mieć co najmniej 2 znaki.',
            ],
            'email' => [
                'label' => 'Twój email',
                'error' => 'Wprowadź poprawny adres email.',
            ],
            'message' => [
                'label' => 'Twoja wiadomość',
                'error' => 'Wiadomość musi mieć co najmniej 10 znaków.',
            ],
        ],

        'actions' => [
            'submit' => 'Wyślij wiadomość',
            'submitting' => 'Wysyłanie…',
        ],

        'feedback' => [
            'success' => 'Dziękuję! Twoja wiadomość została wysłana.',
            'error' => 'Coś poszło nie tak. Spróbuj ponownie później.',
        ],
    ],

    'footer' => 'Wolisz email lub LinkedIn? Zazwyczaj odpowiadam w ciągu 24 godzin.',
];
