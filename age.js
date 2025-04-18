const birthyear = [9, 30, 2010];
let age = 0;
const currentdate = new Date()
const currentyear = currentdate.getFullYear();
const currentmonth = currentdate.getMonth() + 1;
const currentday = currentdate.getDate();
age = currentyear - birthyear[2];
if (currentmonth < birthyear[1] || (currentmonth === birthyear[1] && currentday < birthyear[0])) {
    age--;
}
console.log(age);
const agecounter = document.getElementById("age");
agecounter.textContent = age;