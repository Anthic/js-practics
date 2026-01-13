//maximum
let arr = [20, 5, 9, 500, 666, 555, 15, 64, 123, 20];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);


//minimun number finding
let arr1=[20,55,56,88,89,70,8,6,.5]
let min = arr1[0]
for (let i = 1; i < arr1.length; i++) {
   if (min>arr1[i]) {
    min= arr1[i]
   }
    
}
console.log(min);