console.log("Hello world");

for(let i = 0; i < 10; i++){
    console.log(i);
}

// Set timeout - delay 2 seconds then print something
doThis = () => {
    console.log("Printed after 2 seconds delay");
}

// Set interval - print every 2 seconds until stop the application
var counter = 0;
alsoDothis = () => {
    console.log(new Date());
    counter++;
    if(counter >= 2){
        clearInterval(runningTimer);
    }
}




setTimeout(doThis, 2000);

setInterval(alsoDothis, 1000);

// Array Handling
console.log("\n\nArray Handling")

const myArray = [10, 20, 30];
console.log(myArray);
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

//push and pop, shift and unshift
myArray.push(400);
myArray.push(500);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(3);
myArray.unshift(4);
console.log(myArray);
myArray.shift(7);
myArray.shift(8);
console.log(myArray);