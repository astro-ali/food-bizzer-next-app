

let date1 = "2021-09-10T19:30:23.042Z";

let date2 = new Date(date1);
let now = new Date();

let time = date2.getTime();
let now_time = now.getTime();


let wait = new Date(now_time - time);

console.log(`${wait.getHours()}h ${wait.getMinutes()}m`);
