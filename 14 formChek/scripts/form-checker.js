$(document).ready ( function(){
   var v = $("td").find("img");
    $(v).hide();
})

//function expression - без названия функции
function FormChecker(sSelector){
    var f = this; 
    f.form = $(sSelector); ///форма 
    f.textFields = f.form.find(".b-textfield"); // массив текстових полей 
    f.errorMesage = f.form.find(".b-form__message_error"); // див с сообщением об ошибке 
//метод проверки всех полей     
    f.checkTextFields = function(event){ 
        event.preventDefault();
        var formError = false ;
        f.textFields.each(function(){
           var currentTextfield = $(this)
           ,textfieldError = f.checkTextField(currentTextfield)
           ;
            if(textfieldError){
                formError = true;
            };
        });
        var effect = formError ? "slideDown" : "slideUp";
        f.errorMesage[effect]();
        
    }
    //метод проверки одного поля 
    f.checkTextField = function(textField){
        /* 
        this поле которое потеряло фокус (метод  f.checkTextField был вызван в момент, когда пользователь перешел на следующее поле)
        textField - поле из масива полей которое нужно проверить при нажатия пользователем кнопки формы (метод f.checkTextField был вызван из цикла для перебора всех полей формы метода f.checkTextFields)
    */
        var currentTextField = textField.length ? textField : $(this);
       // console.log('currentTextField = '+currentTextField);
        var 
        currentTextFieldContent = currentTextField.val();
       // console.log('currentTextFieldContent : '+currentTextFieldContent);
        var         
        currentRegExp = new  RegExp(Settings.get("regexps")[currentTextField.attr("name")]);
       // console.log('currentRegExp'+currentRegExp);
        var
        textfieldError =! currentTextFieldContent.match(currentRegExp);
       // console.log(textfieldError);
        currentTextField.toggleClass("b-textfield_error", textfieldError);

        console.log(currentTextField);
        return textfieldError;
       
        // console.log(textfieldError);
        // предовращает отправку на сервер 
        // prevent - при нажатии на submit  
    //console.log(Settings.get[currentTextField.attr("name")]);
    }
//на форму, собития отправки, назначение метода проверки всех полей 
    f.form.submit(f.checkTextFields);
//на текстовие поля на событе потеря фокуса назначаем метод проверки одного поля 
    f.textFields.blur(f.checkTextField);
}
