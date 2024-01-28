marks = 48;

if(marks <= 100 && marks >= 90){
    console.log('A+')
}
else if(marks <= 89 && marks >= 80){
    console.log('B')
}
else if(marks <= 79 && marks >= 70){
    console.log('C');
}
else if(marks <= 69 && marks >= 60){
    console.log('D');
}
else if(marks <= 59){
    console.log('F --- better luck next time, stay working hard!');
}
else{
    console.log('contact to your school or college');
}