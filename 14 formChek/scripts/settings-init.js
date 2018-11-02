var settings = {
    regexps : {
        "name": "^[a-zA-Zа-яА-Я\\-]{2,20}$" // буквы разн регистр, пробел, -
    ,   "brand": "^[a-zA-Z]{2,20}$" // лат буквы 2,20
    ,   "price": "^[0-9]{1,5}(\\.[0-9]{1,2})?$" // цена 
    ,   "description": "^.+$" // любые символы (без пер строки) от 1 и более
}
};
Settings.init(settings);
Settings.get = function(sSettingName){
    return Settings.data[sSettingName];
    
    
}