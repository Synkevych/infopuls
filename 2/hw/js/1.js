"use stric";
/*
1. коммунальные услуги
долг
сумма за месяц
день оплаты за предыдущий месяц до 20 числа - скидка, если после 20, то добавить пеню
*/
//
/*var newClient = (src = "script/1.js" ? newClient.value);
document.write(newClient);*/
console.log("Рахунок: ", newClient.account - 1);
console.log("Попередни показники лічильника: ", newClient.previousScore);
console.log("Попередня оплата: ", newClient.previousPaid);
//
if ((newClient.previousPaid == newClient.previousScore) && newClient.previousPaymentDay <= 20) {
    console.log("Заборгованості немає.");
}
else if (newClient.previousPaid == newClient.previousScore && newClient.previousPaymentDay > 20) {
    console.log("Несвоєчасна сплата. Оплачено ", newClient.previousPaymentDay, " дня.");
    for (var i = 0; i < (newClient.previousPaymentDay - 20); i++) {
        newClient.debt += (newClient.previousScore * 0.01);
    }
    console.log("Борг становить: ", ((newClient.previousPaid - newClient.debt - newClient.previousScore) * -1), " грн.");
}
console.log("  ");
console.log("  ");