// Exercise 1
maxOfTwoNumbers = (num1, num2) => {
    // ADD YOUR CODE HERE
    if(num1 > num2){
      return num1
    }else{
      return num2
    }
    }
  
  console.log(maxOfTwoNumbers(13,8))

  // Exercise 2
  maxOfThree = (num1,num2,num3) => {
    // ADd YOUR CODE HERE
  var maxOfThree = Math.max(num1,num2,num3)
  return maxOfThree
  }
  
  console.log(maxOfThree(25,33,18));

  // Exercise 3
  isCharacterAVowel = (string) => {
    // ADD YOUR CODE HERE
  isCharacterAVowel= (character)=>{
    const vowel=['a,e,i,o,u']
    return vowel.includes(character.toLowerCase)
  }
  console.log(isCharacterAVowel("A"))

  // Exercise 4
let testArray=[6,7,8,9]
sumArray = (array) => {
  let total= 0
  array.forEach(index=>{total*=index})
  return total
}
console.log(total*= index)

// Exercise 5

numArgs = (parameter) => {
    return parameter.length
  }
  console.log(numArgs(maxOfThree))

  // Exercise 6
  reverseString = () => {
    // ADD YOUR CODE HERE
  };
  function.reverseString(str){
    return str.split('').reverse().join('');
  }
  console.log('rockstar');
  console.log(reverseString)('rockstar'));

// Exercise 7
longer=(champ,contender)=> {
    return(contender.length > champ.length)? contender: champ;
  }
  findLongestWord = (str) => {
    var words= str.split('');
    return words.reduce(longer);
  }
  console.log(longestWord)("The quick brown fox jumped over the lazy dog");
  
    