var num1 = 10;
var num2 = 15;
var num3 = 5;
console.log(num2 > num1);
console.log(num1 > num3);
if ( num2 > num1 && num1 > num3 )  { 
    console.log(`O Número ${num2} é maior que o ${num1} e o número ${num1} é maior que o número ${num3}`)
}   else {
    console.log(`O número ${num1} é menor que o número ${num2}`)
}
console.log(num3 > num1 );
console.log(num2 > num3);
if ( num3 > num1 || num2 > num1 )  {
    console.log(`1 - ${num1} ${num2} ${num3} `)
}  else {
    console.log(`2 - ${num1} ${num2} ${num3} `)
}