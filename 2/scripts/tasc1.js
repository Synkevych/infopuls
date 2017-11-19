var sum = 9000,
    fullPay = true,
    discount, month = 3. discount = 0.1;
if (fullPay === true) {
    var total = sum * month;
    sum -= sum * discount;
    console.log("Ваша скидка 10%", "Вы заплатили:", sum);
}
console.log("Вы заплатили:", sum);  