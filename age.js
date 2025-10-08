const birthyear = [9, 30, 2010];
const programmingYear = [11, 10, 2022];
let age = 0;
let programming = 0;
const currentdate = new Date()
const currentyear = currentdate.getFullYear();
const currentmonth = currentdate.getMonth() + 1;
const currentday = currentdate.getDate();
age = currentyear - birthyear[2];
if (currentmonth < birthyear[0] || (currentmonth === birthyear[0] && currentday < birthyear[1])) {
    age--;
}
programming = currentyear - programmingYear[2];
if (currentmonth < programmingYear[0] || (currentmonth === programmingYear[0] && currentday < programmingYear[1])) {
    programming--;
}
console.log(age);
const agecounter = document.getElementById("age");
agecounter.textContent = age;
const programmingCounter = document.getElementById("programming");
programmingCounter.textContent = programming;
