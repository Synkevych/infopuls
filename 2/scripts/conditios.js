"use stric";
var orderSum = 15400,
    deliveryPrice = 35,
    discount = 0,
    vipClient = false,
    bonusCard = 300,
    bonusToUah = 10;
if (orderSum >= 500) {
    console.log("Бесплатная доставка");
    deliveryPrice = 0;
} else {
    console.log("стоимость доставки:", deliveryPrice, "грн.");
}
if (orderSum > 700 && orderSum <= 2000) {
    discount = 3;
}
if (orderSum > 2000 && orderSum <= 3000) {
    discount = 5;
}
if (orderSum > 5000) {
    discount = 10;
    //    if (vipClient) {
    //        console.log("Подарок от фирмы!");
    //    }
    console.log(vipClient ? "Подарок от фирмы" : "Вы можете стать вип клиентом")
}
// orderSum = orderSum - orderSum * discount / 100;
orderSum -= orderSum * discount / 100;
console.log("Ваша скидка: ", discount + "%");
console.log("Ваша со скидкой: ", orderSum, "грн.");
bonusCard += orderSum / bonusToUah;
orderSum += deliveryPrice;
console.log("Сума с доставкой: ", orderSum, "грн.");
if (bonusCard >= 1000 && orderSum >= 3000) {
    orderSum -= bonusCard;
    bonusCard = 0;
}
console.log("Бонусы сняты!", orderSum, "грн");