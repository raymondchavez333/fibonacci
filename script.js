function fibonacci(num){

    let array = [0, 1];

    for(let i = 2; i < 25; i++){
        let minus1 = array[i-1];
        let minus2 = array[i-2];

        let currentNum = minus1 + minus2;

        array.push(currentNum);
    }

    return array;
}

console.log(fibonacci(3));