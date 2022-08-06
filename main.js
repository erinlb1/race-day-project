let raceNumber = Math.floor(Math.random() * 1000);
var earlyRegister = false;
var age = 16;

if (age > 18 && earlyRegister) {
    raceNumber += 1000; 
        console.log(`You will race at 9:30 am and your race number is ${raceNumber}.`);
} else if (age > 18 && !earlyRegister) {
    console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`);
} else if (age < 18) {
    console.log(`You will run at 12:30pm and your race number is ${raceNumber}.`);
}
