function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    }
    else {
        elem.className = "valid";
    }
}

function sendForm() {
    for (var i = 0; i < form1.elements.length; ++i) {
        if (form1.elements[i].className === "invalid") {
            alert("Допущены ошибки при заполнении формы.");
            event.preventDefault();
            return;
        }
    }
}