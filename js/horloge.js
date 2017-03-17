var horloge = {
    divHeure : document.querySelector("#heure"),
    divMinute : document.querySelector("#minute"),
    divSeconde : document.querySelector("#seconde"),
    toggle : true,
    date : new Date(),
    showDate : function()
    {
        if(horloge.toggle)
        {
            horloge.date.setSeconds(horloge.date.getSeconds() + 1);
        }

        var heure = (horloge.date.getHours() < 10) ? "0" + horloge.date.getHours() : horloge.date.getHours();
        var minute = (horloge.date.getMinutes() < 10) ? "0" + horloge.date.getMinutes() : horloge.date.getMinutes();
        var seconde = (horloge.date.getSeconds() < 10) ? "0" + horloge.date.getSeconds() : horloge.date.getSeconds();

        horloge.divHeure.innerHTML = heure + " : ";
        horloge.divMinute.innerHTML = minute + " : ";
        horloge.divSeconde.innerHTML = seconde;
    },
    modif : function (param, sign)
    {
        switch (param)
        {
            case "H":
                (sign == "+") ? horloge.date.setHours(horloge.date.getHours()+1) : horloge.date.setHours(horloge.date.getHours()-1);
                break;
            case "M":
                (sign == "+") ? horloge.date.setMinutes(horloge.date.getMinutes()+1) : horloge.date.setMinutes(horloge.date.getMinutes()-1);
                break;
            case "S":
                (sign == "+") ? horloge.date.setSeconds(horloge.date.getSeconds()+10) : horloge.date.setSeconds(horloge.date.getSeconds()-10);
                break;
            default:
                console.error("Argument possible, [(H, M, S), (+,-)].");
                break;
        }
    },
    reset : function()
    {
        horloge.date = new Date();
    },
    start: function() {
        setInterval(horloge.showDate, 1000)
    },
    stop : function ()
    {
        if(horloge.toggle)
        {
            horloge.toggle = false;
        }
        else
        {
            horloge.toggle = true;
        }
    }
};
horloge.start();