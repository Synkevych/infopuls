 
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
console.log(
            f.name.val() 
            + "\n" + f.surname.val() 
            + "\n" + seasonsList 
            + "\n" + f.fruit.filter(":checked").val() 
            + "\n" + f.animal.val() 
            + "\n" + f.rewiew.val());
        
console.log(
        f.getLabelText("b-form__label_name")
        + " - " + f.getValue(f.name)+"\n"
        + f.getLabelText("b-form__label_surname")
        + " - " + f.getValue(f.surname)
                    + "\n" + f.getValue(f.seasons, " ") 
                    + "\n" + f.getValue(f.fruit) 
                    + "\n" + f.getValue(f.animal) 
                    + "\n" + f.getValue(f.rewiew));
    };
    
    f.getValue = function (oElem, sSeparator) {
        var elemType = oElem.attr("type")
            , tagName = oElem.prop("tagName")
            ;
        if(elemType == "radio"){
           return oElem.filter(":checked").val();
        }
        else if(elemType =="text" || elemType == "password" || tagName == "SELECT" || "TEXTAREA"){
                return oElem.val();
                }
        else if(elemType =="checkbox"){
            var checkboxesList = "";
               oElem.filter(":checked")
                   .each(function () {
                var currentCheckbox = $(this);
                checkboxesList += currentCheckbox.val() + sSeparator;
            });
            return checkboxesList;
        }
    }
    f.getLabelText = function(className){
        return f.form.find("." + className).text();
}
        
    f.translate = function(event){
            event.preventDefault();
            var currentLang = $(this).data("lang");
           // console.log($(this).data("lang"));
            $.each(pageSettings.langs, function(sClassName, aTexts){
                f.form.find("." + sClassName).text(aTexts[currentLang]);
            });
    }
        
    f.form.find(".b-langs__lang").click(f.translate);
    f.btn.click(f.showInfo);
}