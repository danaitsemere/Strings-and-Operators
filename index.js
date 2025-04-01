let string = `The child walked to the market`;//Answer for number 1 
let updatedstring= string[0].toUpperCase() +string.slice(1);
console.log(updatedstring); 


let addchar = string.slice(0, 3) + "m" + string.slice(3);//2
console.log(addchar)


const fullString = "hello world, hello JavaScript!";//3
const slicedString= "hello";
const count = fullString.split(slicedString).length - 1;
console.log(count);

console.log(fullString.slice(27));//4

const  hobbies= "swimming, eating food, biking, and playing volleyball.";//5
console.log(hobbies.slice(0,3));
  
let myPlan= "I will wash my shoes";//6
let ascendingOrder = myPlan.split('').sort().join('');
console.log(ascendingOrder);


const totalPrice="Total price is 1, 2 0  0    , 6 0 0 , 29 5 $     ";//7
console.log(totalPrice.replaceAll(' ',''));

const greet=`greeting`;//8
console.log(greet.indexOf("t"));

const removal = "Beriha wants to delete the first two letters from removal variables";//9

const removedchar = removal.slice(2);
console.log(removedchar);

console.log(removal.slice(0,[removal.length-2]));//10




 












