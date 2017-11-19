"use stric";
/*
2. киевэнерго
показания
3 типа диапазонов
*/
// сгенерировать показания счетчика 
// получить тариф для пользователя
console.log("Рахунок: ", newClient.account);
console.log("Споживач: ", newClient.surname, newClient.name, " ");
console.log("Показники лічильника:", newClient.score); {
    if (newClient.score > 100 && newClient.score < 300) {
        rare = 1;
        console.log("Загальний тариф: ", rare, "більше 100 м. куб");
    }
    else if (newClient.score > 300) {
        rare = 1.2;
        console.log("Загальний тариф: ", rare, "більше 300 м. куб");
    }
    else {
        console.log("Загальний тариф: ", rare, "до 100 м. куб");
    }
}
if (newClient.livesInCity == true) {
    rare -= 0.01;
    privileges += "живе в місті";
}
if (newClient.hasLargeFamily == true) {
    rare -= 0.2;
    if (privileges.length > 0) privileges += ", ";
    privileges += " багатодітна сім'я.";
}
if (newClient.hasElectricStove == true) {
    rare += 0.1;
    rise += "електронна плита (+0.1)";
}
if (newClient.legalEntity == true) {
    rare += 0.2;
    if (rise.length > 0) rise += ", ";
    rise += " фізична особа (+0.2)";
}
if (newClient.hostel == true) {
    rare = 0.5;
    privileges = " гуртожиток";
    rise = "";
}
console.log("Пільги: ", ((privileges.length > 0) ? privileges : "немає."));
console.log("Ваш тариф: ", rare, (rise.length > 0 ? rise : rise = ""), " грн.");
newClient.toPay = (newClient.score * rare + newClient.debt).toFixed(2);
console.log("До оплати: ", (newClient.toPay), " грн.", (newClient.debt > 0 ? ("Разом з заборгованістю " + newClient.debt + " грн.") : ""));
//
console.log("  ");
console.log("  ");