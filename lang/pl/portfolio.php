<?php

return [
    'title' => 'Wybrane Projekty',
    'text' => 'Systemy o dużej skali i krytycznym znaczeniu biznesowym, nad którymi pracowałem.',
    'projects' => [
        'suzuki_pl' => [
            'title' => 'Platforma Suzuki Polska (suzuki.pl)',
            'subtitle' => 'Motoryzacja · Enterprise',
            'description' => 'Monolityczna platforma webowa dla polskiego rynku Suzuki, pełniąca rolę głównej strony publicznej oraz systemu wewnętrznego.',
            'details' => 'Utrzymanie i modernizacja dużego monolitu opartego na Laravelu, w tym znaczące aktualizacje PHP i frameworka. Rozbudowa i optymalizacja panelu administracyjnego, znacznie redukująca pracę manualną i usprawniająca procesy wewnętrzne.',
            'stack' => 'Laravel · PHP · Systemy administracyjne · Wydajność',
        ],
        'suzuki_apps' => [
            'title' => 'Moje Suzuki & Suzuki Service App',
            'subtitle' => 'Motoryzacja · Platformy klienckie i dealerskie',
            'description' => 'Dwie powiązane aplikacje mobilne oparte na wspólnej architekturze mikroserwisów zbudowanej w Laravel Lumen.',
            'details' => 'Aplikacja kliencka umożliwia zarządzanie pojazdami, dostęp do elektronicznej książki gwarancyjnej, kontrolę przeglądów, kontakt z dealerem oraz powiadomienia push. Aplikacja serwisowa wspiera inspekcje, potwierdzanie zakresu i ceny prac oraz komunikację z klientem.',
            'stack' => 'Laravel Lumen · Mikroserwisy · REST API · Procesy biznesowe',
        ],
        'onecatering' => [
            'title' => 'System zarządzania cateringiem szkolnym',
            'subtitle' => 'Edukacja · System biznesowy',
            'description' => 'Dedykowana platforma do zarządzania cateringiem dla szkół i firm cateringowych.',
            'details' => 'Administratorzy zarządzają szkołami, klasami, uczniami, menu i płatnościami. Rodzice jednym kliknięciem kontrolują harmonogram posiłków i opłaty. Kuchnie codziennie otrzymują dokładne dane do przygotowania posiłków.',
            'stack' => 'Laravel · Logika biznesowa · Płatności · Automatyzacja operacyjna',
        ],
    ],
];
