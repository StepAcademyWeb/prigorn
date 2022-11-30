let min = prompt("укажите число от 0 до 59");
if(min <= 15){
    alert("это первая четверть часа");
}
else if(min > 15 && min <= 30){
    alert("это вторая четверть часа");
}
else if(min > 30 && min <= 45){
    alert("это третья четверть часа");
}
else if(min > 45 && min <= 60){
    alert("это четвертая четверть часа");
}
else {
    alert("не то жмакаете!!");
}
//задание №7
alert("задание №7");
let a; 
do{
    a = prompt("укажите число");
    if(a != 10){
        alert("неверно!");
    }
}while(a != 10)
if(a == 10){
    alert("верно!");
}
//задание №8
alert("задание №8");
let day = prompt("укажите количество дней");
let hour = day * 24;
alert(`в секундах это будет ${hour * 3600}`);
//задание №9
alert("задание №9");
let number_1 = prompt("укажите первое число");
let number_2 = prompt("укажите второе число");
if(number_1 > number_2){
    alert(`большее число ${number_1}`);
}
else if(number_1 < number_2){
    alert(`большее число ${number_2}`);
}


alert("задание №10");
//т.к. массивы мы не проходили буду делать, как есть

let numb_1 = prompt("укажите первое число");
let numb_2 = prompt("укажите второе число");
let numb_3 = prompt("укажите третье число");
if(numb_1 > numb_2 && numb_2 > numb_3)
{
    alert(`${numb_1}, ${numb_2}, ${numb_3}`);
}
else if(numb_1 > numb_3 && numb_3 > numb_2)
{
    alert(`${numb_1}, ${numb_3}, ${numb_2}`);
}
else if(numb_1 < numb_2 && numb_1 > numb_3)
{
    alert(`${numb_2}, ${numb_1}, ${numb_3}`);
}
else if(numb_3 < numb_2 && numb_3 > numb_1)
{
    alert(`${numb_2}, ${numb_3}, ${numb_1}`);
}
else if(numb_3 > numb_1 && numb_1 > numb_2)
{
    alert(`${numb_3}, ${numb_1}, ${numb_2}`);
}
else if(numb_3 > numb_2 && numb_2 > numb_1)
{
    alert(`${numb_3}, ${numb_2}, ${numb_1}`);
}


alert("задание №11");
let sum = 0;
let sum1 = 0;
for(i = 0; i < 20; i++){
    if(i % 3 == 0){
        sum += i;
    }
}
for(i = 0; i < 20; i++){
    if(i % 5 == 0){
        sum1 += i;
    }
}
alert(sum + sum1);


