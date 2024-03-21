const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
const input = fs.readFileSync(__dirname + filePath).toString().trim().split("\n");

const T = input[0];
const testCases = input.slice(1);
let answer = [];

for (let i = 0; i < T; i++) {
    let mid = [];
    let pick = 0;
    let nthCase = [];

    const N = testCases[i];

    nthCase.push(
        testCases
            .splice(i+1, N)
            .map((e) => e.split(" "))
            .sort(compare)
            )

    let standard = nthCase[0][0][1];  //서류 1등의 면접 점수 (기준점)

    // console.log(standard)
    let standard_2 = '';
    for(let i=0; i < nthCase[0].length; i++ ) {
        if(nthCase[0][i][1] <= standard) mid.push(nthCase[0][i])
        if(nthCase[0][i][1] === '1')  standard_2 = nthCase[0][i][0]
    }
    // console.log(mid)

    for (let i=0; i < mid.length; i++){
        if(mid[i][0] <= standard_2) pick++;
    }
    answer.push(pick)
}

console.log(answer.join('\n'))

function compare(a, b) {
    return a[0] - b[0];
}

