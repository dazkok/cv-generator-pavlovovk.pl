<?php

namespace Tests\Unit;

use App\Services\CalculatorService;
use PHPUnit\Framework\TestCase;

class FunctionsTest extends TestCase
{
    public function testAddTwoPositiveIntegers(): void
    {
        $calculatorService = new CalculatorService();
        $this->assertSame(5, $calculatorService->addIntegers(2, 3));
    }

    public function testAddTwoNegativeIntegers(): void
    {
        $calculatorService = new CalculatorService();
        $this->assertSame(-5, $calculatorService->addIntegers(-2, -3));
    }

    public function testAddPositiveAndNegativeIntegers(): void
    {
        $calculatorService = new CalculatorService();
        $this->assertSame(1, $calculatorService->addIntegers(3, -2));
    }

    public function testAddZeroToInteger(): void
    {
        $calculatorService = new CalculatorService();
        $this->assertSame(3, $calculatorService->addIntegers(3, 0));
    }

    public function testAddingIsCommutative(): void
    {
        $calculatorService = new CalculatorService();
        $this->assertSame($calculatorService->addIntegers(2, 3), $calculatorService->addIntegers(3, 2));
    }
}
