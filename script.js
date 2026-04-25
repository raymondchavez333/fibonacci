function fibonacci(num){

    let array = [0, 1];

    for(let i = 2; i < 4; i++){
        let minus1 = array[1];
        let minus2 = array[0];

        let currentNum = minus1 + minus2;

        array.push(currentNum);
    }

    return array;
}

console.log(fibonacci(3));