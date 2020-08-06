var urechi = 1;

while (urechi <= 40) {
    
    while (urechi <= 20) {
        
        console.log(urechi);

        urechi++;        
    }
  
    if (urechi == 21) {

        console.log('Break');
    }

    if (urechi % 2 !== 0) {
        
        console.log(urechi - 20);
    }

    urechi++;
}

console.log("Break");

var manute = [14, 5, 52, 85, 96, 18, 78, 25, 67];

var sum = manute[0];

for (var i = 1; i <= manute.length - 1; i++) {
    sum = sum + manute[i];
}

console.log(sum);

console.log("Break")

var mici = [499, 40, 400, 899, 489, 61, 74];

var max = mici[0];

for (var m = 1; m < mici.length - 1; m++) {

    if (mici[m] > max) { 

        max = mici[m]

    }
}
console.log(max);

console.log("Break");

var chiute = [10, 8, 6, 7, 10, 5, 11, 10, 10, 4];

var counter = 0;


for (var i = 0; i < chiute.length - 1; i++) {

    if (chiute[i] == 10) {

        counter = counter + 1;
    }

}

console.log(counter);




