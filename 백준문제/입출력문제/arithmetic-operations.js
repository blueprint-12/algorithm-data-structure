//๐๋ฐฑ์ค๋ฌธ์ 1001๋ฒ A-B ๋ง๋ค๊ธฐ
// ๋ ์ ์ A์ B๋ฅผ ์๋ ฅ๋ฐ์ ๋ค์, A-B๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
/*
โ์๋ ฅ
์ฒซ์งธ ์ค์ A์ B๊ฐ ์ฃผ์ด์ง๋ค. (0 < A, B < 10)
โ์ถ๋ ฅ
์ฒซ์งธ ์ค์ A-B๋ฅผ ์ถ๋ ฅํ๋ค.

โ์๋ ฅ์์ : 3 2, ์ถ๋ ฅ์์ : 1
*/

const fs = require('fs');
// split() - separator๋ก ๊ตฌ๋ถ๋ ๋ฌธ์์ด์ ๋ฐฐ์ด์ ๋ด์ ๋ฆฌํดํ๋ค.
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(inputData[0]) - Number(inputData[1]));

//๐๋ฐฑ์ค๋ฌธ์ 10998๋ฒ A*B ๋ง๋ค๊ธฐ

const fs = require('fs');
const inputDataArr = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(+inputDataArr[0] * +inputDataArr[1]);

//๐๋ฐฑ์ค๋ฌธ์ 1008๋ฒ A/B ๋ง๋ค๊ธฐ
//์ฒซ์งธ ์ค์ A/B๋ฅผ ์ถ๋ ฅํ๋ค. ์ค์  ์ ๋ต๊ณผ ์ถ๋ ฅ๊ฐ์ ์ ๋์ค์ฐจ ๋๋ ์๋์ค์ฐจ๊ฐ 10-9 ์ดํ์ด๋ฉด ์ ๋ต์ด๋ค.

const fs = require('fs');
const inputData2 = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(+inputData2[0] / +inputData2[1]);

//๐๋ฐฑ์ค๋ฌธ์ 10869๋ฒ ์ฌ์น์ฐ์ฐ ์ถ๋ ฅํ๊ธฐ
// ๋ ์์ฐ์ A์ B๊ฐ ์ฃผ์ด์ง๋ค.
// ์ด๋, A+B, A-B, A*B, A/B(๋ชซ), A%B(๋๋จธ์ง)๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
const fs = require('fs');
const inputData3 = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(+inputData3[0] + +inputData3[1]);
console.log(+inputData3[0] - +inputData3[1]);
console.log(+inputData3[0] * +inputData3[1]);
console.log(Math.floor(+inputData3[0] / +inputData3[1]));
console.log(+inputData3[0] % +inputData3[1]);

//์์ ์ฝ๋๊ฐ ํ ๋ฒ ํ๋ ธ๋๋ฐ ์ด์ ๋ ๋๋๊ธฐ์ ๊ฒฐ๊ณผ๊ฐ์ด ์ ์๋ก ๋จ์ด์ง๋ ๊ฒ์ ์ ๋๋ก ํ์ธํ์ง ์์์
//Math.floor๋ฅผ ํตํด ์์์ ์ ์์ ์ฃผ์
//์ฝ๋๊ฐ ์ ๋ ๊ฒ ์ฌ๋ฌ๊ฐ ์ถ๋ ฅํ๋๊น ๋๋ฌด ๋๋ฌ์๋ณด์ ์๋์๊ฐ์ด ๋ณ์๋ก ๋ฐ๋ก ๋นผ์ค๋ค.
const fs = require('fs');
const inputDatas = fs.readFileSync('/dev/stdin').toString().split(' ');
let firstData = +inputDatas[0]; //String ํ์์ ๋ฐ์ดํฐ๋ฅผ +๋ฅผ ํตํด ์ซ์๋ก ํ๋ณํ
let secondData = +inputDatas[1];
console.log(firstData + secondData);
console.log(firstData - secondData);
console.log(firstData * secondData);
console.log(Math.floor(firstData / secondData));
console.log(firstData % secondData);
