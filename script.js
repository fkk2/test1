// 
var money,
    time;

var d = new Date();
// var months = ["Січня", "Лютого", "Березня", "Квітня", "Травня", 
//                 "Червня", "Липня", "Серпня", "Вересня", "Жовтня",
//                  "Листопада", "Грудня"];

var fulldat = d.getFullYear() +"-"+ (d.getMonth()+1) +"-"+d.getDate();

var appData = {
    bData: '',
    timeData: '',
    expenses: { qwery1: '' , qwery2: ''},
    income : new Array(),
    savings: false
}

money = prompt("Ваш бюджет на месяц?","");
time = prompt("Введите дату в формате YYYY-MM-DD", fulldat );

appData.bData = money;
appData.timeData = time;

appData.expenses.qwery1 = 
prompt("Введите обязательную статью расходов в этом месяцe","");

appData.expenses.qwery2 =
prompt ("Во сколько обойдется?", "");

alert("бюджет на 1 день " + (appData.bData/30) );
