
///<reference path="_references.js" />
(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    var txtInput;
    var txtResult;

    ns.initialize = function () {
        var calculator = new ns.Calculator();
        $('button[class^="btnNumber"]').on('click', calculator.numberClick);
        $('#btnPlus').on('click', calculator.plusClick);
        $('#btnMinus').on('click', calculator.minusClick);
        $('#btnClearEntry').on('click', calculator.clearEntry);
        $('#btnClear').on('click', calculator.clear);
        calculator.clear();

        /*for (var i = 0; i < 10; i++) {
            document.getElementById('btn' + i).addEventListener('click', numberClick, false);
        }
        txtInput = document.getElementById('txtInput');
        txtResult = document.getElementById('txtResult');

        document.getElementById('btnPlus').addEventListener('click', plusClick, false);
        document.getElementById('btnMinus').addEventListener('click', minusClick, false);
        document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
        document.getElementById('btnClear').addEventListener('click', clear, false);
        ///document.getElementById('btnequal').addEventListener('click', equal, false);
        clear();*/
    }

    ns.Calculator = (function () {

        function Calculator() {
        }

        //new function for click the number buttons
        Calculator.prototype.numberClick = function () {
            /*txtInput.value = txtInput.value == '0' ?
                this.innerText : txtInput.value + this.innerText;*/
            $('#txtInput').val($('#txtInput').val() == '0' ?
                $(this).text() : $('#txtInput').val() + $(this).text());
        };

        //function for add feature
        Calculator.prototype.plusClick = function () {
            $('#txtResult').val(Number($('#txtResult').val()) + Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
            /* txtResult.value = Number(txtResult.value) + Number(txtInput.value);
            clearEntry();*/
        };
        Calculator.prototype.minusClick = function () {
            $('txtResult').val(Number($('#txtResult').val()) - Number($('#txtInput').val()));
            Calculator.prototype.clearEntry();
            /*txtResult.value = Number(txtResult.value) - Number(txtInput.value);
            clearEntry();*/
        };
        Calculator.prototype.clearEntry = function () {
            $('#txtInput').val('0');
            /*txtInput.value = '0';*/
        };
        Calculator.prototype.clear = function () {
            $('#txtInput').val('0');
            $('#txtResult').val('0');
            /*txtInput.value = '0';
            txtResult.value = '0';*/
        };

        return Calculator;
    }());
})();


        /*ns.Calculator = (function () {

            function equal() {
                if (operation == 0) {
                    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
                    txtInput.value = '0';
                }
                else if (operation == 1) {
                    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
                    txtInput.value = '0';
                }
            }

            function plusClick() {
                operation = 0;
                txtResult.value = txtInput.value;
                txtInput.value = '0';
            }


            function minusClick() {
                operation = 1;

                txtResult.value = txtInput.value;
                txtInput.value = '0';

            }

            function numberClick() {
                txtInput.value = txtInput.value == '0' ?
                    this.innerText : txtInput.value + this.innerText;
                console.log('Hello');
            }

            function clearEntry() {
                txtInput.value = '0';
            }

            function clear() {
                txtInput.value = '0';
                txtResult.value = '0';
            }
        }()); */

        //It ends here


        /*function numberClick2() {
            if (txtInput.value == '0') {
                txtInput.value = this.innerText;
            } else {
                txtInput.value = txtInput.value + this.innerText;
            }
        }
        
        function numberClick3() {
            txtInput.value = (function () {
                if (txtInput.value == '0') {
                    return this.innerText;
                } else {
                    return txtInput.value + this.innerText;
                }
            })();
        }*/

    