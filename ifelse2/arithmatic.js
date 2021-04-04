//Enter 3 numbers and find max and min from operations
function maxMinOperations(a,b,c){
    let value1 = a+b*c;
    let value2 = a%b+c;
    let value3 = c+a/b;
    let value4 = a*b+c;
    let max = Math.max(value1,value2,value3,value4);
    let min = Math.min(value1,value2,value3,value4);

    if(value1==max){
        console.log("Max: "+"a+b*c="+value1);
    }else if(value2==max){
        console.log("Max: "+"a%b+c="+value2);
    }else if(value3 == max){
        console.log("Max: "+"c+a/b="+value3);
    }else if(value4 == max){
        console.log("Max: "+"a*b+c="+value4);
    }

    if (value1 == min) {
        console.log("Min: "+"a+c*c="+value1);
    } else if (value2 == min) {
        console.log("Min: "+"a%b+c="+value2);
    } else if (value3 == min) {
        console.log("Min: "+"c+a/b="+value3);
    } else if (value4 == min) {
        console.log("Min: "+"a*b+c="+value4);
    }
}
maxMinOperations(1,2,3);
maxMinOperations(8,15,12);
maxMinOperations(0,19,12);