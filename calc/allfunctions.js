// These big prescision numbers... Only wanna call them when required...
/////////You know what these do,,,,, get the values!!!!!!!!!!!!!
function givePlank() {
    return (6.62607015 * (10 ** (-34)));
}

function giveReducedPlank() {
    return (giveplank() / (2 * (dataObj.π)));
}

function giveGravitationalConstant() {
    return (6.6743 * (10 ** (-11)));
}

function giveAvogadrosNumber() {
    return ((6.02214) * (10 ** (23)));
}

function givePi() {
    return 3.1415926535897932384626433;
}

function giveLightSpeed() {
    return 299792458;
}

function giveEulersNumber() {
    return 2.71828182845904523536;
}
/////////END THE GET VALUE ERA
///////*****now i'm ready for a checking function*****/////////////////
function isEnter(keyEvent) {
    if (keyEvent.key == 'Enter') {
        return true;
    } else { return false; }
}

function isEqualsTo(symbol) {
    if (symbol == '=') {
        return true;
    } else { return false; }

}

function isEmpty(value) {
    console.log(value);
    if ((/^\s*$/).test(value)) {
        return true;
    } else { return false; }
}

function isDivideOrMultiply(symbol) {
    return (["X", "÷"].includes(symbol));

}

function allButtonsDoesnotInclude(key) {
    if (!allButtons.includes(key)) {
        return true;
    } else { return false; }

}

function doNotPressAnythingFor(KeyEvent) {
    KeyEvent.preventDefault();
}

function afterInputFocus(focusEvent) {
    input.addEventListener("keypress", inputFocusAndKeypress);
}

function changeInputValue() {
    for (key in changeToObjects) {
        var currentValue = input.value;
        var toBeChangedInto = changeToObjects[key];
        if (isEmpty(currentValue)) {
            toBeChangedInto = "1" + toBeChangedInto;
        }
        currentValue = currentValue.replaceAll(key, toBeChangedInto);
    }
    input.value = eval(currentValue);
}

function ifEnterDoThisWith(currentKey) {
    if (currentKey == "Enter") { changeInputValue(); }
}

function inputFocusAndKeypress(Keyevent) {
    let currentKey = Keyevent.key;
    if (allButtonsDoesnotInclude(currentKey)) {
        doNotPressAnythingFor(Keyevent);
        // no other keys would be pressed
    } else {
        input.value = input.value;
    }

    ifEnterDoThisWith(currentKey);
}

function forEqualsToButton() {
    for (var key in changeToObjects) {
        let toBeChangedInto = changeToObjects[key];
        if (isEmpty(input.value)) {
            toBeChangedInto = "1" + toBeChangedInto;
        }
        input.value = (input.value).replaceAll(key, toBeChangedInto);
    }
}

function button(event) {
    symbolornum = event.target.innerText;
    if (isDivideOrMultiply(symbolornum)) {
        input.value = "(" + input.value + ")" + symbolornum;
    } else if (isEqualsTo(symbolornum)) {
        forEqualsToButton();
        input.value = eval(input.value);
    } else {
        input.value = input.value + symbolornum;
    }
}