var goods = {
    "notebook ASUS": 10000
    , "PC HP": 17000
    , "notebook apple": 25000
};
$.each(goods, function (title, price) {
    //console.log(title, "-", price, "uah")
});
// this code use only js 
console.log("\n");
for (var title in goods) {
    //console.log(title, "-", goods[title], "uah");
}
/* in js
 for(var title in goods){
  console.log(title, "-", goods[title], "uah");
 }
*/