$(document).ready(function () {
    $(".alert").hide();
        $("button").click(function () {
            var email = $("#email").val()
            $("#alert").html(email)
            $(".alert").toggle();
            var alert2 = document.getElementById("alert");
            alert2.textContent += " has been registered";
            console.log(alert2);
        });
    });