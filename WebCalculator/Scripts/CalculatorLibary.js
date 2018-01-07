var txtInput;

function initialize() {
    txtInput = document.getElementById('txtInput');
    document.getElementById('btn5').addEventListener('click', numberClick, false);
}

function numberClick() {
    txtInput.value = txtInput.value == '0' ?
        this.innerText : txtInput.value + this.innerText;
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