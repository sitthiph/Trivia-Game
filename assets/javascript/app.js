let answer = 0;
let time, down;
let countdown = 15;
$('document').ready(function() {
    function sub() {
        clearInterval(time);
        clearInterval(down);
        for (let i = 1; i <= 5; i++) {
            let radio = document.getElementsByName("question" + i);
            for (let j = 0; j < radio.length; j++) {
                if (radio[j].value === "1") {
                    if (radio[j].checked) {
                        answer++;
                    }
                }
            }
        }
        $("#answer").html("You answered " + answer + "/5 correct!");
        $("#answer").css("display", "block");
        $("#question").css("display", "none");
    }

    $("#submit").click(sub);
    $("#start").click(function () {
        time = setInterval(sub, 15001);
        $(this).css("display", "none");
        $("#countdown").css("display", "block");
        $("#question").css("display", "block");
        count();
    });

    function count() {
        down = setInterval(function () {
            $("#countdown").html("Time remaining : " + --countdown + " seconds");
            if(countdown === 0)
                clearInterval(down);
        }, 1000);
    }
});