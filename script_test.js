QUnit.module('Тестирование функций калькулятора', function() {
    QUnit.test('Тест функции add()', function(assert) {
        assert.equal(calc.add(5, 3), 8, '5 + 3 = 8');
    });

    QUnit.test('Тест функции subtract()', function(assert) {
        assert.equal(calc.subtract(10, 6), 4, '10 - 6 = 4');
    });

    QUnit.test('Тест функции multiply()', function(assert) {
        assert.equal(calc.multiply(4, 7), 28, '4 * 7 = 28');
    });

    QUnit.test('Тест функции divide()', function(assert) {
        assert.equal(calc.divide(20, 5), 4, '20 / 5 = 4');
    });

    QUnit.test('Тест функции divide() при делении на 0', function(assert) {
        assert.equal(calc.divide(20, 0), "Ошибка: Деление на ноль!", '20 / 0 = Ошибка: Деление на ноль!');
    });
});