const birthyear = [9, 30, 2010];
const programmingYear = [11, 10, 2022];
let age = 0;
let programming = 0;
const currentdate = new Date()
const currentyear = currentdate.getFullYear();
const currentmonth = currentdate.getMonth() + 1;
const currentday = currentdate.getDate();
age = currentyear - birthyear[2];
if (currentmonth < birthyear[1] || (currentmonth === birthyear[1] && currentday < birthyear[0])) {
    age--;
}
programming = currentyear - programmingYear[2];
if (currentmonth < programmingYear[1] || (currentmonth === programmingYear[1] && currentday < programmingYear[0])) {
    programming--;
}
console.log(age);
const agecounter = document.getElementById("age");
agecounter.textContent = age;
const programmingCounter = document.getElementById("programming");
programmingCounter.textContent = programming;