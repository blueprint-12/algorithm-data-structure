//πλ°±μ€λ¬Έμ 10171λ² κ³ μμ΄ λ§λ€κΈ°
/*Key Point 
βμ­μ¬λμ¬ νν: \\ λκ° μλ ₯ν΄μΌ μ μμλ ₯
β μ€λ°κΏ: \n μ ν΅ν΄ νν 

β ref: https://stackoverflow.com/questions/3903488/javascript-backslash-in-variables-is-causing-an-error
β escape character in JS(κ°λ): https://www.tutorialspoint.com/escape-characters-in-javascript

βν΄λΉλ΄μ©μ κ΄ν μμΈν μ€λͺ 

"The backslash (\) is an escape character in Javascript (along with a lot of other C-like languages). 
This means that when Javascript encounters a backslash, it tries to escape the following character. For instance,
 \n is a newline character (rather than a backslash followed by the letter n).
In order to output a literal backslash, you need to escape it.
That means \\ will output a single backslash (and \\\\ will output two, and so on). 
The reason "aa ///\" doesn't work is because the backslash escapes the " (which will print a literal quote),
and thus your string is not properly terminated. 
Similarly, "aa ///\\\" won't work, because the last backslash again escapes the quote.
Just remember, for each backslash you want to output, you need to give Javascript two."
*/

console.log("\\    /\\");
console.log(" )  ( ')");
console.log("(  /  )");
console.log(" \\(__)|");
