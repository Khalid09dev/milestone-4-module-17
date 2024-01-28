var myScore = 78;
var friendScore = 88;

if(myScore >= 80){
    if(friendScore > 80){
        console.log('we can go for a lunch!');
    }
    if(friendScore >= 60 && friendScore < 80){
        console.log('better luck next time!');
    }
    if(friendScore < 60 && friendScore >= 40){
        console.log('keep your friend message unseen');
    }
    if(friendScore < 40){
        console.log('you have to block your friend!');
    }
}
else{
    console.log('go home and get diperessed and start feeling sad.');
}