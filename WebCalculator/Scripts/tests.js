﻿module('Calculator Test Suite', { setup: function () { initialize(); } });

/*test("Btn5 Click Test", function () {
    expect(1);
    var btn = document.getElementById('btn5');
    QUnit.triggerEvent(btn, "click");
    var result = txtInput.value;
    var expected = '5';
    equal(result, expected, 'Expected value: ' + ' Actual value: ' + result);
});*/

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById('btn' + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal(txtInput.value.length, expectedLength, 'Expected string length: ' + expectedLength + ' Actual value: ' + txtInput.value.length);
    }
});

test("Add Test", function () {
    expect(1);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '30';
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
});

test("Subtract Test", function () {
    expect(1);
    txtInput.value = '7';
    txtResult.value = '20';
    var btnMinus = document.getElementById('btnMinus');
    QUnit.triggerEvent(btnMinus, "click");
    var expected = '13';
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
});

test("Clear Entry Test", function () {
    expect(1);
    txtInput.value = '10';
    QUnit.triggerEvent(btnClearEntry, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});