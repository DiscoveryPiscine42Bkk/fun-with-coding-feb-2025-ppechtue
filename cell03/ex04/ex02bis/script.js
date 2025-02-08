$(document).ready(function() {
    $("#calculate").click(function() {
        let num1 = parseInt($("#num1").val(), 10);
        let num2 = parseInt($("#num2").val(), 10);
        let operator = $("#operator").val();

        if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
            alert("Error :(");
            return;
        }

        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    alert("It's over 9000!");
                    console.log("It's over 9000!");
                    return;
                }
                result = num1 / num2;
                break;
            case "%":
                if (num2 === 0) {
                    alert("It's over 9000!");
                    console.log("It's over 9000!");
                    return;
                }
                result = num1 % num2;
                break;
        }

        alert("Result: " + result);
        console.log("Result:", result);
    });

    setInterval(function() {
        alert("Please, use me 🥹🥹🥹 ...");
    }, 30000);
});
