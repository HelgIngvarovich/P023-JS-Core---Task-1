// Task 1

function DNA_Replace(dna) {
  dna = dna.toUpperCase();
   let mirroredDNA = ''

  for(let i = 0; i < dna.length; i++) {
      if(dna[i] === 'A') {
        mirroredDNA += 'T';
        continue;
       }
      if(dna[i] === 'C') {
        mirroredDNA += 'G';
        continue;
       }
       if(dna[i] === 'G') {
        mirroredDNA += 'C';
        continue;
       }   
       if(dna[i] === 'T') {
        mirroredDNA += 'A';
        continue;
       }
       else {
        alert('I dont understand');
        break;
       }      
  }
  return mirroredDNA;
}
console.log(DNA_Replace('ACTG'));

//------------------------------------------
// Task 2

function textToNumber(number) {
  let firstArr = ['Ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять', 'Десять'];
  let seconArr = ['Одиннадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семнадцать', 
                'Восемнадцать', 'Девятнадцать'];
  let thirdArr = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
  
 if (number >= 0 && number <= 10) {
    return firstArr[number];
 } 
 if (number > 10 && number < 20) {
    return seconArr[number - 11];
 }
 if (number >= 20 && number < 99) {
    let str = `${number}`;
    str = str.split('');
    let firstNumber = str[0];
    let secondNumber = str[1];
     return `${thirdArr[firstNumber - 2]} ${firstArr[secondNumber]}`;;
 }
 else {
  let incorrectValue = 'В моем словаре нет символов для описания вашего числа';
    return incorrectValue;
 }
}
 alert(textToNumber(-1));