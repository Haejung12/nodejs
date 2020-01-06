/*
let now = new Date();

now.setDate(now.getDate() + 100);
console.log(now.toLocaleString());
*/


let now = new Date();

now.setDate(now.getDate() + 100);
console.log(now.toString());    //Sun Apr 12 2020 10:49:41 GMT+0900 (GMT+09:00)
console.log(now.toLocaleString());             //2020-4-12 10:49:41
console.log(now.toLocaleDateString());       //2020-1-3
console.log(now.toLocaleTimeString());            //10:48:42


now = new Date();
//let dDay = new Date('November 15, 2020');
let dDay = new Date('2020-11-15');
let interval = dDay.getTime() - now.getTime();
interval = Math.floor(interval / (1000 * 60 *60 * 24));
console.log(`수능 D-${interval}`);

