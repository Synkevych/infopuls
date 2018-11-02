function Form(sSelector) {
    //sSelector parameter 
    var f = this; // name form 
    f.form = $(sSelector); // this is form 
    f.name = f.form.find(".b-form__name");
    f.surname = f.form.find(".b-form__surname");
    f.seasons = f.form.find(".b-form__season");
    f.fruit = f.form.find(".b-form__fruit");
    f.animal = f.form.find(".b-form__animals");
    f.rewiew = f.form.find(".b-form__review");
    f.btn = f.form.find(".b-form__ok-button");
    //
    f.showInfo = function () {
        var seasonsList = "";
        f.seasons.filter(":checked").each(function () {
                var currentSeason = $(this);
                seasonsList += currentSeason.val() + " ";
            })
            //
            //
        console.log(f.name.val() + "\n" + f.surname.val() + "\n" + seasonsList + "\n" + f.fruit.filter(":checked").val() + "\n" + f.animal.val() + "\n" + f.rewiew.val());
    };
    f.getValue = function (oElem) {
        var elemType = oElem.attr("type")
            , tagName = oElem.prop("tagName");
    }
    f.btn.click(f.showInfo);
}