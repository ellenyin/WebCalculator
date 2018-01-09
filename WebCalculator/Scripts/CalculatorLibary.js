var txtInput;
var txtResult;

function initialize() {
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i).addEventListener('click', numberClick, false);
    }
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');

    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);

}
function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
}
function minusClick() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
}

function numberClick() {
    txtInput.value = txtInput.value == '0' ?
        this.innerText : txtInput.value + this.innerText;
}

function clearEntry() {
    txtInput.value = '0';
}
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