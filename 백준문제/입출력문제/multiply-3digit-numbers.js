//๐๋ฐฑ์ค๋ฌธ์  2588๋ฒ
//fs๋ชจ๋๋ก ์ฌ๋ฌ์ค ์๋ ฅ๊ฐ์ ๋ฐ์์ค๋ ๋ฒ
//e.g.) let input = fs.readFileSync('text.txt','utf8').split('\n');

/*
์๋ ฅ ์์ 
472
385
*/
/*
์ถ๋ ฅ ์์ 
2360
3776
1416
181720
*/

// ํด๋น ์ฝ๋๋ ๋ฌธ์์ด-> ์ซ์๋ก ๋ฐ์ดํฐํ์์ ๋ณํํ์ง ์์๋๋ฐ ์ ์์๋ ๋๋ค.
// ์ ๊ทธ๋ฐ ์ง ํ์ธํด๋ณด๋ ์ฌ์น์ฐ์ฐ ์ค ๋ง์์ ์ ์ธํ๋ฉด ์ซ์/๋ฌธ์ํ ์๊ด์์ด ๊ณ์ฐ์ด ๋๋ค๊ณ  ํ๋ค.
// ์ฌ์ง์ด ์ฐ์ฐ์ด ๋๋ string์ number๋ก ์๋ ํ๋ณํ์ด ๋๋ค.
{
  const num1 = '10';
  const num2 = '20';
  const result = num1 * num2;
  console.log(typeof result); // number๋ก ์๋ ํ๋ณํ
}

const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split('\n');

const [firstNum, secondNum] = data;
const [a, b, c] = secondNum;

let ac = firstNum * c;
let ab = firstNum * b;
let aa = firstNum * a;

console.log(ac);
console.log(ab);
console.log(aa);
console.log(firstNum * secondNum);

//ํด๋น ๋ฌธ์ ์ ์นด๋ผ์ถ๋ฐ ์๊ณ ๋ฆฌ์ฆ์ ์ ์ฉํด์ผ ๊ฒ ๋ค๊ณ  ์๊ฐํ๋๋ฐ ๊ทธ๋ด ํ์๊น์ง ์์๋ค.
// ์นด๋ผ์ถ๋ฐ ์๊ณ ๋ฆฌ์ฆ์ผ๋ก ๋ถํ ์ ๋ณตํ๋ ๊ฒ๋ ๋์ค์ ํด๋ด์ผ ๊ฒ ๋ค.
