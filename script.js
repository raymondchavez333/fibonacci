function fibonacci(num){
    num = Number(num);

    if(num < 0){
        return "OOPS";
    }

    let array = [0, 1];

    for(let i = 2; i < 26; i++){
        let minus1 = array[i-1];
        let minus2 = array[i-2];

        let currentNum = minus1 + minus2;

        array.push(currentNum);
    }

    let nthMember = array[num];

    return nthMember;
}

console.log(fibonacci(-25));