
const numbers = [18, 20,19,26,25,28,28]
let index = 0
let sum  = 0
do{
  
    sum += numbers[index]// sum = sum + numbers[index] se puede hacer de las dos formas 
    console.log(sum)
    index++//index = index + 1 se puede hacer de las dos formas 
}while(index < numbers.length)
console.log (sum)