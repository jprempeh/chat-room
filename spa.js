/**
 * Created by Joe on 9/15/14.
 */
var today = new Date();


console.log(today.getFullYear());
console.log(today.toDateString());
var est = new Date('Dec 5, 1986 08:45:55');
var difference = today.getTime() - est.getTime();

difference = (difference / 31556900000);

console.log(Math.floor(difference) + " years strong!");
