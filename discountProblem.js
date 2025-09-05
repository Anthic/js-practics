// const price = 4000;
// if (price >= 5000) {
//   const discount = (price / 100) * 10;
//   const pay = price - discount;
//   console.log(pay);
// } else if (price >= 2500) {
//   const discount = (price / 100) * 5;
//   const pay = price - discount;
//   console.log(pay);
// }else{
//     console.log(price);
// }
//problem one
function myShopDiscount(price) {
  if (price >= 3000) {
    const discount = (price / 100) * 5;
    const pay = price - discount;
    console.log(pay);
  } else if (price >= 6000) {
    const discount = (price / 100) * 15;
    const pay = price - discount;
    console.log(pay);
  } else {
    console.log(price);
  }
}
myShopDiscount(4500)
