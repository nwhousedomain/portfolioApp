function GetClock() {
    var d = new Date();
    var nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getYear();
    if (nyear < 1000) nyear += 1900;
    var nhour = d.getHours(), nmin = d.getMinutes(), ap;
    if (nhour == 0) { ap = " AM"; nhour = 12; }
    else if (nhour < 12) { ap = " AM"; }
    else if (nhour == 12) { ap = " PM"; }
    else if (nhour > 12) { ap = " PM"; nhour -= 12; }

    if (nmin <= 9) nmin = "0" + nmin;

    document.getElementById('datebox').innerHTML = "" + (nmonth + 1) + "/" + ndate + "/" + nyear;
    document.getElementById('clockbox').innerHTML = " " + nhour + ":" + nmin + ap + "";
}

window.onload = function () {
    GetClock();
    setInterval(GetClock, 1000);
}

$(function () {
    // run the currently selected effect
    function runEffect() {
        // get effect type from
        var selectedEffect = $("#effectTypes").val();

        // most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if (selectedEffect === "scale") {
            options = { percent: 100 };
        } else if (selectedEffect === "size") {
            options = { to: { width: 280, height: 185 } };
        }

        // run the effect
        $("#effect").show(selectedEffect, options, 500, callback);
    };

    //callback function to bring a hidden box back
    function callback() {
        setTimeout(function () {
            $("#effect:visible").removeAttr("style").fadeOut();
        }, 1000);
    };

    // set effect from select menu value
    $("#button").click(function () {
        runEffect();
    });

    $("#effect").hide();
});