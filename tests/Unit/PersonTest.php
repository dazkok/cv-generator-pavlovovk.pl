<?php

namespace Tests\Unit;

use App\Models\Person;
use PHPUnit\Framework\TestCase;

class PersonTest extends TestCase
{
    public function testGetFullNameIsFirstNameAndSurname(): void
    {
        $person = new Person;

        $person->first_name = 'Pavlo';
        $person->surname = 'Vovk';

        $this->assertSame('Pavlo Vovk', $person->getFullName());
    }
}
