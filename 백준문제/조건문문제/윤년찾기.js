//πλ°±μ€λ¬Έμ 2753λ² μ€λ

/*
βQ. μ°λκ° μ£Όμ΄μ‘μ λ, μ€λμ΄λ©΄ 1, μλλ©΄ 0μ μΆλ ₯νλ νλ‘κ·Έλ¨μ μμ±νμμ€.

μ€λμ μ°λκ° 4μ λ°°μμ΄λ©΄μ, 100μ λ°°μκ° μλ λ λλ 400μ λ°°μμΌ λμ΄λ€.
βμλ ₯:μ²«μ§Έ μ€μ μ°λκ° μ£Όμ΄μ§λ€. μ°λλ 1λ³΄λ€ ν¬κ±°λ κ°κ³ , 4000λ³΄λ€ μκ±°λ κ°μ μμ°μμ΄λ€.
βμΆλ ₯: μ²«μ§Έ μ€μ μ€λμ΄λ©΄ 1, μλλ©΄ 0μ μΆλ ₯νλ€.

βμμ  μλ ₯: 
2000 / 1
*/

const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString();
const year = Number(data);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log('1');
} else {
  console.log('0');
}
