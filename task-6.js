var ticketPrice = 1000;

var children = 10;
var student = false;
var seniorCitizenAge = 60;

if(children < 10){
    console.log('ticket is free for you!');
}
else if(student == true){
    var discountHalf = ticketPrice / 100 * 50;
    var payAmmount = ticketPrice - discountHalf;
    console.log('As a Student payAmmount' + ' ' + payAmmount);
}
// else if(student == false){
//     console.log('pay full price: 1000 tk.');
// }

else if(seniorCitizenAge >= 60){
    var discountFiveteenPercent = ticketPrice / 100 * 15;
    var payAmmount = ticketPrice - discountFiveteenPercent;
    console.log(payAmmount);
}
else{
    console.log('pay regular Price: 1000 tk');
}