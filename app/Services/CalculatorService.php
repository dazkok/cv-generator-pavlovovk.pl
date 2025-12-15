<?php

namespace App\Services;

class CalculatorService
{
    public function addIntegers(int $a, int $b): int
    {
        return $a + $b;
    }

    public function validateString($pdo)
    {
        $stmt = $pdo->prepare('SELECT * FROM largeTable'); //select only needed columns if possible
        $stmt->execute();

        while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
            // manipulate the data here
        }
    }

    function formatPhoneNumber(string $phoneNumber, string $delimiter = '-'): string
    {
        $cleanedNumber = preg_replace('/[^0-9]/', '', $phoneNumber);

        if (strlen($cleanedNumber) !== 10) {
            return "Invalid length: " . $cleanedNumber;
        }

        $part1 = substr($cleanedNumber, 0, 3);
        $part2 = substr($cleanedNumber, 3, 3);
        $part3 = substr($cleanedNumber, 6, 4);

        return $part1 . $delimiter . $part2 . $delimiter . $part3;
    }

    function getColorName(string $name): string
    {
        $color = dechex(crc32($name));
        return substr($color, 0, 6);
    }
}
